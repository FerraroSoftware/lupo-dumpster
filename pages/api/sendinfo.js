import sgMail from "@sendgrid/mail";
import { verifyRecaptcha } from "../../lib/recaptcha";
import { buildLeadEmail, normalizePhone } from "../../lib/lead-email";
import { siteConfig } from "../../lib/site-config";

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      serviceNeeded,
      message,
      recaptchaToken,
      company,
    } = req.body;

    // Hidden honeypot field: real visitors never fill it in.
    if (company) {
      return res.status(200).json({ success: true });
    }

    // Verify reCAPTCHA token with 0.9 minimum score
    const recaptchaResult = await verifyRecaptcha(
      recaptchaToken,
      "submit_form",
      0.9,
    );

    if (!recaptchaResult.success) {
      console.error("reCAPTCHA verification failed:", recaptchaResult.error);
      return res.status(400).json({
        error: `Security verification failed. Please try again or contact us directly at ${siteConfig.phone}.`,
        details: recaptchaResult.error,
      });
    }

    console.log(
      `reCAPTCHA verified successfully with score: ${recaptchaResult.score}`,
    );

    const easternTime = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const formattedPhone = normalizePhone(phone).display;
    const name = [firstName, lastName]
      .map((n) => (n || "").trim())
      .filter(Boolean)
      .join(" ");
    const { subject, html, text } = buildLeadEmail({
      name,
      email,
      phone,
      serviceNeeded,
      message,
      receivedAt: easternTime,
    });

    const msg = {
      to: "a.lupollc@gmail.com",
      // to: "contact@blackcatwebsitedesign.com",
      cc: ["contact@blackcatwebsitedesign.com", "alupo825@gmail.com"],
      from: {
        email: "contact@blackcatwebsitedesign.com",
        name: "Lupo Website Leads",
      },
      ...(email && { replyTo: email }),
      subject,
      text,
      html,
    };

    const emailPromise = sgMail.send(msg);

    // Send to Zapier webhook if URL is configured
    const zapierPromise = process.env.ZAPIER_WEBHOOK_URL
      ? fetch(process.env.ZAPIER_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone: formattedPhone,
            serviceNeeded,
            message: message || "None provided",
            timestamp: easternTime,
          }),
        })
      : Promise.resolve(null);

    // Wait for both operations to complete
    const [emailResult, zapierResult] = await Promise.allSettled([
      emailPromise,
      zapierPromise,
    ]);

    // Check if email failed
    if (emailResult.status === "rejected") {
      console.error("Error sending email:", emailResult.reason);
      throw new Error("Failed to send email");
    }

    // Log Zapier webhook result (don't fail if webhook fails)
    if (zapierResult.status === "rejected") {
      console.error("Error sending to Zapier webhook:", zapierResult.reason);
    } else if (zapierResult.value) {
      console.log(
        "[v0] Zapier webhook response status:",
        zapierResult.value.status,
      );
    }

    console.log("Zapier webhook result:", zapierResult);

    // Return success response
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error processing request:", error);
    return res.status(500).json({ error: "Failed to process request" });
  }
}

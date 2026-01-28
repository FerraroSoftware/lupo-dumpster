import sgMail from "@sendgrid/mail";
import { verifyRecaptcha } from "@/lib/recaptcha";

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function formatPhoneNumber(phone) {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, "");

  // Format as (XXX) XXX-XXXX
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
      6
    )}`;
  }

  // Return original if not 10 digits
  return phone;
}

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
    } = req.body;

    // Verify reCAPTCHA token with 0.9 minimum score
    const recaptchaResult = await verifyRecaptcha(
      recaptchaToken,
      "submit_form",
      0.9
    );

    if (!recaptchaResult.success) {
      console.error("reCAPTCHA verification failed:", recaptchaResult.error);
      return res.status(400).json({
        error:
          "Security verification failed. Please try again or contact us directly at (727) 317-6717.",
        details: recaptchaResult.error,
      });
    }

    console.log(
      `reCAPTCHA verified successfully with score: ${recaptchaResult.score}`
    );

    // Format the email content
    const emailContent = `
      New Service Request
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      
      Service Needed: ${serviceNeeded}
      Message: ${message || "None provided"}
    `;

    // Configure email message
    const msg = {
      to: "a.lupollc@gmail.com",
      // to: "contact@blackcatwebsitedesign.com",
      cc: ["contact@blackcatwebsitedesign.com", "alupo825@gmail.com"],
      // from: "contact@ferrarosoftware.com",
      from: "contact@blackcatwebsitedesign.com",
      subject: "New Dumpster Service Request", // Updated subject to be more generic
      text: emailContent,
      html: emailContent.replace(/\n/g, "<br>"),
    };

    const emailPromise = sgMail.send(msg);

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

    const formattedPhone = formatPhoneNumber(phone);

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
        zapierResult.value.status
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

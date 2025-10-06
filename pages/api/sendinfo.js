import sgMail from "@sendgrid/mail";

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { firstName, lastName, email, phone, serviceNeeded, message } =
      req.body;

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
      cc: "contact@blackcatwebsitedesign.com",
      // from: "contact@ferrarosoftware.com",
      from: "contact@blackcatwebsitedesign.com",
      subject: "New Dumpster Service Request", // Updated subject to be more generic
      text: emailContent,
      html: emailContent.replace(/\n/g, "<br>"),
    };

    // Send email
    await sgMail.send(msg);

    // Return success response
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}

import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone, email, address, notes } = req.body;

    // Basic validation
    if (!name || !phone || !email || !address) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: "a.lupollc@gmail.com",
      cc: "lupodumpsterrentals@gmail.com",
      from: "contact@ferrarosoftware.com",
      subject: `New $275 Dumpster Deal Inquiry: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #D32F2F;">New Dumpster Deal Inquiry!</h2>
          <p>You've received a new inquiry from the Facebook $275 Dumpster Deal page.</p>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <h3 style="color: #333;">Contact Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Drop-off Address:</strong> ${address}</li>
          </ul>
          ${
            notes
              ? `
          <h3 style="color: #333;">Project Notes:</h3>
          <p style="background-color: #f9f9f9; border: 1px solid #eee; padding: 10px; border-radius: 4px;">
            ${notes.replace(/\n/g, "<br>")}
          </p>
          `
              : ""
          }
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p style="font-size: 0.9em; color: #777;">
            This email was generated automatically from your website's contact form.
          </p>
        </div>
      `,
      text: `
        New Dumpster Deal Inquiry!
        You've received a new inquiry from the Facebook $275 Dumpster Deal page.

        Contact Details:
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Drop-off Address: ${address}
        ${notes ? `Project Notes:\n${notes}` : ""}

        This email was generated automatically from your website's contact form.
      `,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("SendGrid Error:", error.response?.body || error.message);
      res.status(500).json({
        error: "Failed to send email. Please try again later.",
        details: error.response?.body?.errors,
      });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

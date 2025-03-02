import sgMail from "@sendgrid/mail";

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  try {
    const data = req.body;

    // Basic validation
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.location ||
      !data.date ||
      !data.time
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Format the date to show only YYYY-MM-DD
    const formattedDate = new Date(data.date).toISOString().split("T")[0];

    // Format the time to show AM/PM
    const formattedTime = new Date(
      `2000-01-01T${data.time}`
    ).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    // Format the plain text email (for email clients that don't support HTML)
    const textContent = `
      New Dumpster Rental Request

      Customer Information:
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}

      Rental Details:
      Drop-off Location: ${data.location}
      Drop-off Date: ${formattedDate}
      Drop-off Time: ${formattedTime}
      
      Dumpster Contents: ${data.dumpsterContents}
      
      Additional Details:
      ${data.additionalDetails || "None provided"}
    `;

    // Create HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333333;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #dc2626;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 5px 5px 0 0;
            }
            .content {
              background-color: #ffffff;
              padding: 20px;
              border: 1px solid #e5e5e5;
              border-radius: 0 0 5px 5px;
            }
            .section {
              margin-bottom: 20px;
              padding-bottom: 20px;
              border-bottom: 1px solid #e5e5e5;
            }
            .section:last-child {
              border-bottom: none;
              margin-bottom: 0;
              padding-bottom: 0;
            }
            .section-title {
              font-size: 18px;
              font-weight: bold;
              color: #dc2626;
              margin-bottom: 10px;
            }
            .field {
              margin-bottom: 10px;
            }
            .label {
              font-weight: bold;
              color: #666666;
            }
            .value {
              color: #333333;
            }
            @media only screen and (max-width: 600px) {
              .container {
                width: 100% !important;
                padding: 10px !important;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">New Dumpster Rental Request</h1>
            </div>
            <div class="content">
              <div class="section">
                <div class="section-title">Customer Information</div>
                <div class="field">
                  <span class="label">Name:</span>
                  <span class="value">${data.name}</span>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value">${data.email}</span>
                </div>
                <div class="field">
                  <span class="label">Phone:</span>
                  <span class="value">${data.phone}</span>
                </div>
              </div>

              <div class="section">
                <div class="section-title">Rental Details</div>
                <div class="field">
                  <span class="label">Drop-off Location:</span>
                  <span class="value">${data.location}</span>
                </div>
                <div class="field">
                  <span class="label">Drop-off Date:</span>
                  <span class="value">${formattedDate}</span>
                </div>
                <div class="field">
                  <span class="label">Drop-off Time:</span>
                  <span class="value">${formattedTime}</span>
                </div>
                <div class="field">
                  <span class="label">Dumpster Contents:</span>
                  <span class="value">${data.dumpsterContents}</span>
                </div>
              </div>

              ${
                data.additionalDetails
                  ? `
                <div class="section">
                  <div class="section-title">Additional Details</div>
                  <div class="field">
                    <span class="value">${data.additionalDetails}</span>
                  </div>
                </div>
              `
                  : ""
              }

              <div style="font-size: 12px; color: #666666; margin-top: 20px; text-align: center;">
                This is an automated message from your website's contact form.
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Configure email message
    const msg = {
      // to: "contact@ferrarosoftware.com",
      to: "a.lupollc@gmail.com",
      cc: "lupodumpsterrentals@gmail.com",
      from: "contact@ferrarosoftware.com",
      subject: `New Dumpster Rental Request from ${data.name}`,
      text: textContent, // Fallback plain text version
      html: htmlContent, // HTML version
    };

    // Send email
    await sgMail.send(msg);

    // Return success response
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("SendGrid Error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}

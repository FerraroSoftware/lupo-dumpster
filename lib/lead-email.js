import { siteConfig } from "./site-config.js";

const BRAND = "#DC2626";
const INK = "#14120E";
const SOFT = "#FEE2E2";
const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const escapeHtml = (value = "") =>
  String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// The forms send extra details as "Label: value" lines inside `message`.
function parseMessage(message = "") {
  const fields = [];
  const notes = [];
  for (const line of String(message).split("\n").map((l) => l.trim()).filter(Boolean)) {
    const match = line.match(/^([A-Za-z][\w ()'-]{0,40}):\s*(.+)$/);
    if (match) fields.push([match[1], match[2]]);
    else notes.push(line);
  }
  return { fields, notes: notes.join("\n") };
}

function row(label, value, href) {
  const content = href
    ? `<a href="${escapeHtml(href)}" style="color:${INK};font-weight:600;text-decoration:underline;">${escapeHtml(value)}</a>`
    : escapeHtml(value);
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #ECECEC;width:38%;vertical-align:top;font-size:13px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:#71717A;">${escapeHtml(label)}</td>
      <td style="padding:12px 0;border-bottom:1px solid #ECECEC;vertical-align:top;font-size:16px;color:${INK};">${content}</td>
    </tr>`;
}

function button(label, href, primary) {
  const style = primary
    ? `background:${BRAND};color:#FFFFFF;border:2px solid ${BRAND};`
    : `background:#FFFFFF;color:${INK};border:2px solid ${INK};`;
  return `<a href="${escapeHtml(href)}" style="${style}display:inline-block;padding:14px 26px;border-radius:8px;font-size:16px;font-weight:700;text-decoration:none;margin:0 6px 10px;">${escapeHtml(label)}</a>`;
}

export function buildLeadEmail({ name, email, phone, phoneDigits, serviceNeeded, message, receivedAt }) {
  const { fields, notes } = parseMessage(message);
  const zip = fields.find(([k]) => k === "ZIP")?.[1];
  const displayName = name || "Website visitor";
  const service = serviceNeeded || "Service request";

  const subject = ["New lead", service, displayName, zip].filter(Boolean).join(" · ");
  const preheader = `${displayName} wants ${service.toLowerCase()}${zip ? ` in ${zip}` : ""}. Call ${phone}.`;

  const rows = [
    row("Name", displayName),
    row("Phone", phone, `tel:+1${phoneDigits}`),
    email ? row("Email", email, `mailto:${email}`) : "",
    ...fields.map(([k, v]) => row(k, v)),
    row("Received", `${receivedAt} ET`),
  ].join("");

  const notesBlock = notes
    ? `
      <tr><td style="padding:0 32px 8px;">
        <div style="margin-top:8px;padding:16px 18px;background:#F4F4F5;border-left:4px solid ${BRAND};border-radius:6px;font-size:15px;line-height:1.55;color:${INK};white-space:pre-line;">${escapeHtml(notes)}</div>
      </td></tr>`
    : "";

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(subject)}</title></head>
<body style="margin:0;padding:0;background:#F4F4F5;font-family:${FONT};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F4F4F5;">
    <tr><td align="center" style="padding:24px 12px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#FFFFFF;border-radius:14px;overflow:hidden;">
        <tr><td style="background:${INK};padding:22px 32px;border-bottom:4px solid ${BRAND};">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="vertical-align:middle;padding-right:12px;"><img src="${siteConfig.url}/images/brand/lupo-logo.png" width="44" height="38" alt="Lupo" style="display:block;border:0;"></td>
            <td style="vertical-align:middle;font-size:20px;font-weight:800;letter-spacing:0.02em;color:#FFFFFF;text-transform:uppercase;">Lupo <span style="color:#EF4444;">Dumpster</span> Rentals</td>
          </tr></table>
        </td></tr>
        <tr><td style="padding:28px 32px 8px;">
          <span style="display:inline-block;padding:5px 12px;border-radius:999px;background:${SOFT};color:#B91C1C;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">New website lead</span>
          <h1 style="margin:14px 0 4px;font-size:26px;line-height:1.2;color:${INK};">${escapeHtml(service)}</h1>
          <p style="margin:0;font-size:16px;color:#52525B;">${escapeHtml(displayName)}${zip ? ` &middot; ZIP ${escapeHtml(zip)}` : ""}</p>
        </td></tr>
        <tr><td align="center" style="padding:20px 26px 6px;">
          ${button(`Call ${phone}`, `tel:+1${phoneDigits}`, true)}${button("Text them", `sms:+1${phoneDigits}`, false)}
        </td></tr>
        <tr><td style="padding:8px 32px 8px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
        </td></tr>
        ${notesBlock}
        <tr><td style="padding:24px 32px 28px;font-size:13px;line-height:1.5;color:#71717A;">
          Call back fast: most people book with the first company that answers. Sent from the form on <a href="${siteConfig.url}" style="color:#71717A;">lupodumpsterrentals.com</a>.
        </td></tr>
      </table>
      <p style="margin:16px 0 0;font-size:12px;color:#A1A1AA;">Internal lead notification &middot; ${escapeHtml(siteConfig.name)}</p>
    </td></tr>
  </table>
</body>
</html>`;

  const text = [
    `NEW WEBSITE LEAD: ${service}`,
    "",
    `Name: ${displayName}`,
    `Phone: ${phone}`,
    ...(email ? [`Email: ${email}`] : []),
    ...fields.map(([k, v]) => `${k}: ${v}`),
    ...(notes ? ["", "Message:", notes] : []),
    "",
    `Received: ${receivedAt} ET`,
  ].join("\n");

  return { subject, html, text };
}

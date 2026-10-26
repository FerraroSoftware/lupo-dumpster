import { siteConfig } from "./site-config.js";

const BRAND = "#DC2626";
const INK = "#14120E";
const SOFT = "#FEE2E2";
const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const DISPLAY = "'Barlow Condensed', 'Arial Narrow', Impact, sans-serif";
const MUTED = "#A1A1AA";

const escapeHtml = (value = "") =>
  String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// Visitors can type any format; US numbers (with or without +1) get a clean
// display and a dialable link, anything else is shown as typed.
export function normalizePhone(raw = "") {
  const typed = String(raw).trim();
  let digits = typed.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) digits = digits.slice(1);
  if (digits.length === 10) {
    return { display: `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`, href: `+1${digits}` };
  }
  return { display: typed, href: typed.startsWith("+") ? `+${digits}` : digits };
}

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
    : `background:transparent;color:#FFFFFF;border:2px solid rgba(255,255,255,0.75);`;
  return `<a href="${escapeHtml(href)}" style="${style}display:inline-block;padding:13px 22px;border-radius:8px;font-family:${FONT};font-size:15px;font-weight:700;text-decoration:none;margin:0 4px 10px;">${escapeHtml(label)}</a>`;
}

export function buildLeadEmail({ name, email, phone: rawPhone, serviceNeeded, message, receivedAt }) {
  const { display: phone, href: phoneHref } = normalizePhone(rawPhone);
  const { fields, notes } = parseMessage(message);
  const zip = fields.find(([k]) => k === "ZIP")?.[1];
  const displayName = name || "Website visitor";
  const service = serviceNeeded || "Service request";

  const subject = ["New lead", service, displayName, zip].filter(Boolean).join(" · ");
  const preheader = `${displayName} wants ${service.toLowerCase()}${zip ? ` in ${zip}` : ""}. Call ${phone}.`;

  const rows = [
    row("Name", displayName),
    row("Phone", phone, `tel:${phoneHref}`),
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

  const address = fields.find(([k]) => /address|location/i.test(k))?.[1] || (zip ? `${zip} FL` : "");
  const mapHref = address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}` : "";
  const { street, city, state, zip: officeZip } = siteConfig.address;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="light only"><meta name="supported-color-schemes" content="light">
  <title>${escapeHtml(subject)}</title>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&display=swap" rel="stylesheet">
</head>
<body style="margin:0;padding:0;background:#ECEAE6;font-family:${FONT};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ECEAE6;">
    <tr><td align="center" style="padding:24px 12px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 6px 24px rgba(20,18,14,0.12);">
        <tr><td style="background:${BRAND};height:6px;line-height:6px;font-size:0;">&nbsp;</td></tr>
        <tr><td style="background:${INK};padding:22px 32px 6px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
            <td style="vertical-align:middle;width:56px;"><img src="${siteConfig.url}/images/brand/lupo-logo.png" width="52" height="45" alt="Lupo" style="display:block;border:0;"></td>
            <td style="vertical-align:middle;font-family:${DISPLAY};font-size:24px;font-weight:800;letter-spacing:0.03em;color:#FFFFFF;text-transform:uppercase;">Lupo <span style="color:#EF4444;">Dumpster</span> Rentals</td>
            <td align="right" style="vertical-align:middle;"><span style="display:inline-block;padding:5px 11px;border-radius:999px;background:${BRAND};color:#FFFFFF;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;white-space:nowrap;">New lead</span></td>
          </tr></table>
        </td></tr>
        <tr><td style="background:${INK};padding:22px 32px 26px;">
          <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#EF4444;">&#8212;&nbsp; Website request</p>
          <h1 style="margin:8px 0 6px;font-family:${DISPLAY};font-size:38px;line-height:1.05;font-weight:800;color:#FFFFFF;">${escapeHtml(service)}</h1>
          <p style="margin:0 0 20px;font-size:16px;color:#D4D4D8;">${escapeHtml(displayName)}${zip ? ` &middot; ZIP ${escapeHtml(zip)}` : ""}</p>
          ${button(`Call ${phone}`, `tel:${phoneHref}`, true)}${button("Text", `sms:${phoneHref}`, false)}${email ? button("Email", `mailto:${email}`, false) : ""}
        </td></tr>
        <tr><td style="padding:26px 32px 4px;">
          <p style="margin:0 0 4px;font-family:${DISPLAY};font-size:20px;font-weight:800;letter-spacing:0.02em;text-transform:uppercase;color:${INK};">Lead details</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
          ${mapHref ? `<p style="margin:14px 0 0;font-size:14px;"><a href="${escapeHtml(mapHref)}" style="color:#B91C1C;font-weight:700;text-decoration:none;">Open ${escapeHtml(address)} in Google Maps &rarr;</a></p>` : ""}
        </td></tr>
        ${notesBlock}
        <tr><td style="padding:22px 32px 26px;">
          <div style="padding:14px 18px;background:${SOFT};border-radius:10px;font-size:14px;line-height:1.5;color:#7F1D1D;">
            <strong>Call back fast.</strong> Most people book with the first company that answers.
          </div>
        </td></tr>
        <tr><td style="background:${INK};padding:20px 32px;font-size:12px;line-height:1.6;color:${MUTED};">
          <strong style="font-family:${DISPLAY};font-size:15px;letter-spacing:0.04em;text-transform:uppercase;color:#FFFFFF;">${escapeHtml(siteConfig.name)}</strong><br>
          ${escapeHtml(street)}, ${escapeHtml(city)}, ${escapeHtml(state)} ${escapeHtml(officeZip)} &middot; ${escapeHtml(siteConfig.phone)} &middot; ${escapeHtml(siteConfig.hours)}<br>
          Internal notification from the form on <a href="${siteConfig.url}" style="color:${MUTED};">lupodumpsterrentals.com</a>. The customer did not receive a copy.
        </td></tr>
      </table>
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

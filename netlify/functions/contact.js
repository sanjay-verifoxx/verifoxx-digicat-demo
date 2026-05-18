exports.handler = async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        Allow: "POST",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: "Method not allowed." })
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: "Email service is not configured yet." })
    };
  }

  const params = new URLSearchParams(event.body || "");
  const name = (params.get("name") || "").trim();
  const organisation = (params.get("organisation") || "").trim();
  const email = (params.get("email") || "").trim();
  const reason = (params.get("reason") || "").trim();
  const message = (params.get("message") || "").trim();
  const subject = (params.get("subject") || "Verifoxx demo contact enquiry").trim();

  if (!name || !email || !reason || !message) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: "Please complete all required fields." })
    };
  }

  const safe = (value) => String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#16203f;line-height:1.6">
      <h2 style="margin:0 0 16px">New contact enquiry</h2>
      <p><strong>Name:</strong> ${safe(name)}</p>
      <p><strong>Organisation:</strong> ${safe(organisation || "Not provided")}</p>
      <p><strong>Email:</strong> ${safe(email)}</p>
      <p><strong>Reason:</strong> ${safe(reason)}</p>
      <p><strong>Message:</strong></p>
      <div style="padding:16px;border-radius:12px;background:#f6f8ff;border:1px solid #dbe2ff;white-space:pre-wrap">${safe(message)}</div>
    </div>
  `;

  const text = [
    "New contact enquiry",
    "",
    `Name: ${name}`,
    `Organisation: ${organisation || "Not provided"}`,
    `Email: ${email}`,
    `Reason: ${reason}`,
    "",
    "Message:",
    message
  ].join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      html,
      text
    })
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    return {
      statusCode: 502,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: `Email send failed. ${errorText}` })
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ok: true })
  };
};

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory rate limiting map: ip -> timestamps[]
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 5;

  const timestamps = rateLimitMap.get(ip) || [];
  const recentTimestamps = timestamps.filter((time) => now - time < windowMs);

  if (recentTimestamps.length >= maxRequests) {
    return true;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  return false;
}

function sanitize(input: string | undefined): string {
  if (!input) return "";
  return String(input)
    .replace(/[<>]/g, "") // basic tag stripping
    .trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 13;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown-ip";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many appointment requests from this connection. Please try again shortly or call 7675069960 directly."
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot spam protection
    if (body.honeypot && String(body.honeypot).trim() !== "") {
      return NextResponse.json(
        { success: false, error: "Spam detected." },
        { status: 400 }
      );
    }

    const fullName = sanitize(body.fullName);
    const mobile = sanitize(body.mobile);
    const email = sanitize(body.email);
    const address = sanitize(body.address);
    const service = sanitize(body.service) || "General Physiotherapy Consultation";
    const description = sanitize(body.description);

    // Validate required fields
    if (!fullName) {
      return NextResponse.json(
        { success: false, error: "Patient name is required." },
        { status: 400 }
      );
    }

    if (!mobile || !isValidPhone(mobile)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!address) {
      return NextResponse.json(
        { success: false, error: "Address or Hyderabad location is required." },
        { status: 400 }
      );
    }

    if (!description) {
      return NextResponse.json(
        { success: false, error: "Please provide a short description of the problem." },
        { status: 400 }
      );
    }

    const bookingDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short"
    });

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const adminEmail = process.env.ADMIN_EMAIL || "madhava2807@gmail.com";
    const doctorEmail = process.env.DOCTOR_EMAIL || "dr.venu882@gmail.com";
    const fromEmail = process.env.FROM_EMAIL || "info.physiosphere.in@gmail.com";

    // Admin Notification Email Template
    const adminHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <title>New Physiotherapy Appointment Request</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
          .header { background: linear-gradient(135deg, #003b73 0%, #0284c7 100%); padding: 28px 24px; text-align: center; color: #ffffff; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em; }
          .header p { margin: 6px 0 0; font-size: 14px; opacity: 0.9; }
          .content { padding: 28px 24px; }
          .field-group { margin-bottom: 18px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
          .field-group:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
          .label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 4px; }
          .value { font-size: 16px; color: #0f172a; font-weight: 500; }
          .highlight { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 14px; color: #166534; font-size: 14px; }
          .footer { background: #f8fafc; padding: 18px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>PhysioSphere – Home Appointment Request</h1>
            <p>New patient inquiry received via website</p>
          </div>
          <div class="content">
            <div class="field-group">
              <div class="label">Patient Full Name</div>
              <div class="value">${fullName}</div>
            </div>
            <div class="field-group">
              <div class="label">Mobile Number</div>
              <div class="value"><a href="tel:${mobile}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${mobile}</a></div>
            </div>
            <div class="field-group">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></div>
            </div>
            <div class="field-group">
              <div class="label">Service Required</div>
              <div class="value" style="color: #0284c7; font-weight: 600;">${service}</div>
            </div>
            <div class="field-group">
              <div class="label">Home Address / Location in Hyderabad</div>
              <div class="value">${address}</div>
            </div>
            <div class="field-group">
              <div class="label">Problem Description</div>
              <div class="value" style="white-space: pre-wrap; line-height: 1.5; color: #334155;">${description}</div>
            </div>
            <div class="field-group">
              <div class="label">Request Received Timestamp</div>
              <div class="value" style="font-size: 14px; color: #64748b;">${bookingDate} (IST)</div>
            </div>
            <div class="highlight" style="margin-top: 20px;">
              ⚡ Action: Please contact the patient to confirm therapist availability and schedule the home assessment session.
            </div>
          </div>
          <div class="footer">
            PhysioSphere – Advanced Physiotherapy at Home • Hyderabad, Telangana
          </div>
        </div>
      </body>
      </html>
    `;

    // Customer Confirmation Email Template
    const customerHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <title>We Received Your Appointment Request – PhysioSphere</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
          .header { background: linear-gradient(135deg, #003b73 0%, #0284c7 100%); padding: 32px 24px; text-align: center; color: #ffffff; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 700; }
          .header p { margin: 8px 0 0; font-size: 14px; opacity: 0.95; }
          .content { padding: 32px 28px; line-height: 1.6; }
          .greeting { font-size: 18px; font-weight: 600; color: #0f172a; margin-bottom: 16px; }
          .card { background: #f0fdf4; border-left: 4px solid #16a34a; padding: 18px; border-radius: 0 8px 8px 0; margin: 20px 0; }
          .card-title { font-weight: 600; color: #166534; font-size: 15px; margin-bottom: 6px; }
          .card-text { font-size: 14px; color: #14532d; margin: 0; }
          .cta-box { background: #f1f5f9; border-radius: 8px; padding: 20px; text-align: center; margin: 24px 0; }
          .cta-btn { display: inline-block; background: #16a34a; color: #ffffff; font-weight: 600; text-decoration: none; padding: 12px 24px; border-radius: 6px; margin-top: 10px; }
          .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 13px; color: #64748b; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>PhysioSphere</h1>
            <p>Advanced Physiotherapy Care, Right at Your Home</p>
          </div>
          <div class="content">
            <div class="greeting">Dear ${fullName},</div>
            <p>Thank you for contacting <strong>PhysioSphere</strong>!</p>
            <p>We have successfully received your physiotherapy appointment request for <strong>${service}</strong>.</p>
            
            <div class="card">
              <div class="card-title">What happens next?</div>
              <p class="card-text">
                Our clinical coordination team will contact you shortly on <strong>${mobile}</strong> to understand your condition in detail and coordinate an experienced physiotherapist for your home visit in Hyderabad.
              </p>
            </div>

            <div class="cta-box">
              <p style="margin: 0; font-size: 14px; color: #475569;">Need immediate support or have urgent questions?</p>
              <div style="margin-top: 10px; font-size: 16px; font-weight: 700; color: #003b73;">
                Call: <a href="tel:7675069960" style="color: #0284c7; text-decoration: none;">7675069960</a> / <a href="tel:9441677882" style="color: #0284c7; text-decoration: none;">9441677882</a>
              </div>
              <a href="https://wa.me/917675069960?text=Hello%20PhysioSphere%2C%20I%20have%20submitted%20an%20appointment%20request%20for%20${encodeURIComponent(fullName)}" class="cta-btn">WhatsApp Us Now</a>
            </div>

            <p style="margin-top: 28px; font-size: 14px; color: #334155;">
              Regards,<br />
              <strong>Team PhysioSphere</strong><br />
              <a href="mailto:info.physiosphere.in@gmail.com" style="color: #0284c7; text-decoration: none;">info.physiosphere.in@gmail.com</a>
            </p>
          </div>
          <div class="footer">
            PhysioSphere – Dedicated Team of 8 Physiotherapists Serving Hyderabad<br />
            © ${new Date().getFullYear()} PhysioSphere. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `;

    let transporter: ReturnType<typeof nodemailer.createTransport>;

    // Check if SMTP is configured
    if (smtpUser && smtpPass) {
      if (smtpHost === "smtp.gmail.com" || smtpUser.endsWith("@gmail.com")) {
        transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: smtpUser,
            pass: smtpPass
          }
        });
      } else {
        transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass
          }
        });
      }
    } else if (process.env.USE_TEST_SMTP === "true" || process.env.NODE_ENV !== "production") {
      // In development or test mode, generate an Ethereal test transporter
      console.log("ℹ️ [PhysioSphere Booking API] Using test SMTP account (Ethereal) for development verification.");
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
    } else {
      console.warn("⚠️ [PhysioSphere Booking API] SMTP_USER or SMTP_PASS environment variables are not set in production.");
      return NextResponse.json(
        {
          success: false,
          error: "Email notification service is temporarily unconfigured. Please call us directly at 7675069960 to book your home visit immediately."
        },
        { status: 503 }
      );
    }

    // Send Admin notification email
    const adminMailOptions = {
      from: `"PhysioSphere Bookings" <${fromEmail}>`,
      to: [adminEmail, doctorEmail].join(", "),
      replyTo: email,
      subject: `New Physiotherapy Appointment Request – PhysioSphere (${fullName})`,
      html: adminHtml,
      text: `New Appointment Request from ${fullName}\nMobile: ${mobile}\nEmail: ${email}\nLocation: ${address}\nService: ${service}\nProblem: ${description}\nDate: ${bookingDate}`
    };

    // Send Customer confirmation email
    const customerMailOptions = {
      from: `"PhysioSphere Care" <${fromEmail}>`,
      to: email,
      subject: `We Received Your Appointment Request – PhysioSphere`,
      html: customerHtml,
      text: `Dear ${fullName},\n\nThank you for contacting PhysioSphere!\nWe have successfully received your physiotherapy appointment request.\nOur team will contact you shortly to understand your requirements and coordinate your appointment.\n\nFor immediate assistance, contact us at 7675069960.\n\nRegards,\nTeam PhysioSphere\ninfo.physiosphere.in@gmail.com`
    };

    // Execute both sends concurrently
    const [adminResult, customerResult] = await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(customerMailOptions)
    ]);

    if (!adminResult.messageId || !customerResult.messageId) {
      throw new Error("Failed to receive confirmation messageId from SMTP service.");
    }

    if (!smtpUser) {
      console.log("📨 [Admin Email Preview URL]:", nodemailer.getTestMessageUrl(adminResult));
      console.log("📨 [Customer Email Preview URL]:", nodemailer.getTestMessageUrl(customerResult));
    }

    return NextResponse.json({
      success: true,
      message: "Your appointment request has been submitted successfully! Our PhysioSphere team will contact you shortly to discuss your requirements and appointment availability."
    });
  } catch (error) {
    console.error("[PhysioSphere Booking Error]:", error);
    // Return sanitized error message without exposing internal stack or credentials
    return NextResponse.json(
      {
        success: false,
        error: "We could not process your booking request right now. Please call us directly at 7675069960 or send a message on WhatsApp for immediate booking."
      },
      { status: 500 }
    );
  }
}

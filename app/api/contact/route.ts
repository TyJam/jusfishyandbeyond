import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const data = await resend.emails.send({
      // IMPORTANT: Use your verified TyWebStudio domain
      from: 'Jus Fishy Leads <contact@tywebstudio.com>', 
      to: ['contact@tywebstudio.com'], 
      subject: `NEW CATERING INQUIRY: From Digital Flagship`,
      html: `
        <div style="font-family: sans-serif; padding: 40px; background-color: #fdfcf8; border: 2px solid #1B4D3E;">
          <h2 style="color: #1B4D3E; text-transform: uppercase; letter-spacing: 2px;">New Lead Captured</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="line-height: 1.6; color: #444;">${message}</p>
          <footer style="margin-top: 40px; font-size: 10px; color: #A8B475; font-weight: bold; text-transform: uppercase;">
            Engineered by TyWebStudio.com
          </footer>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "System Error" }, { status: 500 });
  }
}
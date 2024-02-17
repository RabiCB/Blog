import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_MGuStaqg_57mrT5iLzCELGQJ4Jd8Syewn");

export async function POST(request: any) {
  const body = await request?.json();

  const { email, contact, feedback } = body;
  try {
    const data = await resend.emails.send({
      from: "rollin<rollin@rollin.dev>",
      to: email,
      subject: "Hello World",
      html: `<p> User's contact:Contact:${contact} and User's feedback ${feedback} </p>`,
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

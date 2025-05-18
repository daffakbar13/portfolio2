import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formLink = process.env.GOOGLE_FORM_LINK;
  if (!formLink) {
    return new NextResponse("Please configure the env variables", {
      status: 500,
    });
  }

  // configure this according to your google form
  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME as string;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL as string;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE as string;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL as string;

  try {
    const body = await req.json();
    const { name, message, social, email } = body;
    const url = new URL(`${formLink}/formResponse`);
    url.searchParams.set(fieldIdName, name);
    url.searchParams.set(fieldIdEmail, email);
    url.searchParams.set(fieldIdMessage, message);
    url.searchParams.set(fieldIdSocial, social);

    await fetch(url.toString());

    return NextResponse.json("Success!");
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

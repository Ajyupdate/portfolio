import nodemailer from "nodemailer";
export async function GET(request: Request) {
  return new Response("hi");
}

export async function POST(req: Request) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "richardsonmarcus520@gmail.com",
      pass: "wqih dtqk wyit lzwt",
    },
  });
  const option = {
    from: body.email,
    to: "ajibadeemmanuel58@gmail.com",
    subject: "Verify Your Email",
    html: `<h1>${body.name}</h1><h1>${body.email}</h1><p>${body.message}</p> `,
  };
  transporter.sendMail(option, function (error, info) {
    if (error) {
      console.log(error, "error");
    } else {
      console.log("success");
    }
  });
  return new Response("OK");
}

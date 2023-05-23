import { comparePassword, createJWT } from "@tm/lib/auth";
import { db } from "@tm/lib/db";
import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async function SignIn(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const user = await db.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    const isUser = comparePassword(req.body.password, user?.password);
    if (isUser) {
      const jwt = await createJWT(user);

      res.setHeader(
        "Set-Cookie",
        serialize(process.env.COOKIE_NAME, jwt, {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        })
      );

      res.status(201).send({})
    } else {
      res.status(402).send({});
    }
  }
}

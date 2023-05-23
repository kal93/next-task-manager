/**
 * This middleware run on EDGE runtime.
 * Things like some 3rd party lib, DBs, node.js runtime, window object will not be available on edge.
 * Edge is before your origin server or on your CDN closest to you.
 * This code will run on CDNs closest to client/user
 * Client -> Edge Runtime/CDN -> Server
 */
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose"; // used because it supports edge runtime
const PUBLIC_FILE = /\.(.*)$/;

// had to make this again here as the other one is in a file with bcrypt which is not supported on edge runtimes
const verifyJWT = async (jwt) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );

  return payload;
};

export default async function middleware(req: NextRequest, res: NextResponse) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/signin") ||
    pathname.startsWith("/register") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const jwt = req.cookies.get(process.env.COOKIE_NAME);

  if (!jwt) {
    req.nextUrl.pathname = "/signin";
    return NextResponse.redirect(req.nextUrl);
  }

  try {
    // don't need to get user from prisma because prisma is not available on edge
    await verifyJWT(jwt.value);
    return NextResponse.next();
  } catch (error) {
    req.nextUrl.pathname = "/signin";
    return NextResponse.redirect(req.nextUrl);
  }
}

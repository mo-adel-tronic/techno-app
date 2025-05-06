import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { RoutesName } from "./constants/RoutesName";

export default async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const { pathname } = request.nextUrl;
  if (token && pathname == RoutesName.LOGIN) {
    return NextResponse.redirect(new URL(RoutesName.DASHBOARD, request.url));
  }
  if (!token && pathname.startsWith(RoutesName.DASHBOARD)) {
    return NextResponse.redirect(new URL(RoutesName.LOGIN, request.url));
  }
  if(pathname.startsWith('/api') && !pathname.startsWith('/api/auth')) {
    const key = request.headers.get('api_key')
    if (!key) {
        return NextResponse.json('invalid request')
    }
    if(key !== process.env.NEXTAUTH_SECRET) {
        return NextResponse.json('invalid key')
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/api/:path*'],
};

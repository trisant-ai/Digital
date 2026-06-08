import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { redis } from '@/lib/keycloak/redis';

export async function middleware(request: NextRequest) {
  const sessionId = request.cookies.get('app_session')?.value;

  // Protect all routes under /dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!sessionId) {
      return NextResponse.redirect(
        new URL('/api/auth/login/keycloak', request.url),
      );
    }

    // Verify session exists in Redis
    const session = await redis.get(`session:${sessionId}`);

    if (!session) {
      // Session expired in Keycloak/Redis, force re-auth
      const response = NextResponse.redirect(
        new URL('/api/auth/login/keycloak', request.url),
      );
      response.cookies.delete('app_session');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};

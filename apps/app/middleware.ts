import { type CookieOptions, createServerClient } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    });

    try {
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    get(name: string) {
                        return request.cookies.get(name)?.value;
                    },
                    set(name: string, value: string, options: CookieOptions) {
                        // If the cookie is updated, update the cookies for the request and response
                        request.cookies.set({
                            name,
                            value,
                            ...options,
                        });
                        response = NextResponse.next({
                            request: {
                                headers: request.headers,
                            },
                        });
                        response.cookies.set({
                            name,
                            value,
                            ...options,
                        });
                    },
                    remove(name, options) {
                        // If the cookie is removed, update the cookies for the request and response
                        request.cookies.delete({
                            name,
                            ...options,
                        });
                        response = NextResponse.next({
                            request: {
                                headers: request.headers,
                            },
                        });
                        response.cookies.delete({
                            name,
                            ...options,
                        });
                    },
                },
            }
        );
        const {
            data: { session },
        } = await supabase.auth.getSession();
        if (!session) {
            const redirectUrl = request.nextUrl.clone();
            redirectUrl.pathname = '/auth/login';
            return NextResponse.redirect(redirectUrl);
        }

        if (session && request.nextUrl.pathname === '/auth/login') {
            const redirectUrl = request.nextUrl.clone();
            redirectUrl.pathname = '/dashboard';
            return NextResponse.redirect(redirectUrl);
        }
        return response;
    } catch (e) {
        return response;
    }
}

export const config = {
    matcher: ['/((?!api|auth|_next/static|_next/image|favicon.ico).*)'],
};

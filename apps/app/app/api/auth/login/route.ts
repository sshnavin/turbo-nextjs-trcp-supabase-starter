import { NextResponse } from 'next/server';
import { createClient } from '@starter/backend/supabase/server';

export async function POST(request: Request) {
    const requestUrl = new URL(request.url);
    const formData = await request.formData();
    const email = String(formData.get('email'));
    const password = String(formData.get('password'));
    try {
        const supabase = createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) {
            return NextResponse.redirect(
                `${requestUrl.origin}/login?error=Could not authenticate user`,
                {
                    // a 301 status is required to redirect from a POST to a GET route
                    status: 301,
                }
            );
        }

        return NextResponse.redirect(requestUrl.origin, {
            // a 301 status is required to redirect from a POST to a GET route
            status: 301,
        });
    } catch (error) {
        return NextResponse.redirect(
            `${requestUrl.origin}/login?error=Could not authenticate user`,
            {
                // a 301 status is required to redirect from a POST to a GET route
                status: 301,
            }
        );
    }
}

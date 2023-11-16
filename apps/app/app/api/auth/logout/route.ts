import { NextResponse } from 'next/server';
import { createClient } from '@starter/backend/supabase/server';

export async function POST(request: Request) {
    const requestUrl = new URL(request.url);
    const supabase = createClient();

    await supabase.auth.signOut();

    return NextResponse.redirect(`${requestUrl.origin}/login`, {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
    });
}

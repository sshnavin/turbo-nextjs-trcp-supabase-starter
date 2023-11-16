import Link from 'next/link';
import { createClient } from '@starter/backend/supabase/server';
import { Button } from '@starter/ui/components/button';

export default async function AuthButton() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    return user ? (
        <div className="flex items-center gap-4">
            Hey, {user.email}!
            <form action="/auth/sign-out" method="post">
                <Button>Logout</Button>
            </form>
        </div>
    ) : (
        <Link
            href="/auth/login"
            className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
            Login
        </Link>
    );
}

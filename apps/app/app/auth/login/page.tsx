import Messages from './messages';
import Link from 'next/link';
import { Button } from '@starter/ui/components/button';

export default function Login() {
    return (
        <div className="container grid h-full w-full flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:max-w-md">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="font-heading text-2xl font-semibold tracking-tight">
                            Login to dashboard
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email below to get setup.
                        </p>
                    </div>

                    <div className="flex-1 flex flex-col w-full px-8 justify-center gap-2">
                        <form
                            className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
                            action="/api/auth/login"
                            method="post"
                        >
                            <label className="text-md" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                                name="email"
                                placeholder="you@example.com"
                                required
                            />
                            <label className="text-md" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                required
                            />
                            <Button>Sign In</Button>
                            <div className="relative my-4">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 text-muted-foreground">
                                        Or
                                    </span>
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                formAction="/api/auth/signup"
                            >
                                Create an account
                            </Button>
                            <div className="relative my-4">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 text-muted-foreground">
                                        Or continue with
                                    </span>
                                </div>
                            </div>
                            <Messages />
                        </form>
                    </div>

                    <p className="px-8 text-center text-sm text-muted-foreground">
                        {`By clicking continue, you agree to our `}
                        <Link
                            href="/tos"
                            className="hover:text-brand underline underline-offset-4"
                        >
                            {`Terms of Service `}
                        </Link>
                        {`and `}
                        <Link
                            href="/privacy"
                            className="hover:text-brand underline underline-offset-4"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}

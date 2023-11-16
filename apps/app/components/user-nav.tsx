import { Button, buttonVariants } from '@starter/ui/components/button';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@starter/ui/client';
import { api } from '@starter/backend/trpc/server';
import Link from 'next/link';
import { LogOut } from 'lucide-react';

export default async function UserNav() {
    const data = await api().auth.profile();
    if (!data?.isAuthenticated || !data.user) {
        return (
            <div className="flex items-center space-x-4">
                <Link
                    className={buttonVariants({ variant: 'outline' })}
                    href="/auth/login"
                >
                    Sign in
                </Link>
            </div>
        );
    }
    const user = data.user;
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                >
                    <Avatar className="h-8 w-8">
                        <AvatarImage
                            src="https://avatar.vercel.sh/ab.png"
                            alt="@navinsingh"
                        />
                        <AvatarFallback>NS</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        {/*<p className="text-sm font-medium leading-none">{user}</p>*/}
                        <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>New Team</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <form action="/api/auth/logout" method="post">
                    <Button variant="ghost" className="w-full">
                        Logout <LogOut className="ml-2 h-3 w-3" />
                    </Button>
                </form>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

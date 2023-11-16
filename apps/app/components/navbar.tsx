import { cn } from '@starter/ui/shared/cn';
import React from 'react';
import Link from 'next/link';

export default function Navbar({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn(
                'flex items-center space-x-4 lg:space-x-6',
                className
            )}
            {...props}
        >
            <Link
                href="/dashboard"
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                Dashboard
            </Link>
            <Link
                href="/product"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Product
            </Link>
            <Link
                href="/examples/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                About
            </Link>
        </nav>
    );
}

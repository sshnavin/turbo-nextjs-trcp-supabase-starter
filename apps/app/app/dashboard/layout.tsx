import type { Metadata } from 'next';
import React from 'react';
import { cn } from '@starter/ui/shared/cn';
import { LayoutPanelLeft } from 'lucide-react';
import UserNav from '@startahead/components/user-nav';

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Just an authenticated page',
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-full">
            <div className="flex md:flex-shrink-0">
                <div className="flex w-20 flex-col">
                    <div className="flex min-h-0 flex-1 flex-col border-r border-muted">
                        <div className="flex  justify-center flex-1 flex-col overflow-y-auto pt-5 pb-4">
                            <div className="flex flex-shrink-0 items-center px-4">
                                <strong className="text-md">Starer</strong>
                            </div>
                            <nav className="mt-5 flex-1" aria-label="Sidebar">
                                <a
                                    href={'/'}
                                    className={cn(
                                        'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                        'group flex justify-center items-center px-2 py-2 text-sm font-medium rounded-md'
                                    )}
                                >
                                    <LayoutPanelLeft
                                        className={cn(
                                            'text-gray-400 group-hover:text-gray-500',
                                            'h-5 w-5'
                                        )}
                                        aria-hidden="true"
                                    />
                                </a>
                            </nav>
                        </div>
                        <div className="flex justify-center flex-shrink-0 border-t border-gray-200 p-4">
                            <UserNav />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
                <div className="relative z-0 flex flex-1 overflow-hidden">
                    <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
                        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

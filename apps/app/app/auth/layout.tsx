import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Just an authenticated page',
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="h-screen">{children}</div>;
}

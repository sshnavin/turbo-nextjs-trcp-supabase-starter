import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import React from 'react';
import Provider from '@starter/backend/trpc/react';
import { ThemeProvider } from '@starter/ui/components/theme-provider';
import { Toaster } from '@starter/ui/components/toaster';

export const metadata: Metadata = {
    title: 'Starter',
    description: 'Tech, design and other creative things.',
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
    return (
        <html lang="en" className="h-full bg-white" suppressHydrationWarning>
            <body
                className={`overflow-hidden h-full bg-background antialiased ${GeistSans.className}`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Provider>
                        {children}
                        <Toaster />
                    </Provider>
                </ThemeProvider>
            </body>
        </html>
    );
}

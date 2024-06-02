import Providers from '@/app/_components/providers';
import { cn } from '@/lib/utils';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: 'New Tab',
        template: `%s | New Tab`,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(GeistSans.variable)}>
                <Providers>
                    <>{children}</>
                </Providers>
            </body>
        </html>
    );
}

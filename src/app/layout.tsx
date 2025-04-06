import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from './provider';
import { Toaster } from '@/components/ui/sonner';

const dmSans = DM_Sans({
  variable: '--font-geist-dmSans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'EccoChain - Break Language Barriers, Anytime, Anywhere.',
  description: 'Break Language Barriers, Anytime, Anywhere.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${dmSans.variable} antialiased`}>
        <Toaster />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

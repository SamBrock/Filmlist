import type { Metadata } from 'next';
import { Funnel_Sans } from 'next/font/google';

import { cn } from '@/lib/utils/cn';

import './globals.css';

export const metadata: Metadata = {
  title: 'filmlist',
};

const fontSans = Funnel_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn('bg-background text-text', fontSans.className)}>{children}</body>
    </html>
  );
}

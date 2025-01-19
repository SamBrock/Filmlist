import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '@/components/layout';
import { cn } from '@/lib/utils/cn';
import { GlobalStoreProvider } from '@/providers/GlobalStoreProvider';

import './globals.css';

export const metadata: Metadata = {
  title: 'filmlist',
};

const fontInter = Inter({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--inter', // TODO: Check this works
});

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn('text-text bg-background', fontInter.variable)}>
        <GlobalStoreProvider>
          <Header />
          {children}
        </GlobalStoreProvider>
      </body>
    </html>
  );
}

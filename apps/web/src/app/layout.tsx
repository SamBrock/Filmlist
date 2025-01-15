import { GlobalStoreProvider } from '@/providers/GlobalStoreProvider';
import type { Metadata } from 'next';
import { Gantari, Inter } from 'next/font/google';

import { cn } from '@filmlist/lib/utils/cn';
import { Header } from '@filmlist/ui/layout';

import './globals.css';

export const metadata: Metadata = {
  title: 'filmlist',
};

const fontSans = Gantari({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const fontInter = Inter({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--inter', // TODO: Check this works
});

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn('text-text bg-background', fontSans.className, fontInter.variable)}>
        <GlobalStoreProvider>
          <Header />
          {children}
        </GlobalStoreProvider>
      </body>
    </html>
  );
}

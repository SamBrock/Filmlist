import type { Metadata } from 'next';
import { Funnel_Display, Inter } from 'next/font/google';

import { Header } from '@/components/layout/header/Header';
import { SideNav } from '@/components/layout/sidenav/SideNav';
import { cn } from '@/lib/utils/cn';
import { GlobalStoreProvider } from '@/providers/GlobalStoreProvider';

import './globals.css';

export const metadata: Metadata = {
  title: 'filmlist',
};

const fontSans = Funnel_Display({
  weight: ['400'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn('text-text bg-background', fontSans.className)}>
        <GlobalStoreProvider>
          <Header className="h-16 px-6" />

          <div className="flex h-[calc(100vh-64px)] gap-2 px-2 pb-2">
            <SideNav className="w-90" />

            <div className="bg-foreground w-full rounded-lg">
              <main>{children}</main>
            </div>
          </div>
        </GlobalStoreProvider>
      </body>
    </html>
  );
}

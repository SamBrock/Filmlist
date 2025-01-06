import type { Metadata } from 'next';
import { Gantari, Inter } from 'next/font/google';

import { Header } from '@/components/layout/header/Header';
import { MovieSearch } from '@/components/movie/MovieSearch/MovieSearch';
import { cn } from '@/lib/utils/cn';
import { GlobalStoreProvider } from '@/providers/GlobalStoreProvider';

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
      <body className={cn('bg-background text-text', fontSans.className, fontInter.variable)}>
        <GlobalStoreProvider>
          <Header />
          {children}

          <MovieSearch />
        </GlobalStoreProvider>
      </body>
    </html>
  );
}

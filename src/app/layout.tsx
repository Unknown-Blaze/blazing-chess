import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blazing Chess Academy | Ignite Your Potential',
  description: 'Master the Board, Ignite the Mind. Professional chess coaching for all levels in Singapore. School CCA programs, private mentorship, and online tournaments.',
  keywords: ['chess', 'chess academy', 'chess coaching', 'Singapore', 'chess lessons', 'private coaching', 'school CCA', 'tournaments'],
  authors: [{ name: 'Blazing Chess Academy' }],
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Blazing Chess Academy | Ignite Your Potential',
    description: 'Master the Board, Ignite the Mind. Professional chess coaching for all levels.',
    type: 'website',
    locale: 'en_SG',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

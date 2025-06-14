import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://futuristic-start-up-landing-page-mzzg1rk8l.vercel.app'),
  title: 'NeuroFlow AI - Reimagining Intelligence for Everyone',
  description: 'Revolutionary AI platform that transforms how businesses understand and interact with data. Experience the future of artificial intelligence.',
  keywords: 'AI, artificial intelligence, machine learning, data analytics, neural networks, enterprise AI, automation',
  authors: [{ name: 'NeuroFlow AI' }],
  openGraph: {
    title: 'NeuroFlow AI - Reimagining Intelligence for Everyone',
    description: 'Revolutionary AI platform that transforms how businesses understand and interact with data.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuroFlow AI - Reimagining Intelligence for Everyone',
    description: 'Revolutionary AI platform that transforms how businesses understand and interact with data.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
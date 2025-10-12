import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kavya Sridhar — ML & AI Enthusiast',
  description:
    'Master’s student in Data Science with a strong foundation in Machine Learning and LLMs. Passionate about leveraging data-driven solutions to drive meaningful impact.',
  openGraph: {
    title: 'Kavya Sridhar — ML & AI Enthusiast',
    description:
      'Master’s student in Data Science with a strong foundation in Machine Learning and LLMs. Passionate about leveraging data-driven solutions to drive meaningful impact.',
    url: 'https://example.com',
    siteName: 'Kavya Sridhar',
    images: [
      {
        url: '/my_image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kavya Sridhar',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kavya Sridhar — ML & AI Enthusiast',
    description:
      'Master’s student in Data Science with a strong foundation in Machine Learning and LLMs.',
    images: ['/my_image.jpg'],
  },
  metadataBase: new URL('https://example.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
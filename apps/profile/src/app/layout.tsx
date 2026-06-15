import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import './global.css';

// Configure the Roboto font
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Vishwajeet Wadhwa | Director| Software Architect',
  description:
    'Vishwajeet Wadhwa | Director| Software Architect| Technology leader, SaaS, Full Stack Software Development | Sapiens Digital R&D | Performance Improvement | Node.js, Next.js, React, TypeScript, Kubernetes, Azure, Claude TensorFlow, PyTorch, Scikit Learn | Lead Organisations | Digital Transformation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

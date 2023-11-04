import '@/src/styles/reset.css';
import '@/src/styles/global.css';

import { Metadata, Viewport } from 'next';

import { Footer } from '@/src/components/Layouts/footer';
import { Header } from '@/src/components/Layouts/header';

export const metadata: Metadata = {
  referrer: 'no-referrer',
  title: 'Next typescript template',
  description: 'A simple next typescript template',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Layout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

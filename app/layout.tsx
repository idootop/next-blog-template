import '@/src/styles/reset.css';
import '@/src/styles/global.css';

export const metadata = {
  title: 'Next typescript template',
  description: 'A simple next typescript template',
  viewport:
    'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

import './globals.css';
import '../styles/global.css';
import { Inter } from 'next/font/google';
import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Intellium Style Guide',
  description: 'Intellium için geliştirilmiş kapsamlı tasarım sistemi ve stil rehberi',
  icons: {
    icon: "/int.png",
  },
  keywords: "Intellium, Style Guide, Design System",
  authors: [{ name: "Intellium", url: "https://intellium.com.tr" }],
  creator: "Intellium",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/int.png" />
      </head>
      <body className={inter.className}>
        <ConfigProvider>
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}

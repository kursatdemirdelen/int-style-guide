import { ConfigProvider } from "antd";
import "./globals.css";

export const metadata = {
  title: "Intellium Style Guide",
  icons: {
    icon: "/int.png",
  },
  keywords: "Intellium, Style Guide, Design System",
  authors: [{ name: "Intellium", url: "https://intellium.com.tr" }],
  creator: "Intellium",
  description: "Intellium Style Guide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider>{children}</ConfigProvider>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ThemeSwitcher } from "@/components/theme-switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Hero Demo",
  description: "A beautiful hero section with theme switching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  );
}

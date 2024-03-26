import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Marinkie Thupi",
    default: "Marinkie Thupi"
  },
  description: "MT Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* max-w-3xl */}
        <main className="mx-20 px-10 py-10">
          {children}
        </main>
     
      </body>
    </html>
  );
}

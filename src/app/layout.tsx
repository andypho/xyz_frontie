import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "~/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xyz Forum",
  description: "Xyz Forum by Ndhoho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-base-100 mx-auto max-w-400">
          <Navbar />
          <div className="w-full px-4 pt-20 md:px-20">{children}</div>
        </div>
      </body>
    </html>
  );
}

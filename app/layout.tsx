import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PPCS Restore | Building Restoration and Cleaning Services",
  description: "PPCS is a leading building restoration and cleaning services company based in the Bay Area with over 35 years of experience. Our comprehensive services include building restoration, consulting, water and weatherproofing, historic building restoration, and glass and window cleaning. Trusted by clients for our expertise and commitment to quality, we ensure the longevity and aesthetic appeal of your buildings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

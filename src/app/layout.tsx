import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fjordstans - Driving Sustainable Innovation",
  description: "Fjordstans integrates cutting-edge engineering with green practices to future-proof your projects.",
  icons: {
    icon: "/logos/fjordstans/logo-single.png",
    apple: "/logos/fjordstans/logo-single.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

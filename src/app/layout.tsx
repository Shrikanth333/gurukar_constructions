import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Chatbot } from "@/components/site/chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Gurukar Builders | Best Construction Company in Mysore",
    template: "%s | Gurukar Builders",
  },
  description:
    "Full-service design-build firm in Mysuru for residential, commercial and interior projects.",
  metadataBase: new URL("https://gurukarbuildersconstructions.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Chatbot } from "@/components/site/chatbot";

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
      <body className="antialiased">
        <Navbar />
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Femi Taylor - Author & Star Wars Icon | Official Website",
  description:
    "Official website of Femi Taylor, actress known for Oola in Star Wars Return of the Jedi and author. Order her book, view upcoming events, and explore her legacy.",
  keywords: [
    "Femi Taylor",
    "Oola",
    "Star Wars",
    "Return of the Jedi",
    "Cats musical",
    "author",
    "book",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

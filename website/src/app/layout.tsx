import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "西川農園 | 山梨県甲州市の果樹栽培・学生参画型農業",
  description: "山梨県甲州市を拠点に、桃や葡萄などの果樹栽培と、学生が参画する新しい農業プロジェクトに取り組む西川農園の公式サイトです。",
  openGraph: {
    title: "西川農園公式サイト",
    description: "山梨県甲州市の果樹栽培と学生参画型農業の取り組みをご紹介します。",
    type: "website",
  },
};

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

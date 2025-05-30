import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Locale } from "../../../i18n.config";
import { getDictionary } from "../../../lib/dictionary";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "World Pool Championship",
  description: "Generated by create next app",
};

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ lang: Locale }>;
  children: React.ReactNode;
}) {
  const { lang } = await params;
  const { page } = await getDictionary(lang);

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${
          lang === "ar" ? "font-arabic" : ""
        }`}
      >
        <Navbar lang={lang} table={page} />
        {children}
      </body>
    </html>
  );
}

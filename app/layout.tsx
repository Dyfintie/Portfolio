import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import PageTransition from "../components/PageTransition";
import Nav from "@/components/Nav";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const myFont = localFont({
  src: "../public/fonts/ITC_Bauhaus_Medium.otf",
  variable: "--my-font",
});

export const metadata: Metadata = {
  title: "Varun's Portfolio",
  description: "Varun Panndey Portfolio website",
};

{
  /* so now in out portifoltio webstie it will look like a desktop  */
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.variable}>
      <body
        className={`bg-[#F5F5DC] ${geistSans.variable} ${geistMono.variable}`}
      >
        <PageTransition>
          <Nav />
          {children}
        </PageTransition>
      </body>
    </html>
  );
}

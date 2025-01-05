import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Wrap from "@/components/Wrap";
import "./globals.css";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reshaped UI + Next.js",
  description: "Built the demo website with Reshaped UI and Nextjs",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
         <Wrap> 
          <Header />
             {children} 
         </Wrap>
      </body>
    </html>
  );
}

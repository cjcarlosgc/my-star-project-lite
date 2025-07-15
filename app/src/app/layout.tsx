import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ApolloMainWrapper from "@/lib/apollo/apollo-main-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My star project",
  description: "A simple project to demonstrate Next.js and Apollo Client",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
         <header>
          <h1 className="text-3xl font-bold text-center my-8">
            My Star Project
          </h1>
         </header>
         
         <ApolloMainWrapper>
          {children}
         </ApolloMainWrapper>
      </body>
    </html>
  );
}

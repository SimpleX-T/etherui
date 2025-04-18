import type React from "react";
import "../styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Turret_Road } from "next/font/google";
import { Darker_Grotesque } from "next/font/google";

export const metadata: Metadata = {
  title: "Ether - AI Image Generator",
  description:
    "Harnessing Artificial Intelligence Tools for Naturally Image Generator",
  generator: "v0.dev",
};

const turret = Turret_Road({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-turret",
  display: "swap",
});

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-darker-grotesque",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;700&family=Work+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${darkerGrotesque.className} ${turret.className} bg-primary-black min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

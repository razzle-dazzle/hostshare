import "./globals.css";
import { ServerThemeProvider } from "@wits/next-themes";
import { siteMetadata } from "./data/siteMetaData";
import { PropsWithChildren } from "react";
import Navbar from "./components/Navbar";
import type { Metadata } from 'next';
import { WEBSITE_URL } from '@/lib/utils';
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    default: "Hostshare",
    template: "%s | Hostshare",
  },
  description: "Hostshare Engineering Candidate Project - by Darryl October",
  
  openGraph: {
    title: "Hostshare",
    description: "Hostshare Engineering Candidate Project - by Darryl October",
    url: WEBSITE_URL,
    siteName: "Hostshare",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: 'https://hostshare-darryl-october.vercel.app/hostshare-logo-green.png',
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ServerThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <html lang="en" className="text-black dark:text-white">
        {/* <body className={inter.className}>{children}</body> */}
        <body className="antialiased flex flex-col mx-auto bg-white dark:bg-[#171717]">
          <Navbar />
          <main className="flex flex-col min-h-screen items-center flex-auto min-w-0 px-4 md:px-6">
            {children}
            {/* <Analytics /> */}
          </main>
        </body>
      </html>
    </ServerThemeProvider>
  );
}

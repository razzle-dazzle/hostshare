import "./globals.css";
import { Inter } from "next/font/google";
import { ServerThemeProvider } from "@wits/next-themes";
import { siteMetadata } from "./data/siteMetaData";
import { PropsWithChildren } from "react";
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hostshare",
  description: "Hostshare Engineering Candidate Project",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ServerThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <html lang="en" className="text-black dark:text-white">
        {/* <body className={inter.className}>{children}</body> */}
        <body className="antialiased flex flex-col mx-auto bg-white dark:bg-[#171717]">
            <Navbar />
            <main className="flex flex-col min-h-screen items-center flex-auto min-w-0">
              {children}
              {/* <Analytics /> */}
            </main>
          </body>
      </html>
    </ServerThemeProvider>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import { useTheme } from "@wits/next-themes";
import { SearchWidget } from './SearchWidget';
import { ProfileMenu } from './ProfileMenu';

export default function Navbar() {
  return (
    <div className="mx-auto py-6 md:py-8 container max-4xl">
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
        <Link href="/">
          <div className="w-[200px] h-[80px] relative">
            <Image
              src={"/hostshare-logo-green.png"}
              priority
              fill
              sizes="(max-width: 500px) 100vw, 120px"
              style={{
                objectFit: "cover",
              }}
              alt={""}
            />
          </div>
        </Link>
        <SearchWidget></SearchWidget>
        <div className="flex flex-row justify-center md:justify-end items-center max-w-full gap-2.5">
          <div className="text-black dark:text-white font-semibold">
            <Link href="#">Share your home</Link>
          </div>
          <ThemeSwitch></ThemeSwitch>
          <ProfileMenu></ProfileMenu>
        </div>
      </div>
    </div>
  );
}

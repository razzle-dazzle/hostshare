"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import { useTheme } from "@wits/next-themes";
import { SearchWidget } from "./SearchWidget";
import { ProfileMenu } from "./ProfileMenu";

export default function Navbar() {
  return (
    <header className="py-2 sm:py-6 md:py-8 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="w-full flex flex-row gap-2 md:gap-0 justify-between items-center flex-wrap">
          
          <Link href="/" className="md:flex-[200px] flex-grow flex-shrink-0 basis-1/2">
            <div className="w-[200px] h-[80px] relative">
              <Image
                src={"/hostshare-logo-green.png"}
                priority
                fill
                sizes="(max-width: 500px) 100vw, 120px"
                style={{
                  objectFit: "cover",
                }}
                alt={"Hostshare Logo"}
              />
            </div>
          </Link>
          <div className='flex justify-center order-1 md:order-[initial] basis-1/2 flex-grow md:flex-grow-0'>
            <SearchWidget></SearchWidget>
          </div>
          <div className="flex flex-grow flex-shrink-0 flex-row justify-end items-center max-w-full gap-2.5">
            <ThemeSwitch></ThemeSwitch>
            <ProfileMenu></ProfileMenu>
          </div>
        </div>
      </div>
    </header>
  );
}

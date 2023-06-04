"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import { useTheme } from "@wits/next-themes";

export default function Navbar() {
  return (
    <div className="mx-auto py-6 md:py-8 container max-w-7xl">
      
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
        <div className="">
          <div className="w-[200px] h-[80px] relative">
          <Image
            src={"/hostshare-logo-green.png"}
            fill={true}
            sizes="(max-width: 500px) 100vw, 120px"
            style={{
              objectFit: "cover",
            }}
            alt={""}
          />
        </div>
        </div>
        <div>
          Date picker
        </div>
        <div className="flex flex-row justify-center md:justify-end items-center max-w-full">

          <div>
            Airbnb your home
          </div>
          <div>
            Globe
          </div>
          <div>
            <ThemeSwitch></ThemeSwitch>
          </div>
          <div>
            Profile
          </div>
          
        </div>
      </div>
    </div>
  );
}

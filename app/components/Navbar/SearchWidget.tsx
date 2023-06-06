"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/app/components/Shadcn/NavigationMenu";
import { DatePickerWithRange } from "../Shadcn/DatePicker";
import GuestSelector from "./GuestSelector";
import { addDays, format } from "date-fns";
import LocationSearch from "./LocationSearch";
import Link from "next/link";
import { Button } from "../Shadcn/Button";
import { Search } from "lucide-react";

export function SearchWidget() {
  const fromTo = {
    from: addDays(new Date(), 1),
    to: addDays(new Date(), 4),
  };
  const handleSearch = () => {
    
  };
  
  return (
    <React.Fragment>
      <div
        className="px-2 md:px-2.5 py-2 rounded-3xl"
        style={{
          border: "1px solid",
          borderColor: "hsl(var(--input))",
        }}
      >
        <NavigationMenu>
          <NavigationMenuList>
            {/* Location Search */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="rounded-3xl">
                Search
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[325px] md:w-[500px] lg:w-[600px] h-[400px]">
                  <h3 className="text-lg font-semibold mb-4">
                    Search destinations
                  </h3>
                  <LocationSearch></LocationSearch>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Date Selection */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="rounded-3xl">
                {format(fromTo.from, "MMM d")} - {format(fromTo.to, "MMM d")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[325px] md:w-[500px] lg:w-[600px] h-[480px]">
                  <h3 className="text-lg font-semibold mb-4">Choose dates</h3>
                  <DatePickerWithRange></DatePickerWithRange>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Number of Guests */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="rounded-3xl">
                Guests
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[325px] md:w-[500px] lg:w-[600px]">
                  <h3 className="text-lg font-semibold mb-4">Choose guests</h3>
                  <GuestSelector></GuestSelector>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden md:block">
              <Link href="/search" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Button
                    variant="destructive"
                    className="rounded-full"
                    onClick={handleSearch}
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="md:hidden mt-2 flex justify-end">
        <Button
          variant="destructive"
          className="rounded-full flex gap-1"
          onClick={handleSearch}
        >
          <span className='font-semibold text-md'>Search</span> <Search className="h-4 w-4" />
        </Button>
      </div>
    </React.Fragment>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

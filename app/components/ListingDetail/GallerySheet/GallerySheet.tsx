"use client";

import { useState } from "react";
import { Button } from "@/app/components/Shadcn/Button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/Shadcn/Sheet";

const SHEET_SIZES = ["sm", "default", "lg", "xl", "full", "content"] as const;
type SheetSize = (typeof SHEET_SIZES)[number];

function GallerySheet({ children }: React.PropsWithChildren) {
  const [size, setSize] = useState<SheetSize>("full");
  return (
    <div className="flex flex-col space-y-8 my-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button>Show all photos</Button>
        </SheetTrigger>
        <SheetContent position="right" size={size}>
          {/* <SheetHeader>
            <SheetTitle>Photos</SheetTitle>
            <SheetDescription>
              View photos
            </SheetDescription>
          </SheetHeader> */}
          <div className="grid gap-4 py-4">
            {children}
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
export default GallerySheet;
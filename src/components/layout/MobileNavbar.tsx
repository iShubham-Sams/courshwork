"use client";

import { navigationArray } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const MobileNavbar = () => {
  const pathname = usePathname();
  return (
    <div className="sm:hidden bg-white p-2">
      <div className="flex justify-between">
        <div>
          <div className="relative h-[18px] w-[45px]">
            <Image fill={true} alt="this is logo" src={"/logo.png"} />
          </div>
          <p className="text-[10px] w-full text-end">beta</p>
        </div>
        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon />
          </SheetTrigger>
          <SheetContent className="w-full bg-white flex flex-col items-center p-8">
            {navigationArray.map((val) => {
              return (
                <Fragment key={val.key}>
                  <div className={`${pathname === val.link ? "bg-primary h-12 w-full rounded-full flex justify-center items-center" : ""}  `}>
                    <Link href={val.link} className="flex gap-4">
                      <val.icon color={pathname !== val.link ? "black" : undefined} size={1.3} />
                      <span className={pathname == val.link ? "text-white" : "text-black"}>{val.title}</span>
                    </Link>
                  </div>
                </Fragment>
              );
            })}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNavbar;

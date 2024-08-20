"use client";
import { navigationArray } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const DesktopSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-white  rounded-xl m-4 hidden sm:h-[calc(100vh-32px)]  sm:flex sm:flex-col sm:justify-between sm:items-center sm:p-4 ">
      <div className="flex flex-col gap-6 items-center">
        <div>
          <div className="relative h-[15px] w-[39px]">
            <Image fill={true} alt="this is logo" src={"/logo.png"} />
          </div>
          <p className="text-[8px] w-full text-end">beta</p>
        </div>
        {navigationArray.map((val) => {
          return (
            <Fragment key={val.key}>
              <div className={`${pathname === val.link ? "bg-primary h-12 w-12 rounded-full flex justify-center items-center" : ""}  `}>
                <Link href={val.link}>
                  <val.icon color={pathname !== val.link ? "black" : undefined} size={1.3} />
                </Link>
              </div>
            </Fragment>
          );
        })}
      </div>
      <div className=" p-2 rounded-full border-[3px] border-bgPrimary">
        <div className="relative h-[32px] w-[32px] ">
          <Image fill={true} src={"/useravatar.png"} alt="user avatar" />
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;

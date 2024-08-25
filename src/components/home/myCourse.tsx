import { getItem } from "@/lib/helperFunction/indexDb";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import useMyCourse from "@/lib/hooks/useMyCourse";
import { LocalStoragePdfData } from "@/lib/types/share";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Course from "./course";

const MyCourse = () => {
  const { myCourseDataArray } = useMyCourse();
  return (
    <div className="space-y-2">
      <p className="text-[14px] text-textGrey">My coursework</p>
      {!myCourseDataArray ? (
        <section className="h-[10rem] w-full  flex justify-center items-center">
          <p className="text-xl font-semibold">There is no course work please Create</p>
        </section>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {myCourseDataArray?.map((val) => {
            return <Course data={val} key={val.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MyCourse;

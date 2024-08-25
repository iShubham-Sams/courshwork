import useMyCourse from "@/lib/hooks/useMyCourse";
import React, { useState } from "react";
import Course from "./course";
import { Skeleton } from "../ui/skeleton";

const MyCourse = () => {
  const [showAll, setShowAll] = useState(2);
  const { myCourseDataArray, setMyCourseDataArray } = useMyCourse();
  if (!myCourseDataArray) {
    return <Skeleton className="w-[100%] h-[10rem] md:h-[100%] rounded-2xl" />;
  }
  return (
    <div className="space-y-2">
      <p className="text-[14px] text-textGrey">My coursework</p>
      {myCourseDataArray.length == 0 ? (
        <section className="h-[10rem] w-full  flex justify-center items-center">
          <p className="text-xl font-semibold">There is no course work please Create</p>
        </section>
      ) : (
        <div className="  sm:space-y-0 flex flex-col items-center justify-center sm:grid  sm:grid-cols-2 gap-4">
          {myCourseDataArray.slice(0, showAll)?.map((val) => {
            return <Course data={val} key={val.id} setMyCourseDataArray={setMyCourseDataArray} myCourseDataArray={myCourseDataArray} />;
          })}
          {myCourseDataArray.length > 2 && showAll == 2 ? (
            <button
              className="col-span-2 text-[14px] text-textGrey"
              onClick={() => {
                setShowAll(myCourseDataArray.length);
              }}>
              View all
            </button>
          ) : null}
          {myCourseDataArray.length > 2 && showAll > 2 ? (
            <button
              className="col-span-2 text-[14px] text-textGrey"
              onClick={() => {
                setShowAll(2);
              }}>
              View less
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default MyCourse;

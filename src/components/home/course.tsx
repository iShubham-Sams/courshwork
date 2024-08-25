import { deleteItem } from "@/lib/helperFunction/indexDb";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import useMyCourse from "@/lib/hooks/useMyCourse";
import { DeleteIcon } from "@/lib/icon";
import Image from "next/image";
import React from "react";
type Course = {
  pdfUrl: string | null;
  id: number;
  pdfFileTitle: string;
  subject: string;
  title: string;
  value: string;
  isDeletable?: boolean;
};
const Course = ({ data, setMyCourseDataArray, myCourseDataArray }: { data: Course; setMyCourseDataArray?: any; myCourseDataArray: Course[] }) => {
  const { getValue, setValue, deleteValue } = useLocalStorage();
  const deleteCourse = async () => {
    const localStoragePdfData = getValue(process.env.NEXT_PUBLIC_COURSE_WORK ?? "course_work");
    const filterData = localStoragePdfData?.filter((d: { id: number }) => d.id !== data.id);
    setValue(process.env.NEXT_PUBLIC_COURSE_WORK ?? "course_work", filterData);
    await deleteItem(data.id);
    deleteValue(data.id.toString());
    const updateState = myCourseDataArray.filter((val) => val.id !== data.id);
    setMyCourseDataArray(updateState);
  };
  return (
    <div className="lg:max-w-[40rem]  xl:max-w-[28rem] rounded-lg md:grid md:grid-cols-[30%_70%]  p-2 space-x-2 bg-[radial-gradient(circle,_#FFFFFF00,_#F4EAD8)] relative group">
      {data.isDeletable ? (
        <span className="absolute right-1 top-1 cursor-pointer group-hover:block hidden" onClick={deleteCourse}>
          <DeleteIcon />
        </span>
      ) : null}
      <iframe src={`${data.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH`} className="rounded-lg bg-white border-0 hidden md:block" width="100%" height="100%" style={{ border: "none", overflow: "hidden" }}></iframe>
      <div className="space-y-2 ">
        <p className="text-[16px] font-bold two-line-text">{data.title}</p>
        <p className="text-[12px] text-textGrey two-line-text ">How does the temperature of a Copper pipe affect the time it takes a magnet to fall thought</p>
        <div className="flex flex-wrap gap-2">
          <div className="flex justify-center items-center border rounded-full bg-white px-1 ">
            <Image src={"/men.png"} alt="tis" height={20} width={20} className="rounded-full" />
            <p className="text-[10px]">{data.value.replace("_", " ")}</p>
          </div>
          <div className="flex justify-center items-center border rounded-full bg-white px-1 ">
            <Image src={"/clock.png"} alt="tis" height={20} width={20} className="rounded-full" />
            <p className="text-[10px]">18 min read</p>
          </div>
          <div className="flex justify-center items-center border rounded-full bg-white px-1 ">
            <Image src={"/word.png"} alt="tis" height={20} width={20} className="rounded-full" />
            <p className="text-[10px]">2333 words</p>
          </div>
          <div className="flex justify-center items-center border rounded-full bg-white px-1 ">
            <Image src={"/star.png"} alt="tis" height={20} width={20} className="rounded-full" />
            <p className="text-[10px]">7/7</p>
          </div>
          <div className="flex justify-center items-center border rounded-full bg-white px-1  single-line-text overflow-hidden">
            <Image src={"/subject.png"} alt="tis" height={20} width={20} className="rounded-full" />
            <p className="text-[10px]">English</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;

"use client";
import ExploreCourseWork from "@/components/home/exploreCourseWork";
import MyCourse from "@/components/home/myCourse";
import PdfUploader from "@/components/home/pdfUploader";
import LoadingScreen from "@/components/ui/loadingScreen";
import useZustStore from "@/zustand/store";
import Image from "next/image";

export default function Home() {
  const evaluating = useZustStore((val) => val.evaluating);
  return (
    <main className="sm:h-[calc(100vh-32px)] overflow-y-auto thin-scrollbar py-[2rem] px-4 xl:p-[3rem] space-y-6">
      {evaluating && <LoadingScreen />}
      <div className="flex justify-center">
        <PdfUploader />
        <div className="hidden md:block">
          <div className="h-[8rem] w-[14rem] relative ">
            <Image alt="this is robot" src="/robot.png" fill={true} />
          </div>
          <div className="h-[22rem] w-[14rem] relative">
            <Image alt="this is robot" src="/evaluate.png" fill={true} />
          </div>
        </div>
      </div>
      <div className=" sm:flex sm:flex-col sm:justify-center  sm:items-center">
        <MyCourse />
        <ExploreCourseWork />
      </div>
    </main>
  );
}

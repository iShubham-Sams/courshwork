"use client";
import PdfUploader from "@/components/home/pdfUploader";
import LoadingScreen from "@/components/ui/loadingScreen";
import useZustStore from "@/zustand/store";
import Image from "next/image";

export default function Home() {
  const evaluating = useZustStore((val) => val.evaluating);
  return (
    <main className="sm:h-[calc(100vh-32px)] overflow-y-auto thin-scrollbar sm:grid sm:grid-cols-[90%_10%] md:grid-cols-[92%_8%] xl:grid-cols-[94%_6%] 2xl:grid-cols-[96%_4%]">
      {evaluating && <LoadingScreen />}
      <div className="flex justify-center py-[2rem] px-4 xl:p-[5rem]">
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
    </main>
  );
}

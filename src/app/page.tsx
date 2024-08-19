"use client";
import PdfUploader from "@/components/home/pdfUploader";
import RightBar from "@/components/home/rightBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StarIcon, UploadFileIcon } from "@/lib/icon";
import useBearStore from "@/zustand/store";
import Image from "next/image";
import { useShallow } from "zustand/react/shallow";

export default function Home() {
  const { nuts, honey, bears } = useBearStore(useShallow((state: any) => ({ nuts: state.nuts, honey: state.honey, bears: state.bears })));
  return (
    <main className="sm:grid sm:grid-cols-[90%_10%] md:grid-cols-[92%_8%] xl:grid-cols-[94%_6%] 2xl:grid-cols-[96%_4%]">
      <div className="flex justify-center py-[2rem] px-4 xl:p-[7rem]">
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
      <RightBar />
    </main>
  );
}

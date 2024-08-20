"use client";
import PdfUploader from "@/components/home/pdfUploader";
import RightBar from "@/components/home/rightBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="sm:h-[calc(100vh-32px)] overflow-y-auto thin-scrollbar sm:grid sm:grid-cols-[90%_10%] md:grid-cols-[92%_8%] xl:grid-cols-[94%_6%] 2xl:grid-cols-[96%_4%]">
      <div className="flex justify-center py-[2rem] px-4 xl:p-[6rem]">
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

// const evaluatePdf = useZustStore((val) => val.evaluatedPdfData);
// console.log(evaluatePdf, "evaluatePdf");
// <div className="flex justify-center py-[2rem] px-4 xl:p-[6rem]">
//   <div>
//     <p>{evaluatePdf.metadata}</p>
//   </div>
//   <iframe src={`${evaluatePdf.file}#toolbar=0`} className="thin-scrollbar" width="600" height="500"></iframe>
// </div>

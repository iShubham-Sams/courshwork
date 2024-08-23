"use client";
import Remark from "@/components/course/remark";
import { getItem } from "@/lib/helperFunction/indexDb";
import useLocalStorage, { LocalStorageValue } from "@/lib/hooks/useLocalStorage";
import { Collapse, FullScreen, ZoomInIcon, ZoomOut } from "@/lib/icon";
import { useEffect, useState } from "react";
export default function Page({ params }: { params: { courseId: string } }) {
  const [pdfFile, setPdfFile] = useState<string | null>(null);
  const { getValue, localStorageValue } = useLocalStorage();
  const [pdfMetaData, setPdfMetaData] = useState<LocalStorageValue | null>(null);

  useEffect(() => {
    if (params.courseId) {
      getValue(process.env.NEXT_PUBLIC_COURSE_WORK ?? "course_work");
      getItem(parseInt(params.courseId))
        .then((data) => {
          if (data) {
            const blob = new Blob([data.file], { type: "application/pdf" });
            const pdfUrl = URL.createObjectURL(blob);
            setPdfFile(pdfUrl);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [params.courseId, setPdfFile]);

  useEffect(() => {
    if (localStorageValue) {
      const pdfMeta = localStorageValue?.filter((d) => d.id == parseInt(params.courseId));
      setPdfMetaData(pdfMeta[0]);
    }
  }, [localStorageValue, params.courseId]);
  if (!pdfFile) {
    return <></>;
  }
  console.log(localStorageValue, "localStorageValue");

  return (
    <div className="sm:h-[calc(100vh-32px)] overflow-y-auto thin-scrollbar p-4 grid grid-cols-[70%_28%] gap-4">
      <section className="w-[100%]">
        <div className="flex justify-between w-[100%] bg-bgSecondary rounded-t-lg p-4">
          <div className="  ">{pdfMetaData && <p className="text-[10px] bg-white p-1 rounded-full">{pdfMetaData.pdfFileTitle}</p>}</div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="cursor-pointer">
                <ZoomOut />
              </span>
              <p className="text-[10px]">60%</p>
              <span className="cursor-pointer">
                <ZoomInIcon />
              </span>
            </div>
            <div className="p-1 bg-white rounded-full cursor-pointer">
              <FullScreen />
            </div>
            <div className="flex items-center p-1 bg-white rounded-full gap-1 cursor-pointer">
              <Collapse />
              <p className="text-[10px]">Collapse</p>
            </div>
          </div>
        </div>
        <iframe src={`${pdfFile}#toolbar=0`} className="thin-scrollbar" width="100%" height="500"></iframe>
      </section>
      <section>
        <Remark />
      </section>
    </div>
  );
}

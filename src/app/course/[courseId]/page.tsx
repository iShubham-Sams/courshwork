"use client";
import Criteria from "@/components/course/Criteria";
import Remark from "@/components/course/remark";
import { evaluateNumber } from "@/lib/helperFunction/evaluateNumber";
import { getItem } from "@/lib/helperFunction/indexDb";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { Collapse, FullScreen, ZoomInIcon, ZoomOut } from "@/lib/icon";
import useZustStore from "@/zustand/store";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
export default function Page({ params }: { params: { courseId: string } }) {
  const scoreAndCriteria = useZustStore((val) => val.scoreAndCriteriaValue);
  const [pdfFile, setPdfFile] = useState<string | null>(null);
  const { getValue, setValue } = useLocalStorage();
  const [pdfMetaData, setPdfMetaData] = useState<Record<string, string> | null>(null);
  const scoreCriteriaValueSet = useZustStore((val) => val.setScoreAndCriteriaValue);
  const pdfRef = useRef<HTMLIFrameElement>(null);
  const [zoomLevel, setZoomLevel] = useState(100);

  useEffect(() => {
    if (params.courseId) {
      const localStoragePdfData = getValue(process.env.NEXT_PUBLIC_COURSE_WORK ?? "course_work");
      const scoreAndCriteriaObj = getValue(params.courseId);
      if (scoreAndCriteriaObj) {
        scoreCriteriaValueSet(scoreAndCriteriaObj);
      } else {
        const overAllScore = evaluateNumber(20).toString();
        const criteriaA = evaluateNumber(10).toString();
        const criteriaB = evaluateNumber(10).toString();
        const criteriaC = evaluateNumber(10).toString();
        const timeCreate = new Date();
        const scrollObj = { overAllScore, criteriaA, criteriaB, criteriaC, timeCreate };
        scoreCriteriaValueSet(scrollObj);
        setValue(params.courseId, scrollObj);
      }
      const pdfMeta = localStoragePdfData?.filter((d: { id: number }) => d.id == parseInt(params.courseId));
      setPdfMetaData(pdfMeta[0]);
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

  if (!pdfFile) {
    return <></>;
  }
  const zoomIn = () => {
    if (zoomLevel < 200) {
      setZoomLevel((prevZoom) => prevZoom + 10);
    }
  };

  const zoomOut = () => {
    if (zoomLevel > 10) {
      setZoomLevel((prevZoom) => prevZoom - 10);
    }
  };

  return (
    <div className="h-[calc(100vh-32px)] sm:py-[2rem]  md:py-[1rem] overflow-y-auto thin-scrollbar p-4 md:grid gap-4 md:grid-cols-[70%_28%] space-y-4">
      <span className="sm:hidden">
        <Remark />
      </span>
      <div className="bg-white rounded-full flex items-center justify-between p-2 text-primary w-[60%] sm:hidden">
        <p className="text-[10px] font-bold text-primary">Check detailed Evaluation</p>
        <ArrowRightIcon />
      </div>
      <section className="w-[100%] h-[30rem] md:h-[100%]">
        <div className="flex justify-between w-[100%] bg-bgSecondary rounded-t-lg p-4">
          <div>{pdfMetaData && <p className="text-[10px] bg-white p-1 rounded-full">{pdfMetaData.pdfFileTitle}</p>}</div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="cursor-pointer" onClick={zoomOut}>
                <ZoomOut />
              </span>
              <p className="text-[10px]">{zoomLevel}%</p>
              <span className="cursor-pointer" onClick={zoomIn}>
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
        <div className="h-[85%] xl:h-[90%]  w-[100%]">
          <iframe
            src={`${pdfFile}#toolbar=0`}
            style={{
              transform: `scale(${zoomLevel / 100})`,
              transformOrigin: "0 0",
              width: `${100 / (zoomLevel / 100)}%`,
              height: `${100 / (zoomLevel / 100)}%`,
            }}
            className=" bg-white rounded-b-lg"
            width="100%"
            height="100%"
            ref={pdfRef}></iframe>
        </div>
      </section>
      <section className="space-y-4 ">
        <span className="hidden sm:block">
          <Remark />
        </span>
        <Criteria criteriaValue="A" score={parseInt(scoreAndCriteria?.criteriaA ?? "0")} />
        <Criteria criteriaValue="B" score={parseInt(scoreAndCriteria?.criteriaB ?? "0")} />
        <Criteria criteriaValue="C" score={parseInt(scoreAndCriteria?.criteriaC ?? "0")} />
        <div className="bg-white rounded-full sm:flex sm:items-center sm:justify-between sm:p-2 text-primary w-[60%] md:w-[80%] hidden">
          <p className="text-[14px] font-bold text-primary md:text-[10px]">Check detailed Evaluation</p>
          <ArrowRightIcon />
        </div>
      </section>
    </div>
  );
}

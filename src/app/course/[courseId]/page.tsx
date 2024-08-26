"use client";
import Criteria from "@/components/course/Criteria";
import Remark from "@/components/course/remark";
import { getItem } from "@/lib/helperFunction/indexDb";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { Collapse, FullScreen, ZoomInIcon, ZoomOut } from "@/lib/icon";
import useZustStore from "@/zustand/store";
import { ArrowRightIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Suspense, useEffect, useState } from "react";
import Popup from "@/components/ui/Popup";
import { Skeleton } from "@/components/ui/skeleton";
import Spinner from "@/components/ui/spinner";
import { useToast } from "@/components/ui/toast/use-toast";
import { evaluateCourse } from "@/lib/mockApi/courseEvaluate";

export default function Page({ params }: { params: { courseId: string } }) {
  const scoreAndCriteria = useZustStore((val) => val.scoreAndCriteriaValue);
  const [pdfFile, setPdfFile] = useState<string | null>(null);
  const { getValue, setValue } = useLocalStorage();
  const [pdfMetaData, setPdfMetaData] = useState<Record<string, string> | null>(null);
  const scoreCriteriaValueSet = useZustStore((val) => val.setScoreAndCriteriaValue);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [wrongId, setWrongId] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (params.courseId) {
      const localStoragePdfData = getValue(process.env.NEXT_PUBLIC_COURSE_WORK ?? "course_work");
      const pdfMeta = localStoragePdfData?.filter((d: { id: number }) => d.id == parseInt(params.courseId));
      if (pdfMeta?.length > 0) {
        const scoreAndCriteriaObj = getValue(params.courseId);
        if (scoreAndCriteriaObj) {
          if (scoreAndCriteriaObj.overAllScore >= 8)
            toast({
              title: "Congratulation Your score is Good",
              duration: 2000,
              variant: "good",
            });
          scoreCriteriaValueSet(scoreAndCriteriaObj);
        } else {
          evaluateCourse().then((value) => {
            if (parseInt(value.overAllScore) >= 8) {
              toast({
                title: "Congratulation Your score is Good",
                variant: "default",
                duration: 2000,
              });
            }
            scoreCriteriaValueSet(value);
            setValue(params.courseId, value);
          });
        }
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
      } else {
        setWrongId(true);
      }
    }
  }, [params.courseId, setPdfFile, setWrongId, getValue, scoreCriteriaValueSet, setValue, toast]);
  useEffect(() => {
    const dismissShowFullScreen = (event: KeyboardEvent) => {
      if (showFullScreen && (event.key === "Escape" || event.keyCode === 27)) {
        setShowFullScreen(false);
      }
    };
    window.addEventListener("keydown", dismissShowFullScreen);
    return () => window.removeEventListener("keydown", dismissShowFullScreen);
  }, [showFullScreen]);
  if (wrongId) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-4xl font-bold">This course result does not exist</p>
      </div>
    );
  }
  if (!pdfFile) {
    return (
      <section className="h-full w-full  flex justify-center items-center">
        <Spinner />
      </section>
    );
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
      {showFullScreen && (
        <Popup>
          <span
            className="absolute top-0 z-50 cursor-pointer right-14 border border-black"
            onClick={() => {
              setShowFullScreen(false);
            }}>
            <Cross2Icon width={20} height={20} color="black" />
          </span>
          <iframe src={`${pdfFile}#toolbar=0`} className=" bg-white rounded-b-lg" width="100%" height="100%"></iframe>
        </Popup>
      )}
      <Suspense fallback={<Skeleton />}>
        <span className="sm:hidden">
          <Remark />
        </span>
      </Suspense>
      <div className="bg-white rounded-full flex items-center justify-between p-2 text-primary w-[60%] sm:hidden">
        <p className="text-[10px] font-bold text-primary">Check detailed Evaluation</p>
        <ArrowRightIcon />
      </div>
      <Suspense fallback={<Skeleton className="w-[100%] h-[30rem] md:h-[100%] rounded-2xl" />}>
        <section className="w-[100%] h-[30rem] md:h-[100%] max-h-[95vh]">
          <div className="flex justify-between w-[100%] bg-bgSecondary rounded-t-lg p-4 ">
            {pdfMetaData && <p className="text-[10px] bg-white p-1 rounded-full  single-line-text">{pdfMetaData.pdfFileTitle}</p>}
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
              <div
                className="p-1 bg-white rounded-full cursor-pointer"
                onClick={() => {
                  setShowFullScreen(true);
                }}>
                <FullScreen />
              </div>
              <div
                className="flex items-center p-1 bg-white rounded-full gap-1 cursor-pointer"
                onClick={() => {
                  if (zoomLevel <= 45) {
                    setZoomLevel(100);
                  } else {
                    setZoomLevel(45);
                  }
                }}>
                <Collapse />
                <p className="text-[10px]">Collapse</p>
              </div>
            </div>
          </div>
          <div className="h-[85%] xl:h-[90%]  w-[100%]">
            <embed
              src={`${pdfFile}#toolbar=0`}
              style={{
                transform: `scale(${zoomLevel / 100})`,
                transformOrigin: "0 0",
                width: `${100 / (zoomLevel / 100)}%`,
                height: `${100 / (zoomLevel / 100)}%`,
              }}
              className=" bg-white rounded-b-lg"
              width="100%"
              height="100%"></embed>
          </div>
        </section>
      </Suspense>
      <section className="space-y-4 ">
        <Suspense fallback={<Skeleton className="w-full h-[100px] rounded-2xl" />}>
          <span className="hidden sm:block">
            <Remark />
          </span>
        </Suspense>
        <Suspense fallback={<Skeleton className="w-full h-[100px] rounded-2xl" />}>
          <Criteria criteriaValue="A" score={parseInt(scoreAndCriteria?.criteriaA ?? "0")} />
        </Suspense>
        <Suspense fallback={<Skeleton className="w-full h-[100px] rounded-2xl" />}>
          <Criteria criteriaValue="B" score={parseInt(scoreAndCriteria?.criteriaB ?? "0")} />
        </Suspense>
        <Suspense fallback={<Skeleton className="w-full h-[100px] rounded-2xl" />}>
          <Criteria criteriaValue="C" score={parseInt(scoreAndCriteria?.criteriaC ?? "0")} />
        </Suspense>
        <div className="bg-white rounded-full sm:flex sm:items-center sm:justify-between sm:p-2 text-primary w-[60%] md:w-[80%] hidden">
          <p className="text-[14px] font-bold text-primary md:text-[10px]">Check detailed Evaluation</p>
          <ArrowRightIcon />
        </div>
      </section>
    </div>
  );
}

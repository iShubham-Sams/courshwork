import { useEffect, useState } from "react";
import { LocalStoragePdfData } from "../types/share";
import useLocalStorage from "./useLocalStorage";
import { getItem } from "@/lib/helperFunction/indexDb";


type Course = {
  pdfUrl: string | null;
  id: number;
  pdfFileTitle: string;
  subject: string;
  title: string;
  value: string;
}
const useMyCourse = () => {
  const [myCourseDataArray, setMyCourseDataArray] = useState<Course[] | null>(null)
  const { getValue } = useLocalStorage();

  const getCourse = async () => {
    const localStoragePdfData = (await getValue(process.env.NEXT_PUBLIC_COURSE_WORK ?? "course_work")) as LocalStoragePdfData[] | [];
    const data = localStoragePdfData.map(async (val) => {
      const data = await getItem(val.id);
      if (data) {
        const blob = new Blob([data.file], { type: "application/pdf" });
        const pdfUrl = URL.createObjectURL(blob);
        return { ...val, pdfUrl };
      } else {
        return { ...val, pdfUrl: null };
      }
    });
    data.map(async (val) => {
      const da = await val;
      setMyCourseDataArray((d) => [...(d || []), da]);
    });
  };
  useEffect(() => {
    if (!myCourseDataArray) {
      getCourse();
    }
    return () => setMyCourseDataArray(null);
  }, []);
  return { myCourseDataArray, setMyCourseDataArray }
}
export default useMyCourse



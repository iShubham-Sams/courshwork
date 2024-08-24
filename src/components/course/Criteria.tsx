import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import CircularProgress from "../ui/circularProgress";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { InfoIcon } from "@/lib/icon";
import { getProgressColorAndType } from "@/lib/helperFunction/getProgressColor";
import useWindowSize from "@/lib/hooks/useWindowSize";

const Criteria = ({ criteriaValue, score }: { criteriaValue: string; score: number }) => {
  const [accordionOpen, setAccordionOpen] = useState<string | "">("");
  const [fontSizeSizeStrokeWidth, setFontSizeStrokeWidth] = useState({ font: 12, size: 60, stroke: 6 });
  const { width: windowWidth } = useWindowSize();
  const getCircularProgressFontSizeAndSizeAndStorkWidth = (windowWidth: number) => {
    if (windowWidth > 0 && windowWidth <= 415) {
      return { font: 12, size: 60, stroke: 6 };
    } else if (windowWidth > 415 && windowWidth <= 810) {
      return { font: 12, size: 60, stroke: 6 };
    } else if (windowWidth > 810 && windowWidth <= 1024) {
      return { font: 12, size: 60, stroke: 6 };
    } else if (windowWidth > 1024 && windowWidth <= 1200) {
      return { font: 12, size: 60, stroke: 6 };
    } else if (windowWidth > 1200 && windowWidth <= 1440) {
      return { font: 12, size: 60, stroke: 6 };
    } else {
      return { font: 12, size: 50, stroke: 6 };
    }
  };
  useEffect(() => {
    if (windowWidth) {
      const res = getCircularProgressFontSizeAndSizeAndStorkWidth(windowWidth);
      setFontSizeStrokeWidth(res);
    }
  }, [windowWidth]);
  return (
    <div>
      <Accordion
        value={accordionOpen} // State to control which item is open
        onValueChange={setAccordionOpen} // Update state when item is toggled
        type="single"
        collapsible
        className="w-full bg-white rounded-2xl px-2">
        <AccordionItem value={criteriaValue}>
          <AccordionTrigger className="md:p-1">
            <div className="flex gap-2">
              <CircularProgress fontSize={fontSizeSizeStrokeWidth.font} size={fontSizeSizeStrokeWidth.size} strokeWidth={fontSizeSizeStrokeWidth.stroke} color={getProgressColorAndType(score * 10).color} progress={score * 10} text={`${score}/10`} />
              <div className="text-start">
                <p className="text-textGrey text-[12px] md:text-[10px]">Criteria {criteriaValue}:</p>
                <p className="text-[16px] md:text-[12px] font-semibold">Understanding Knowledge Questions</p>
              </div>
            </div>
            {accordionOpen !== criteriaValue ? (
              <ChevronDownIcon className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200`} />
            ) : (
              <ChevronUp className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200`} />
            )}
          </AccordionTrigger>
          <AccordionContent className="space-y-2">
            <hr />
            <p className=" text-[12px] text-textGrey">The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines.</p>
            <p className="font-bold text-[16px]">Strengths</p>
            <div className="rounded-xl border border-good p-4 space-y-2 text-[12px]">
              <div className="flex gap-2">
                <span className="bg-good rounded-full  h-4 w-4 flex justify-center items-center">
                  <CheckIcon color="white" width={35} height={35} />
                </span>
                <p>Demonstrates a good understanding of the prescribed title and the associated knowledge questions.</p>
              </div>
              <div className="flex gap-2">
                <span className="bg-good rounded-full  h-4 w-4 flex justify-center items-center">
                  <CheckIcon color="white" width={35} height={35} />
                </span>
                <p>Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.</p>
              </div>
            </div>
            <p className="font-bold text-[16px]">Scope of improvement</p>
            <div className="rounded-xl border border-warning p-4 space-y-2 text-[12px]">
              <div className="flex gap-2">
                <InfoIcon size={1.7} />
                <p>Demonstrates a good understanding of the prescribed title and the associated knowledge questions.</p>
              </div>
              <div className="flex gap-2">
                <InfoIcon size={1.7} />
                <p>Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Criteria;

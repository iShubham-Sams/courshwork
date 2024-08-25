"use client";

import { convertToFormattedDate } from "@/lib/helperFunction/formatteDate";
import CircularProgress from "../ui/circularProgress";
import { getProgressColorAndType } from "@/lib/helperFunction/getProgressColor";
import useZustStore from "@/zustand/store";

const Remark = () => {
  const score = useZustStore((val) => val.scoreAndCriteriaValue);
  const colorType = getProgressColorAndType(parseInt(score?.overAllScore ?? "0") * 5);
  colorType.color;
  return (
    <div className="bg-white rounded-2xl p-4 flex justify-between">
      <div>
        <p className="text-[14px] md:text-[12px]">Overall Score</p>
        <p className="text-[20px] md:text-[14px] font-bold">
          Remark :
          <span className={`Capitalize`} style={{ color: colorType.color }}>
            {" "}
            {colorType.type}
          </span>
        </p>
        {score?.timeCreate && <p className="text-[12px] md:text-[10px] text-textGrey">Evaluated on {convertToFormattedDate(score.timeCreate)}</p>}
      </div>
      <CircularProgress size={70} fontSize={14} progress={parseInt(score?.overAllScore ?? "0") * 5} text={`${parseInt(score?.overAllScore ?? "0")}/20`} color={getProgressColorAndType(parseInt(score?.overAllScore ?? "0") * 5).color} />
    </div>
  );
};

export default Remark;

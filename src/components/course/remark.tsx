"use client";

import { useState } from "react";
import CircularProgress from "../ui/circularProgress";
import Criteria from "./Criteria";
import { getProgressColorAndType } from "@/lib/helperFunction/getProgressColor";

const Remark = () => {
  const [remark, setRemark] = useState("Good");
  const [score, setScore] = useState(8);
  return (
    <div className="bg-white rounded-2xl p-4 flex justify-between">
      <div>
        <p className="text-[14px]">Overall Score</p>
        <p className="text-[20px] font-bold">
          Remark :<span className="text-green-400 capitalize"> {getProgressColorAndType(score * 5).type}</span>
        </p>
        <p className="text-[12px] text-textGrey">Evaluated on 12 jul 2024</p>
      </div>
      <CircularProgress progress={score * 5} size={70} fontSize={14} text={`${score}/20`} color={getProgressColorAndType(score * 5).color} />
      {/* <Criteria /> */}
    </div>
  );
};

export default Remark;

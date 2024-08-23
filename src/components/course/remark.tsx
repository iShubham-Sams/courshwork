"use client";

import { useState } from "react";
import CircularProgress from "../ui/circularProgress";

const Remark = () => {
  const [remark, setRemark] = useState();
  const [score, setScore] = useState();
  return (
    <div className="bg-white rounded-2xl p-4 flex justify-between">
      <div>
        <p className="text-[14px]">Overall Score</p>
        <p className="text-[20px] font-bold">Remark : {remark}</p>
        <p className="text-[12px] text-textGrey">Evaluated on 12 jul 2024</p>
      </div>
      <CircularProgress progress={10} size={70} fontSize={14} />
    </div>
  );
};

export default Remark;

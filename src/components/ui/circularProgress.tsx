import React from "react";

const CircularProgress = ({ progress, text, color, size = 100, strokeWidth = 8, fontSize = 20 }: { progress: number; text: string; color: string; size?: number; strokeWidth?: number; fontSize?: number }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="circular-progress">
      <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
        <circle className="circle-background" stroke="lightgray" fill="transparent" strokeWidth={strokeWidth} r={radius} cx={size / 2} cy={size / 2} />
        <circle className="circle-progress" stroke={color} fill="transparent" strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} r={radius} cx={size / 2} cy={size / 2} />
      </g>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="font-bold" fontSize={`${fontSize}px`} fill="black">
        {text}
      </text>
    </svg>
  );
};

export default CircularProgress;

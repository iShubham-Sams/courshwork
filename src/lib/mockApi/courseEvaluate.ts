import { Score } from "@/zustand/store";
import { evaluateNumber } from "../helperFunction/evaluateNumber";

export const evaluateCourse = (): Promise<Score> => {
    return new Promise((resolve) => {
        const overAllScore = evaluateNumber(20).toString();
        const criteriaA = evaluateNumber(10).toString();
        const criteriaB = evaluateNumber(10).toString();
        const criteriaC = evaluateNumber(10).toString();
        const timeCreate = new Date();
        const scrollObj = { overAllScore, criteriaA, criteriaB, criteriaC, timeCreate };
        resolve(scrollObj)
    })
}
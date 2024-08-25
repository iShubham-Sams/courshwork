import { FileMetadata } from '@/lib/types/share';
import { create } from 'zustand'

export type Score = {
    overAllScore: string, criteriaA: string, criteriaB: string, criteriaC: string, timeCreate: Date
}

type StoreState = {
    evaluating: boolean
    setEvaluating: (status: boolean) => void
    scoreAndCriteriaValue: Score | null
    setScoreAndCriteriaValue: (value: Score) => void
}


const useZustStore = create<StoreState>((set) => ({
    evaluating: false,
    setEvaluating: (status) => set(() => ({ evaluating: status })),
    scoreAndCriteriaValue: null,
    setScoreAndCriteriaValue: (value) => set(() => ({ scoreAndCriteriaValue: value }))
}))
export default useZustStore
import { FileMetadata } from '@/lib/types/share';
import { create } from 'zustand'


type EvaluatedPdf = {
    title: string;
    subject: string;
    course: string;
    file: File,
    metadata: FileMetadata,
}
type StoreState = {
    evaluatedPdfData: Record<string, any> | null;
    updateEvaluatedPdfData: (newData: Record<string, any>) => void;
}


const useZustStore = create<StoreState>((set) => ({
    evaluatedPdfData: null,
    updateEvaluatedPdfData: (newData) => set(() => ({
        evaluatedPdfData: {
            ...newData
        }
    })),
}))
export default useZustStore
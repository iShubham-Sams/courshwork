import { FileMetadata } from '@/lib/types/share';
import { create } from 'zustand'



type StoreState = {
    evaluating: boolean
    setEvaluating: (status: boolean) => void
}


const useZustStore = create<StoreState>((set) => ({
    evaluating: false,
    setEvaluating: (status) => set(() => ({ evaluating: status }))
}))
export default useZustStore
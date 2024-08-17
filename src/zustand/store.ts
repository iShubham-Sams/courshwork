import { create } from 'zustand'


const useBearStore = create((set) => ({
    bears: 4,
    nuts: 2,
    honey: 1,
    increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))
export default useBearStore
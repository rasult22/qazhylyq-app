import { create } from 'zustand'
import { Prayer } from '../audios/circles'
export const useSystem = create<System>((set) => ({
  playerModalIsOpen: false,
  currentPrayer: undefined,
  completedIds: [],
  addCompleteId: (id) =>
    set((state) => {
      return {
        ...state,
        completedIds: [...state.completedIds, id]
      }
    }),
  setCurrentPrayer: (p) => set({ currentPrayer: p }),
  showPlayerModal: () => set({ playerModalIsOpen: true }),
  closePlayerModal: () => set({ playerModalIsOpen: false })
}))

type System = {
  completedIds: string[]
  addCompleteId: (id: string) => void
  playerModalIsOpen: boolean
  showPlayerModal: () => void
  closePlayerModal: () => void
  currentPrayer?: Prayer
  setCurrentPrayer: (p: Prayer) => void
}

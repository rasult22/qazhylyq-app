import { create } from 'zustand'
import { Prayer } from '../audios/circles'
export const useSystem = create<System>((set) => ({
  playerModalIsOpen: false,
  currentPrayer: undefined,
  langSelectorIsOpen: false,
  showLangSelector: () => set({ langSelectorIsOpen: true }),
  hideLangSelector: () => set({ langSelectorIsOpen: false }),
  completedIds: [],
  addCompleteId: (id) =>
    set((state) => {
      return {
        ...state,
        completedIds: [...state.completedIds, id]
      }
    }),
  duaCompletedIds: [],
  addDuaCompleteId: (id) =>
    set((state) => {
      return {
        ...state,
        duaCompletedIds: [...state.duaCompletedIds, id]
      }
    }),
  setCurrentPrayer: (p) => set({ currentPrayer: p }),
  showPlayerModal: () => set({ playerModalIsOpen: true }),
  closePlayerModal: () => set({ playerModalIsOpen: false })
}))

type System = {
  langSelectorIsOpen: boolean
  showLangSelector: () => void
  hideLangSelector: () => void

  completedIds: string[]
  addCompleteId: (id: string) => void

  duaCompletedIds: string[]
  addDuaCompleteId: (id: string) => void

  playerModalIsOpen: boolean
  showPlayerModal: () => void
  closePlayerModal: () => void

  currentPrayer?: Prayer
  setCurrentPrayer: (p: Prayer) => void
}

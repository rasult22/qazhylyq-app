import { create } from 'zustand'
import { Prayer } from '../audios/circles'
export const useSystem = create<System>((set) => ({
  playerModalIsOpen: false,
  currentPrayer: undefined,
  setCurrentPrayer: (p) => set({ currentPrayer: p }),
  showPlayerModal: () => set({ playerModalIsOpen: true }),
  closePlayerModal: () => set({ playerModalIsOpen: false })
}))

type System = {
  playerModalIsOpen: boolean
  showPlayerModal: () => void
  closePlayerModal: () => void
  currentPrayer?: Prayer
  setCurrentPrayer: (p: Prayer) => void
}

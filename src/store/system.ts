import { create } from 'zustand'

export const useSystem = create<System>((set) => ({
  playerModalIsOpen: false,
  showPlayerModal: () => set({ playerModalIsOpen: true }),
  closePlayerModal: () => set({ playerModalIsOpen: false })
}))

type System = {
  playerModalIsOpen: boolean
  showPlayerModal: () => void
  closePlayerModal: () => void
}

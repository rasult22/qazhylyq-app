import { create } from 'zustand'
import { Prayer } from '../audios/circles'

export type Locale = 'kk-KZ' | 'ru-RU' | 'tt-KZ'
export const useSystem = create<System>((set) => ({
  playerModalIsOpen: false,
  infoModalIsOpen: false,
  locale: 'kk-KZ',
  setLocale: (locale: Locale) => set({ locale: locale }),
  showInfoModal: () => set({ infoModalIsOpen: true }),
  closeInfoModal: () => set({ infoModalIsOpen: false }),
  currentPrayer: undefined,
  langSelectorIsOpen: false,
  showLangSelector: () => set({ langSelectorIsOpen: true }),
  hideLangSelector: () => set({ langSelectorIsOpen: false }),
  completedIds: [],
  addCompleteId: (id) =>
    set((state) => {
      return {
        completedIds: [...state.completedIds, id]
      }
    }),
  duaCompletedIds: [],
  addDuaCompleteId: (id) =>
    set((state) => {
      return {
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

  infoModalIsOpen: boolean
  showInfoModal: () => void
  closeInfoModal: () => void

  locale: Locale
  setLocale: (locale: Locale) => void
}

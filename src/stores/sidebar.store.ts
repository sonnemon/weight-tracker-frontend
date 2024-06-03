import { create } from 'zustand';

interface SidebarStore {
  isOpen: boolean;
  close: () => void;
  open: () => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  close: () => set({ isOpen: false }),
  open: () => set({ isOpen: true }),
}));

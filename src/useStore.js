import { create } from "zustand";

export const useStore = create((set, get) => ({
  mousePos: {x: 0, y: 0},
  setMousePosition: (newPos) => set((state) => ({ mousePos: newPos })),
}));

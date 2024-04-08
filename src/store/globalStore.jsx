import { create } from "zustand";

const globalStore = create((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

export default globalStore;

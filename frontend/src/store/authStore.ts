import { create } from 'zustand';

interface AuthState {
  accessToken: string | null;
  isOnboarded: boolean; // 온보딩 완료 여부 (Protected Route 분기용)
  setAccessToken: (token: string | null) => void;
  setOnboarded: (v: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  isOnboarded: false,
  setAccessToken: (token) => set({ accessToken: token }),
  setOnboarded: (v) => set({ isOnboarded: v }),
  logout: () => set({ accessToken: null, isOnboarded: false }),
}));

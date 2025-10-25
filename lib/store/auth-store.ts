import { create } from "zustand";
import { persist } from "zustand/middleware";

type Session = {
  token: string;
  user: { id: string; name?: string; email: string };
  expiresAt: number;
} | null;

type AuthState = {
  session: Session;
  setSession: (s: Session) => void;
  clearSession: () => void;
  isAuthenticated: () => boolean;
  hasHydrated: boolean;
  setHasHydrated: (v: boolean) => void;
};

const SESSION_KEY = "ticketapp_session";

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      session: null,
      hasHydrated: false,

      setSession: (s) => {
        set({ session: s });
      },

      clearSession: () => {
        set({ session: null });
      },

      isAuthenticated: () => {
        const s = get().session;

        if (!s) return false;
        return s.expiresAt > Date.now();
      },

      setHasHydrated: (v) => set({ hasHydrated: v }),
    }),

    {
      name: "ticketapp_auth",
      onRehydrateStorage: () => (state, error) => {
        if (error) console.error("Auth rehydration failed:", error);

        if (state?.setHasHydrated) state.setHasHydrated(true);
      },
    }
  )
);

// helper to bootstrap store from storage on client load
export function initializeAuthFromStorage() {
  if (typeof window === "undefined") return;
  try {
    const data = localStorage.getItem(SESSION_KEY);

    if (!data) return;
    const parsed = JSON.parse(data);

    // simple shape check
    if (parsed && parsed.token && parsed.user) {
      useAuthStore.getState().setSession(parsed);
    }
  } catch (e) {
    console.error("Failed to initialize auth from storage:", e);
  }
}

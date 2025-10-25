import { create } from "zustand";
import { devtools } from "zustand/middleware";

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
};

const SESSION_KEY = "ticketapp_session";

export const useAuthStore = create<AuthState>()(
  devtools((set, get) => ({
    session: null,
    setSession: (s) => {
      set({ session: s });

      if (s) {
        try {
          localStorage.setItem(SESSION_KEY, JSON.stringify(s));
        } catch (e) {
          // ignore
          throw e;
        }
      } else {
        localStorage.removeItem(SESSION_KEY);
      }
    },
    clearSession: () => {
      set({ session: null });

      try {
        localStorage.removeItem(SESSION_KEY);
      } catch {}
    },
    isAuthenticated: () => {
      const s = get().session;

      if (!s) return false;
      return s.expiresAt > Date.now();
    },
  }))
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
    // ignore
    throw e;
  }
}

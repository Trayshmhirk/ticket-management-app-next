import { useState, useCallback } from "react";
import * as api from "@/lib/mock-api";
import { useAuthStore } from "@/lib/store/auth-store";
import type { Session } from "@/lib/mock-api";

type MutationState<T> = {
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  data: T | null;
  reset: () => void;
};

function createInitialState<T>(): MutationState<T> {
  return {
    isLoading: false,
    isError: false,
    error: null,
    data: null,
    reset: () => {},
  };
}

export function useSignupMutation() {
  const setSession = useAuthStore((s) => s.setSession);

  const [state, setState] = useState<MutationState<{ session: Session }>>(createInitialState());

  // const reset = useCallback(() => setState(createInitialState()), []);
  // // ensure reset is wired into state.reset
  // if (state.reset === undefined) {
  //   setState((s) => ({ ...s, reset }));
  // }

  const mutate = useCallback(
    async (payload: { name: string; email: string; password: string }) => {
      setState((s) => ({ ...s, isLoading: true, isError: false, error: null }));

      try {
        const res = await api.apiSignup(payload);
        setState((s) => ({ ...s, isLoading: false, data: res, isError: false }));
        setSession(res.session);
        return res;
      } catch (err: unknown) {
        const error = err instanceof Error ? err : new Error(String(err));
        setState((s) => ({ ...s, isLoading: false, isError: true, error }));
        throw err;
      }
    },

    [setSession]
  );

  return { mutate, ...state };
}

export function useLoginMutation() {
  const setSession = useAuthStore((s) => s.setSession);

  const [state, setState] = useState<MutationState<{ session: Session }>>(createInitialState());

  // const reset = useCallback(() => setState(createInitialState()), []);
  // if (state.reset === undefined) {
  //   setState((s) => ({ ...s, reset }));
  // }

  const mutate = useCallback(
    async (payload: { email: string; password: string }) => {
      setState((s) => ({ ...s, isLoading: true, isError: false, error: null }));

      try {
        const res = await api.apiLogin(payload);
        setState((s) => ({ ...s, isLoading: false, data: res, isError: false }));
        setSession(res.session);
        return res;
      } catch (err: unknown) {
        const error = err instanceof Error ? err : new Error(String(err));
        setState((s) => ({ ...s, isLoading: false, isError: true, error }));
        throw err;
      }
    },
    [setSession]
  );

  return { mutate, ...state };
}

export function useLogoutMutation() {
  const clearSession = useAuthStore((s) => s.clearSession);

  const [state, setState] = useState<MutationState<null>>(createInitialState());

  const mutate = useCallback(async () => {
    setState((s) => ({ ...s, isLoading: true, isError: false, error: null }));

    try {
      await api.apiLogout();
      clearSession();
      setState((s) => ({ ...s, isLoading: false, data: null, isError: false }));
      return;
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error(String(err));
      setState((s) => ({ ...s, isLoading: false, isError: true, error }));
      throw err;
    }
  }, [clearSession]);

  return { mutate, ...state };
}

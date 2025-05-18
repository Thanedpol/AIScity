import { create } from 'zustand';

interface AuthState {
  user: any | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  signIn: async (email: string, password: string) => {
    // Implement your own authentication logic here
    set({ user: { email } });
  },
  signOut: async () => {
    set({ user: null });
  },
}));
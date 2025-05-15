import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface AuthState {
  user: any | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    set({ user: data.user });
  },
  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
}));

// Initialize auth state
supabase.auth.onAuthStateChange((event, session) => {
  useAuth.setState({ 
    user: session?.user ?? null,
    isLoading: false,
  });
});
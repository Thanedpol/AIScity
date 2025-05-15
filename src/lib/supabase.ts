import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
  },
});

// Error handler helper
export const handleSupabaseError = (error: Error) => {
  console.error('Supabase error:', error.message);
  throw error;
};

// Type-safe query helper
export async function queryBuilder<T = any>(
  query: Promise<{ data: T | null; error: Error | null }>
): Promise<T> {
  const { data, error } = await query;
  if (error) handleSupabaseError(error);
  if (!data) throw new Error('No data returned from query');
  return data;
}
import { useState } from 'react';
import { supabase, queryBuilder } from '../lib/supabase';
import { Database } from '../types/supabase';

type Article = Database['public']['Tables']['articles']['Row'];
type ArticleInsert = Database['public']['Tables']['articles']['Insert'];
type ArticleUpdate = Database['public']['Tables']['articles']['Update'];

export function useArticles() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getArticles = async () => {
    setIsLoading(true);
    try {
      return await queryBuilder(
        supabase
          .from('articles')
          .select('*')
          .order('created_at', { ascending: false })
      );
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const getArticle = async (id: string) => {
    setIsLoading(true);
    try {
      return await queryBuilder(
        supabase
          .from('articles')
          .select('*')
          .eq('id', id)
          .single()
      );
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const createArticle = async (article: ArticleInsert) => {
    setIsLoading(true);
    try {
      return await queryBuilder(
        supabase
          .from('articles')
          .insert(article)
          .select()
          .single()
      );
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateArticle = async (id: string, updates: ArticleUpdate) => {
    setIsLoading(true);
    try {
      return await queryBuilder(
        supabase
          .from('articles')
          .update(updates)
          .eq('id', id)
          .select()
          .single()
      );
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteArticle = async (id: string) => {
    setIsLoading(true);
    try {
      await queryBuilder(
        supabase
          .from('articles')
          .delete()
          .eq('id', id)
      );
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    getArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
    isLoading,
    error,
  };
}
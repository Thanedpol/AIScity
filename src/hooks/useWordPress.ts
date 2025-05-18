import { useState } from 'react';
import { wordpress } from '../lib/wordpress';

export function useWordPress() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getPosts = async () => {
    setIsLoading(true);
    try {
      return await wordpress.getPosts();
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const getPost = async (id: number) => {
    setIsLoading(true);
    try {
      return await wordpress.getPost(id);
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const createPost = async (post: any) => {
    setIsLoading(true);
    try {
      return await wordpress.createPost(post);
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updatePost = async (id: number, post: any) => {
    setIsLoading(true);
    try {
      return await wordpress.updatePost(id, post);
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deletePost = async (id: number) => {
    setIsLoading(true);
    try {
      await wordpress.deletePost(id);
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const getCategories = async () => {
    setIsLoading(true);
    try {
      return await wordpress.getCategories();
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const getTags = async () => {
    setIsLoading(true);
    try {
      return await wordpress.getTags();
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const uploadMedia = async (file: File) => {
    setIsLoading(true);
    try {
      return await wordpress.uploadMedia(file);
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
    getCategories,
    getTags,
    uploadMedia,
    isLoading,
    error,
  };
}
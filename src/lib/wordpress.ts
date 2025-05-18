import apiFetch from '@wordpress/api-fetch';
import { setToken } from '@wordpress/auth-token';

const WORDPRESS_API_URL = import.meta.env.VITE_WORDPRESS_API_URL;

if (!WORDPRESS_API_URL) {
  throw new Error('Missing WordPress API URL environment variable');
}

// Configure the WordPress API client
apiFetch.use(apiFetch.createRootURLMiddleware(WORDPRESS_API_URL));

export const wordpress = {
  setAuthToken: (token: string) => {
    setToken(token);
  },
  
  getPosts: async () => {
    return apiFetch({ path: '/wp/v2/posts' });
  },
  
  getPost: async (id: number) => {
    return apiFetch({ path: `/wp/v2/posts/${id}` });
  },
  
  createPost: async (post: any) => {
    return apiFetch({
      path: '/wp/v2/posts',
      method: 'POST',
      data: post,
    });
  },
  
  updatePost: async (id: number, post: any) => {
    return apiFetch({
      path: `/wp/v2/posts/${id}`,
      method: 'PUT',
      data: post,
    });
  },
  
  deletePost: async (id: number) => {
    return apiFetch({
      path: `/wp/v2/posts/${id}`,
      method: 'DELETE',
    });
  },
  
  getCategories: async () => {
    return apiFetch({ path: '/wp/v2/categories' });
  },
  
  getTags: async () => {
    return apiFetch({ path: '/wp/v2/tags' });
  },
  
  getMedia: async () => {
    return apiFetch({ path: '/wp/v2/media' });
  },
  
  uploadMedia: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    
    return apiFetch({
      path: '/wp/v2/media',
      method: 'POST',
      body: formData,
    });
  },
};
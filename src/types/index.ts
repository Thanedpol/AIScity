export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export type ThemeMode = 'light' | 'dark';

export interface SearchResult {
  id: string;
  title: string;
  category: string;
}
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { NewsItem, Category, SearchResult } from '../types';
import { sampleNews, categories } from '../data/sampleData';

interface NewsContextType {
  news: NewsItem[];
  categories: Category[];
  featuredNews: NewsItem[];
  getNewsByCategory: (category: string) => NewsItem[];
  searchNews: (query: string) => SearchResult[];
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export function useNews() {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
}

interface NewsProviderProps {
  children: ReactNode;
}

export function NewsProvider({ children }: NewsProviderProps) {
  const [news] = useState<NewsItem[]>(sampleNews);
  
  const featuredNews = news.filter(item => item.featured);
  
  const getNewsByCategory = (category: string) => {
    if (category === 'all') return news;
    return news.filter(item => item.category === category);
  };
  
  const searchNews = (query: string): SearchResult[] => {
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    return news
      .filter(item => 
        item.title.toLowerCase().includes(lowerQuery) || 
        item.content.toLowerCase().includes(lowerQuery)
      )
      .map(item => ({
        id: item.id,
        title: item.title,
        category: item.category
      }))
      .slice(0, 5);
  };
  
  return (
    <NewsContext.Provider value={{ 
      news, 
      categories, 
      featuredNews, 
      getNewsByCategory, 
      searchNews 
    }}>
      {children}
    </NewsContext.Provider>
  );
}
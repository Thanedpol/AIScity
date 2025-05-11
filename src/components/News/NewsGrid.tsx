import React from 'react';
import { useNews } from '../../context/NewsContext';
import { useTheme } from '../../context/ThemeContext';
import NewsCard from './NewsCard';

interface NewsGridProps {
  category: string;
}

const NewsGrid = ({ category }: NewsGridProps) => {
  const { getNewsByCategory } = useNews();
  const { theme } = useTheme();
  
  const newsItems = getNewsByCategory(category);
  
  if (newsItems.length === 0) {
    return (
      <div className={`text-center py-12 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        No news articles found for this category.
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((item) => (
        <NewsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NewsGrid;
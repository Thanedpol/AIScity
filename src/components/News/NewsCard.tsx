import React from 'react';
import { Calendar, User } from 'lucide-react';
import { NewsItem } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface NewsCardProps {
  item: NewsItem;
}

const NewsCard = ({ item }: NewsCardProps) => {
  const { theme } = useTheme();
  
  return (
    <article className={`group overflow-hidden rounded-xl shadow-md transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-gray-800 hover:shadow-lg hover:shadow-gray-700/30' 
        : 'bg-white hover:shadow-xl hover:shadow-gray-200/60'
    }`}>
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="mb-3 flex items-center">
          <span 
            className="text-xs px-2 py-1 rounded-full text-white font-medium"
            style={{ 
              backgroundColor: 
                item.category === 'tech' ? '#3b82f6' :
                item.category === 'science' ? '#10b981' :
                item.category === 'space' ? '#8b5cf6' :
                item.category === 'ai' ? '#ec4899' :
                item.category === 'bio' ? '#f59e0b' :
                '#ef4444'
            }}
          >
            {item.category}
          </span>
        </div>
        
        <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {item.title}
        </h3>
        
        <p className={`text-sm mb-4 line-clamp-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          {item.summary}
        </p>
        
        <div className={`flex items-center justify-between text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{item.author}</span>
          </div>
          
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{new Date(item.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>
      </div>
      
      {/* Read More Link */}
      <div className={`border-t px-5 py-3 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}>
        <a 
          href={`#${item.id}`}
          className={`text-sm font-medium ${
            theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
          }`}
        >
          Read Full Article
        </a>
      </div>
    </article>
  );
};

export default NewsCard;
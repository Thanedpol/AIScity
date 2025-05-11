import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NewsItem } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface CarouselItemProps {
  item: NewsItem;
}

const CarouselItem = ({ item }: CarouselItemProps) => {
  const { theme } = useTheme();
  
  return (
    <div className="relative min-w-full h-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105 ease-in-out"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 md:p-12">
        <div className="max-w-3xl">
          <span className={`inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase rounded-full ${
            item.category === 'tech' ? 'bg-blue-600' :
            item.category === 'science' ? 'bg-green-600' :
            item.category === 'space' ? 'bg-purple-600' :
            item.category === 'ai' ? 'bg-pink-600' :
            item.category === 'bio' ? 'bg-amber-600' :
            'bg-red-600'
          } text-white`}>
            {item.category}
          </span>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            {item.title}
          </h2>
          
          <p className="text-gray-200 text-sm sm:text-base mb-6 max-w-2xl">
            {item.summary}
          </p>
          
          <div className="flex items-center text-sm text-gray-300 mb-6">
            <span>{item.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(item.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}</span>
          </div>
          
          <a 
            href={`#${item.id}`} 
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Read Article
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
import React from 'react';
import { Flame, TrendingUp, Star } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useNews } from '../../context/NewsContext';

const TrendingSidebar = () => {
  const { theme } = useTheme();
  const { news } = useNews();
  
  // Get the latest 5 news items for hot news
  const hotNews = news.slice(0, 5);
  
  // Get featured news for breaking news
  const breakingNews = news.filter(item => item.featured).slice(0, 3);
  
  // Get most viewed news (simulated with first 4 items)
  const popularNews = news.slice(0, 4);
  
  return (
    <aside className={`w-full lg:w-80 p-4 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
    } rounded-lg shadow-lg`}>
      {/* Hot News */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Flame className="w-5 h-5 text-red-500 mr-2" />
          <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Hot News
          </h3>
        </div>
        <div className="space-y-4">
          {hotNews.map(item => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className={`block hover:opacity-80 transition-opacity ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              <p className="text-sm font-medium line-clamp-2">{item.title}</p>
              <p className="text-xs mt-1 text-gray-500">
                {new Date(item.date).toLocaleDateString()}
              </p>
            </a>
          ))}
        </div>
      </div>
      
      {/* Breaking News */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <TrendingUp className="w-5 h-5 text-orange-500 mr-2" />
          <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Breaking News
          </h3>
        </div>
        <div className="space-y-4">
          {breakingNews.map(item => (
            <div key={item.id} className="relative">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg" />
              <a 
                href={`#${item.id}`}
                className="absolute bottom-0 left-0 right-0 p-3 text-white hover:opacity-90 transition-opacity"
              >
                <p className="text-sm font-medium line-clamp-2">{item.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
      
      {/* Popular News */}
      <div>
        <div className="flex items-center mb-4">
          <Star className="w-5 h-5 text-yellow-500 mr-2" />
          <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Most Viewed
          </h3>
        </div>
        <div className="space-y-4">
          {popularNews.map((item, index) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className="flex items-start gap-3 group"
            >
              <span className={`text-2xl font-bold ${
                theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
              }`}>
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <p className={`text-sm group-hover:opacity-80 transition-opacity ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {item.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default TrendingSidebar;
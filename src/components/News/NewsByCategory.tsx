import React from 'react';
import { useNews } from '../../context/NewsContext';
import { useTheme } from '../../context/ThemeContext';

interface NewsByCategoryProps {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

const NewsByCategory = ({ onSelectCategory, selectedCategory }: NewsByCategoryProps) => {
  const { categories } = useNews();
  const { theme } = useTheme();
  
  return (
    <div className="mb-8">
      <div className="mb-6">
        <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Top Stories by Category
        </h2>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedCategory === 'all'
              ? `${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-900 text-white'}`
              : `${theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
          }`}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? `bg-${category.color} text-white`
                : `${theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
            }`}
            style={
              selectedCategory === category.id 
                ? { backgroundColor: category.color } 
                : undefined
            }
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewsByCategory;
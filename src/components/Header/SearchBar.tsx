import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useNews } from '../../context/NewsContext';
import { SearchResult } from '../../types';

interface SearchBarProps {
  onClose: () => void;
}

const SearchBar = ({ onClose }: SearchBarProps) => {
  const { theme } = useTheme();
  const { searchNews } = useNews();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  useEffect(() => {
    if (query.length >= 2) {
      setIsLoading(true);
      // Simulate search delay
      const timer = setTimeout(() => {
        setResults(searchNews(query));
        setIsLoading(false);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [query, searchNews]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  
  const handleClearInput = () => {
    setQuery('');
    inputRef.current?.focus();
  };
  
  return (
    <div className={`relative ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search size={18} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for news, topics..."
          className={`w-full pl-10 pr-10 py-2 rounded-lg ${
            theme === 'dark' 
              ? 'bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:border-blue-500' 
              : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-200 focus:border-blue-600'
          } border focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
        />
        {query && (
          <button 
            onClick={handleClearInput}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <X size={18} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} />
          </button>
        )}
      </div>
      
      {/* Search Results */}
      {query.length >= 2 && (
        <div className={`absolute z-50 mt-1 w-full rounded-md shadow-lg ${
          theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border overflow-hidden`}>
          {isLoading ? (
            <div className="p-4 text-center">
              <div className={`inline-block animate-spin rounded-full h-5 w-5 border-t-2 border-r-2 ${
                theme === 'dark' ? 'border-blue-400' : 'border-blue-600'
              } border-solid`}></div>
              <span className="ml-2">Searching...</span>
            </div>
          ) : results.length > 0 ? (
            <ul>
              {results.map((result) => (
                <li key={result.id} className={`${
                  theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                }`}>
                  <a 
                    href={`#${result.id}`} 
                    className="block px-4 py-3"
                    onClick={onClose}
                  >
                    <div className="flex items-start">
                      <div className="ml-3">
                        <p className={`text-sm font-medium ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {result.title}
                        </p>
                        <p className={`text-xs ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        } mt-1`}>
                          Category: {result.category}
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className={`p-4 text-center ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
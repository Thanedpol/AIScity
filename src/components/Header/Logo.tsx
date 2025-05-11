import React from 'react';
import { Atom } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Logo = () => {
  const { theme } = useTheme();
  
  return (
    <a href="/" className="flex items-center">
      <Atom 
        size={32} 
        className={`mr-2 ${theme === 'dark' 
          ? 'text-blue-400' 
          : 'text-blue-600'}`}
      />
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        AIScity
      </span>
    </a>
  );
};

export default Logo;
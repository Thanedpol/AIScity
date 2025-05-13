import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, User } from 'lucide-react';

const AdminHeader = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className={`h-16 ${
      theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    } shadow-md`}>
      <div className="h-full px-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">AIScity Admin</h1>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`p-1.5 rounded-full ${
              theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-300" />
            ) : (
              <Moon size={20} />
            )}
          </button>
          
          <div className="flex items-center">
            <User size={20} className="mr-2" />
            <span>Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
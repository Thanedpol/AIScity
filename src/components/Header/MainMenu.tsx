import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const menuItems = [
  { 
    name: 'Technology', 
    link: '#',
    submenu: [
      { name: 'Computers & Software', link: '#' },
      { name: 'Robotics', link: '#' },
      { name: 'Quantum Computing', link: '#' },
      { name: 'Electronics', link: '#' }
    ]
  },
  { 
    name: 'Science', 
    link: '#',
    submenu: [
      { name: 'Physics', link: '#' },
      { name: 'Chemistry', link: '#' },
      { name: 'Biology', link: '#' },
      { name: 'Earth Sciences', link: '#' }
    ]
  },
  { 
    name: 'AI', 
    link: '#',
    submenu: [
      { name: 'Machine Learning', link: '#' },
      { name: 'Neural Networks', link: '#' },
      { name: 'Computer Vision', link: '#' },
      { name: 'NLP', link: '#' }
    ]
  },
  { 
    name: 'Space', 
    link: '#',
    submenu: [
      { name: 'Astronomy', link: '#' },
      { name: 'Space Exploration', link: '#' },
      { name: 'Astrophysics', link: '#' },
      { name: 'Cosmology', link: '#' }
    ]
  },
  { name: 'Medicine', link: '#' },
  { name: 'About', link: '#' }
];

const MainMenu = () => {
  const { theme } = useTheme();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuMouseEnter = (menuName: string) => {
    setActiveMenu(menuName);
  };

  const handleMenuMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="flex items-center">
      <ul className="flex space-x-6">
        {menuItems.map((item) => (
          <li 
            key={item.name} 
            className="relative"
            onMouseEnter={() => handleMenuMouseEnter(item.name)}
            onMouseLeave={handleMenuMouseLeave}
          >
            <a 
              href={item.link} 
              className={`flex items-center py-2 ${
                theme === 'dark' ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              } font-medium transition-colors`}
            >
              {item.name}
              {item.submenu && (
                <ChevronDown 
                  size={16} 
                  className={`ml-1 transition-transform duration-200 ${
                    activeMenu === item.name ? 'rotate-180' : ''
                  }`} 
                />
              )}
            </a>
            
            {/* Submenu */}
            {item.submenu && (
              <div 
                className={`absolute left-0 top-full min-w-[200px] rounded-md p-2 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } shadow-lg transform transition-all duration-200 ease-in-out ${
                  activeMenu === item.name 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                } border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}
              >
                <ul className="py-1">
                  {item.submenu.map((subItem) => (
                    <li key={subItem.name}>
                      <a 
                        href={subItem.link} 
                        className={`block px-4 py-2 rounded-md ${
                          theme === 'dark' 
                            ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                        } transition-colors`}
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
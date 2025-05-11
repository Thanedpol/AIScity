import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
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

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const { theme } = useTheme();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menuName: string) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  return (
    <div 
      className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <nav className={`border-t mt-1 py-2 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-1">
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className={`w-full flex items-center justify-between px-2 py-2.5 rounded-md ${
                      theme === 'dark' 
                        ? 'text-gray-200 hover:bg-gray-800' 
                        : 'text-gray-700 hover:bg-gray-100'
                    } font-medium transition-colors`}
                  >
                    <span>{item.name}</span>
                    {openSubmenu === item.name ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                  </button>
                  <div 
                    className={`transition-all duration-200 ease-in-out overflow-hidden ${
                      openSubmenu === item.name ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className={`pl-4 ml-2 border-l ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name}>
                          <a 
                            href={subItem.link} 
                            className={`block px-3 py-2 ${
                              theme === 'dark' 
                                ? 'text-gray-300 hover:text-white' 
                                : 'text-gray-600 hover:text-gray-900'
                            } transition-colors`}
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <a 
                  href={item.link} 
                  className={`block px-2 py-2.5 rounded-md ${
                    theme === 'dark' 
                      ? 'text-gray-200 hover:bg-gray-800' 
                      : 'text-gray-700 hover:bg-gray-100'
                  } font-medium transition-colors`}
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
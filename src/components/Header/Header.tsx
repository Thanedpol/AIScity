import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';
import Logo from './Logo';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled 
          ? `${theme === 'dark' ? 'bg-gray-900/95 shadow-gray-900/30' : 'bg-white/95 shadow-gray-200/30'} shadow-lg` 
          : `${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-transparent' : 'bg-gradient-to-b from-white to-transparent'}`
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <MainMenu />
          </div>

          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button 
              onClick={toggleSearch}
              className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Search"
            >
              <Search size={20} className={theme === 'dark' ? 'text-gray-200' : 'text-gray-600'} />
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-300" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X size={24} className={theme === 'dark' ? 'text-gray-200' : 'text-gray-600'} />
              ) : (
                <Menu size={24} className={theme === 'dark' ? 'text-gray-200' : 'text-gray-600'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMenuOpen} />

        {/* Search Bar */}
        <div className={`overflow-hidden transition-all duration-300 ${isSearchOpen ? 'max-h-20 opacity-100 py-3' : 'max-h-0 opacity-0'}`}>
          <SearchBar onClose={() => setIsSearchOpen(false)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
import React, { useState } from 'react';
import Header from './Header/Header';
import Carousel from './Carousel/Carousel';
import NewsByCategory from './News/NewsByCategory';
import NewsGrid from './News/NewsGrid';
import Footer from './Footer/Footer';
import TrendingSidebar from './Sidebar/TrendingSidebar';
import { useTheme } from '../context/ThemeContext';

const Layout = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-200`}>
      <Header />
      
      <main className="pt-16 min-h-[calc(100vh-20rem)]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <section>
                <Carousel />
              </section>
              
              <section className="py-8">
                <NewsByCategory 
                  onSelectCategory={(category) => setSelectedCategory(category)} 
                  selectedCategory={selectedCategory}
                />
              </section>
              
              <section className="pb-12">
                <NewsGrid category={selectedCategory} />
              </section>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-80">
              <div className="sticky top-20">
                <TrendingSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
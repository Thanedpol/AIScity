import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNews } from '../../context/NewsContext';
import { useTheme } from '../../context/ThemeContext';
import CarouselItem from './CarouselItem';

const Carousel = () => {
  const { featuredNews } = useNews();
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentSlide, isAutoPlaying]);
  
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
  };
  
  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredNews.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredNews.length - 1 : prev - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  return (
    <div 
      className="relative w-full overflow-hidden rounded-xl shadow-lg mt-8"
      style={{ height: 'min(70vh, 600px)' }}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <div 
        className="h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {featuredNews.map((item, index) => (
          <CarouselItem key={item.id} item={item} />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 backdrop-blur-sm
          hover:bg-black/50 transition-all duration-200 ${
          theme === 'dark' ? 'text-gray-200' : 'text-white'
        }`}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 backdrop-blur-sm
          hover:bg-black/50 transition-all duration-200 ${
          theme === 'dark' ? 'text-gray-200' : 'text-white'
        }`}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Pagination Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {featuredNews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white w-6' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
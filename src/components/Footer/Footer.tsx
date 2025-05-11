import React from 'react';
import { Atom, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import NewsletterSignup from './NewsletterSignup';

const Footer = () => {
  const { theme } = useTheme();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-gray-800 text-gray-200'}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Atom size={28} className="text-blue-400 mr-2" />
              <h3 className="text-xl font-bold">AIScity</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your premier source for cutting-edge science and technology news, fostering knowledge sharing and discussion in the scientific community.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Explore */}
          <div>
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Technology</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Science</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Space</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">AI & Robotics</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Biotechnology</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Medicine</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-gray-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  1234 Science Avenue, Tech City, TC 98765
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gray-400 mr-2 flex-shrink-0" />
                <a href="mailto:info@aiscity.com" className="text-gray-400 hover:text-white transition-colors">
                  info@aiscity.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest developments in science and technology.
            </p>
            <NewsletterSignup />
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} AIScity. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm md:text-right">
              <a href="#" className="hover:text-white transition-colors mr-4">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors mr-4">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
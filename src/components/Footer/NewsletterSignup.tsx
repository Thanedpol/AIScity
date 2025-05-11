import React, { useState } from 'react';
import { Send } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Simulate form submission
    setError('');
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 5000);
  };
  
  return (
    <div>
      {isSubmitted ? (
        <div className="bg-green-600/20 border border-green-500 text-green-200 rounded-lg p-3 text-sm">
          Thank you for subscribing! We'll keep you updated on the latest news.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-blue-600 hover:bg-blue-700 rounded-md p-1.5 transition-colors"
              aria-label="Subscribe"
            >
              <Send size={18} />
            </button>
          </div>
          {error && (
            <p className="mt-2 text-red-400 text-sm">{error}</p>
          )}
        </form>
      )}
      <p className="mt-3 text-xs text-gray-500">
        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
      </p>
    </div>
  );
};

export default NewsletterSignup;
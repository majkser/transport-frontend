'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpCircle } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get the footer element
      const footer = document.querySelector('footer');
      if (!footer) return;

      // Get the footer's position relative to the viewport
      const footerRect = footer.getBoundingClientRect();
      
      // Show button when footer comes into view
      setIsVisible(footerRect.top <= window.innerHeight);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors animate-fade-in"
      aria-label="Scroll to top"
    >
      <ArrowUpCircle size={24} />
    </button>
  );
}
import React, { useEffect, useState } from 'react';

const BlurredContentArea = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className="content-area">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-0"></div>

      {/* Blurred content container */}
      <div className={`blurred-content-container backdrop-blur-lg ${scrolled ? 'bg-black/50' : 'bg-black/40'} rounded-t-3xl overflow-hidden transition-colors duration-500`}>
        {/* Subtle border glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

        {/* Content */}
        {children}
      </div>
    </div>
  );
};

export default BlurredContentArea;

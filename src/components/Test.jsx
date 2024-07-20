import React, { useState, useEffect } from 'react';

const ScrollAnimation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative overflow-hidden w-full">
        <p className={`absolute top-0 left-0 transition-transform duration-500 transform ${isScrolled ? '-translate-y-full' : 'translate-y-0'} text-3xl md:text-5xl font-bold text-center text-white`}>
          {isScrolled ? 'Graphic Designer | Video Editor | Thumbnail Designer' : 'Web Designer | Graphic Designer | Video Editor | Thumbnail Designer'}
        </p>
      </div>
    </div>
  );
};

export default ScrollAnimation;

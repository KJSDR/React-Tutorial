import React, { useState, useEffect } from 'react';
import './BackToTop.css';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`BackToTop ${isVisible ? 'visible' : ''}`}>
      <button onClick={scrollToTop} aria-label="Back to top">
        ↑
      </button>
    </div>
  );
}

export default BackToTop;
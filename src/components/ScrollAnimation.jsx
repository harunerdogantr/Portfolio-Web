import { useState, useEffect, useRef } from 'react';
import './ScrollAnimation.css';

const ScrollAnimation = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const elementTop = elementRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // İlk yüklemede kontrol et

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [delay]);

  return (
    <div 
      ref={elementRef}
      className={`scroll-animation ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation; 
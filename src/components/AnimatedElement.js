import React, { useEffect, useRef, useState } from 'react';

const AnimatedElement = ({ 
  children, 
  animation = 'fade-in', 
  delay = 0,
  duration = null,
  triggerOnce = true,
  className = '',
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  
  useEffect(() => {
    const currentElement = elementRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element is visible in viewport
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // If we only want to trigger the animation once
          if (triggerOnce) {
            observer.unobserve(currentElement);
          }
        } else if (!triggerOnce) {
          // If we want to re-trigger the animation when element leaves viewport
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, triggerOnce]);
  
  // Custom duration if provided
  const customStyle = {
    ...style,
    ...(duration ? { '--animation-duration': `${duration}s` } : {})
  };
  
  return (
    <div 
      ref={elementRef}
      className={`animated-element ${className} ${isVisible ? animation : 'hidden'}`}
      style={customStyle}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ 
  children, 
  className = '', 
  animation = 'fade-up', 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const animationClasses = {
    'fade-up': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
    'fade-in': isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
    'slide-left': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12',
    'slide-right': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12',
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${animationClasses[animation] || animationClasses['fade-up']} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

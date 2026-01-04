import React from 'react';
import { useLocation } from 'react-router-dom';

const animationMap = {
  '/': 'animate-zoom-in',
  '/choose-us': 'animate-slide-down',
  '/services': 'animate-rotate-in',
  '/portfolio': 'animate-skew-in',
  '/contact': 'animate-fade-in'
};

const PageTransition = ({ children }) => {
  const { pathname } = useLocation();
  const animationClass = animationMap[pathname] || 'animate-fade-in-up';

  return (
    <div className={`w-full ${animationClass}`}>
      {children}
    </div>
  );
};

export default PageTransition;

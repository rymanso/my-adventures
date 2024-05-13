import React, { useRef, useEffect, useState } from 'react';

export const ScrollSections = ({ children, className }) => {
    const sectionRefs = useRef([]);
    const [currentSection, setCurrentSection] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const currentSectionOffset = sectionRefs.current[currentSection].offsetTop;
  
        if (scrollPosition > currentSectionOffset && currentSection < sectionRefs.current.length - 1) {
          setCurrentSection(currentSection + 1);
        } else if (scrollPosition < currentSectionOffset && currentSection > 0) {
          setCurrentSection(currentSection - 1);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, [currentSection]);

    useEffect(() => {
        const currentSectionElement = sectionRefs.current[currentSection];
        if (currentSectionElement)
        currentSectionElement.scrollIntoView({ behavior: 'smooth' });
      }, [currentSection]);

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          ref: (el) => (sectionRefs.current[index] = el),
        })
      )}
    </div>
  );
};

import { useState, useEffect } from "react";

const useActiveSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    // Clean up observer when component unmounts
    const observeSections = () => {
      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.observe(section);
        }
      });
    };

    observeSections();

    return () => {
      observer.disconnect(); // Clean up the observer
    };
  }, [sectionIds]); // Run the effect again if sectionIds change

  return activeSection;
};

export default useActiveSection;

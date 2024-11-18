import { useState, useEffect, useRef } from "react";

const useActiveSection = (sectionIds: string[], offset: number = 100) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const activeSectionRef = useRef("");

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveSection = "";

      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            currentActiveSection = sectionIds[i];
            break;
          }
        }
      }

      if (
        currentActiveSection &&
        currentActiveSection !== activeSectionRef.current
      ) {
        activeSectionRef.current = currentActiveSection;
        setActiveSection(currentActiveSection);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export default useActiveSection;

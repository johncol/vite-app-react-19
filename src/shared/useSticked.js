import { useEffect, useState } from "react";

const DEFAULT_MD_SPACING = 20;

export const useSticked = (threshold = DEFAULT_MD_SPACING) => {
  const [isSticked, setIsSticked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticked(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isSticked;
};

import { useEffect } from "react";

export const useScrollToTopEffect = (behavior = "smooth") => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior,
    });
  }, [behavior]);
};

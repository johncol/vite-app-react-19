import { useEffect } from "react";

export const useScrollToTopEffect = (behavior, elementOrRef, poster = null) => {
  useEffect(() => {
    const element =
      elementOrRef?.current !== undefined ? elementOrRef.current : elementOrRef;

    // Use setTimeout to ensure the ref is attached after React commits
    const timeoutId = setTimeout(() => {
      if (element && typeof element.scrollTo === "function") {
        element.scrollTo({
          top: 0,
          behavior,
        });
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [behavior, elementOrRef, poster]);
};

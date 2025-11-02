import { useState, useTransition } from "react";

export const useCurrentPosterState = () => {
  const [currentPoster, setCurrentPoster] = useState(null);
  const [_, startTransition] = useTransition();

  const updatePoster = (poster) => {
    startTransition(() => {
      setCurrentPoster(poster);
    });
  };

  return { currentPoster, updatePoster };
};

import { useState, useTransition } from "react";
import { posters } from "../../api/posters";

export const usePosters = () => {
  const [_, startTransition] = useTransition();
  const [sortedPosters, setSortedPosters] = useState(posters);

  const sortBy = (field, order) => {
    const sorted = [...posters].sort((a, b) => {
      let comparison = 0;

      if (field === "id") {
        comparison = a.id - b.id;
      } else if (field === "title") {
        comparison = a.title.localeCompare(b.title);
      }

      return order === "DESC" ? -comparison : comparison;
    });

    startTransition(() => {
      setSortedPosters(sorted);
    });
  };

  return {
    posters: sortedPosters,
    sortBy,
  };
};

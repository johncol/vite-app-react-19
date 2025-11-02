import { useScrollToTopEffect } from "../../shared/useScrollToTopEffect";
import { PosterCard } from "../poster-card/PosterCard";
import { ViewTransition } from "react";

import "./PosterGrid.css";

export const PosterGrid = ({ posters, onPosterClick }) => {
  useScrollToTopEffect("auto", window);

  return (
    <section className="poster-grid" aria-label="Movie posters collection">
      <ul className="poster-grid-list">
        {posters.map((poster) => (
          <li key={poster.id || poster.title}>
            <ViewTransition name={`poster-${poster.id}`}>
              <PosterCard
                title={poster.title}
                image={poster.image}
                onClick={() => onPosterClick(poster)}
              />
            </ViewTransition>
          </li>
        ))}
      </ul>
    </section>
  );
};

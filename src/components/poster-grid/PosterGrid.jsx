import { useScrollToTopEffect } from "../../shared/useScrollToTopEffect";
import { posters } from "../../api/posters";
import { PosterCard } from "../poster-card/PosterCard";

import "./PosterGrid.css";

export const PosterGrid = ({ onPosterClick }) => {
  useScrollToTopEffect("smooth");

  return (
    <section className="poster-grid" aria-label="Movie posters collection">
      <ul className="poster-grid-list">
        {posters.map((poster) => (
          <li key={poster.id || poster.title}>
            <PosterCard
              title={poster.title}
              image={poster.image}
              onClick={() => onPosterClick(poster)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

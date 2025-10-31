import { useScrollToTopEffect } from "../../shared/useScrollToTopEffect";
import { posters } from "../../api/posters";
import { PosterCard } from "../poster-card/PosterCard";

import "./PosterGrid.css";

export const PosterGrid = ({ onPosterClick }) => {
  useScrollToTopEffect("smooth");

  return (
    <div className="poster-grid">
      {posters.map((poster) => (
        <PosterCard
          key={poster.title}
          title={poster.title}
          image={poster.image}
          onClick={() => onPosterClick(poster)}
        />
      ))}
    </div>
  );
};

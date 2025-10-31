import { posters } from "../../api/posters";
import { Poster } from "../poster/Poster";

import "./PosterGrid.css";

export const PosterGrid = () => {
  return (
    <div className="poster-grid">
      {posters.map((poster) => (
        <Poster key={poster.title} title={poster.title} image={poster.image} />
      ))}
    </div>
  );
};

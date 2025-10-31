import { useScrollToTopEffect } from "../../shared/useScrollToTopEffect";
import "./PosterDetail.css";

export const PosterDetail = ({ poster, onClose }) => {
  useScrollToTopEffect("auto");

  return (
    <article className="poster-detail">
      <img src={poster?.image} alt={poster?.title} />
      <div className="poster-detail-content">
        <h1>{poster?.title}</h1>
        <p>{poster?.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </article>
  );
};

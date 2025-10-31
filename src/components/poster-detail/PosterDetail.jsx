import { useRef } from "react";
import { useScrollToTopEffect } from "../../shared/useScrollToTopEffect";
import "./PosterDetail.css";

export const PosterDetail = ({ poster, onClose }) => {
  const contentRef = useRef(null);
  useScrollToTopEffect("auto", contentRef, poster);

  if (!poster) {
    return null;
  }

  const descriptionLines =
    typeof poster.description === "string"
      ? poster.description.split("\n")
      : [];

  return (
    <article
      className="poster-detail"
      aria-labelledby="poster-title"
      aria-live="polite"
    >
      <img src={poster.image} alt={poster.title || "Movie poster"} />
      <div className="poster-detail-content" ref={contentRef}>
        <h1 id="poster-title">{poster.title}</h1>
        {descriptionLines.length > 0 && (
          <div aria-label="Movie description">
            {descriptionLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        )}
        <button onClick={onClose} aria-label="Close movie details">
          Close
        </button>
      </div>
    </article>
  );
};

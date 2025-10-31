import "./PosterCard.css";

export const PosterCard = ({ title, image, onClick }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <button
      className="poster-card"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={`View details for ${title}`}
    >
      <img src={image} alt={title} />
    </button>
  );
};

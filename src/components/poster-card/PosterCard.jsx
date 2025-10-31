import "./PosterCard.css";

export const PosterCard = ({ title, image, onClick }) => {
  return (
    <div className="poster-card" onClick={onClick}>
      <img src={image} alt={title} />
    </div>
  );
};

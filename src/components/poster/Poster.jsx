import "./Poster.css";

export const Poster = ({ title, image }) => {
  return (
    <div className="poster">
      <img src={image} alt={title} />
    </div>
  );
};

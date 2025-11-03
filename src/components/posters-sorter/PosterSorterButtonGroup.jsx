import "./PosterSorterButtonGroup.css";

export const PosterSorterButtonGroup = ({ options }) => {
  return (
    <div className="poster-sorter-button-group">
      {options.map((option) => (
        <button
          key={option.field}
          type="button"
          className={`poster-sorter-button ${option.isSelected ? "selected" : ""}`}
          onClick={option.onClick}
          aria-label={option["aria-label"]}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};


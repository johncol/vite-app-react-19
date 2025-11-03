import { useState } from "react";
import { PosterSorterButtonGroup } from "./PosterSorterButtonGroup";
import "./PosterSorter.css";

export const PosterSorter = ({ sortBy }) => {
  const [field, setField] = useState("id");
  const [order, setOrder] = useState("ASC");

  const handleFieldChange = (newField) => {
    setField(newField);
    sortBy(newField, order);
  };

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder);
    sortBy(field, newOrder);
  };

  const fieldOptions = [
    {
      field: "id",
      label: "ID",
      onClick: () => handleFieldChange("id"),
      "aria-label": "Sort by ID",
      isSelected: field === "id",
    },
    {
      field: "title",
      label: "Title",
      onClick: () => handleFieldChange("title"),
      "aria-label": "Sort by Title",
      isSelected: field === "title",
    },
  ];

  const orderOptions = [
    {
      field: "ASC",
      label: "Asc",
      onClick: () => handleOrderChange("ASC"),
      "aria-label": "Sort Ascending",
      isSelected: order === "ASC",
    },
    {
      field: "DESC",
      label: "Desc",
      onClick: () => handleOrderChange("DESC"),
      "aria-label": "Sort Descending",
      isSelected: order === "DESC",
    },
  ];

  return (
    <div className="poster-sorter">
      <div className="poster-sorter-field">
        <label className="poster-sorter-label">Sort by:</label>
        <PosterSorterButtonGroup options={fieldOptions} />
      </div>

      <div className="poster-sorter-order">
        <label className="poster-sorter-label">Order:</label>
        <PosterSorterButtonGroup options={orderOptions} />
      </div>
    </div>
  );
};


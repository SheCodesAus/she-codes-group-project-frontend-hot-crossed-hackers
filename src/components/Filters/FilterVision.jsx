import React from "react";
import "./Filters.css";

export default function FilterVision(props) {
  function handleCategoryChange(event) {
    props.setSelectedVision(event.target.value);
  }

  return (
    <div className="filter-container">
      <div>
        <select
          name="category-list"
          id="category-list"
          onChange={handleCategoryChange}
        >
          <option default value="">
            Vision Impairment
          </option>
          <option value="AN">Any</option>
          <option value="YE">Yes</option>
        </select>
      </div>
    </div>
  );
}

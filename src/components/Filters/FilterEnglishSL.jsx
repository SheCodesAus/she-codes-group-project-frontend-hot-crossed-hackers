import React from "react";
import "./Filters.css";

export default function FilterEnglishSL(props) {
  function handleCategoryChange(event) {
    props.setSelectedEnglishSL(event.target.value);
  }

  return (
    <div className="filter-container">
      <div>
        <select
          name="category-list"
          id="category-list"
          onChange={handleCategoryChange}
        >
          <option id="filter-title" default value="">
            Non-native English Speaker
          </option>
          <option value="AN">Any</option>
          <option value="YE">Yes</option>
        </select>
      </div>
    </div>
  );
}

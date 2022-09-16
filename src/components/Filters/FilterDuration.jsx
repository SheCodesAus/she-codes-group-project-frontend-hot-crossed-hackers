import React from "react";
import "./Filters.css";

//Filter list by category in React JS
export default function FilterDuration(props) {
  function handleCategoryChange(event) {
    props.setSelectedDuration(event.target.value);
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
            Duration
          </option>
          <option value="AN">Any</option>
          <option value="WO">Workshop</option>
          <option value="BO">BootCamp</option>
          <option value="UG">Undergraduate</option>
        </select>
      </div>
    </div>
  );
}

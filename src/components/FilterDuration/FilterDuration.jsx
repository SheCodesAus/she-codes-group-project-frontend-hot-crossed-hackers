import React from "react";
import "./FilterDuration.css";

//Filter list by category in React JS
export default function FilterDuration(props) {
  function handleCategoryChange(event) {
    props.setSelectedCategory(event.target.value);
  }

  return (
    <div className="app">
      <div className="filter-container">
        <div>Duration</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="AN">Any</option>
            <option value="WO">Workshop</option>
            <option value="BO">BootCamp</option>
            <option value="UG">Undergraduate</option>
          </select>
        </div>
      </div>
    </div>
  );
}

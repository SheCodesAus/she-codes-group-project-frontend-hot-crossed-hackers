import React from "react";
import "./FilterIndigenous.css";

//Filter list by category in React JS
export default function FilterIndigenous(props) {
  function handleCategoryChange(event) {
    props.setSelectedIndigenous(event.target.id);
  }

  return (
    <div className="app">
      <div className="filter-container">
        <div>Indigenous Status</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="AN">Any</option>
            <option value="AB">Aboriginal</option>
            <option value="AT">Aboriginal TSI</option>
          </select>
        </div>
      </div>
    </div>
  );
}

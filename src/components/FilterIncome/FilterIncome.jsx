import React from "react";
import "./FilterIncome.css";

export default function FilterIncome(props) {
  function handleCategoryChange(event) {
    props.setSelectedCategory(event.target.value);
  }

  return (
    <div className="app">
      <div className="filter-container">
        <div>Low Income</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="AN">Any</option>
            <option value="YE">Yes</option>
            {/* <option value="NO">No</option> */}
          </select>
        </div>
      </div>
    </div>
  );
}
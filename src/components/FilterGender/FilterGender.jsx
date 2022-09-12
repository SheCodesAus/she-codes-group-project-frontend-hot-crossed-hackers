import React from "react";
import "./FilterGender.css";

//Filter list by category in React JS
export default function FilterGender(props) {
  function handleCategoryChange(event) {
    props.setSelectedGender(event.target.value);
  }

  return (
    <div className="app">
      <div className="filter-container">
        <div>Filter by: Gender</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="AN">Any</option>
            <option value="FE">Female</option>
            <option value="MA">Male</option>
            <option value="NB">Non-Binary</option>
          </select>
        </div>
      </div>
    </div>
  );
}

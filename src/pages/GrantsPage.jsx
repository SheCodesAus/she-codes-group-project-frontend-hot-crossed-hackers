// import { useParams } from "react-router-dom"; use this to test dummy data
// import { allGrants } from "../data"; use this to test dummy data
import GrantCard from "../components/GrantCard/GrantCard";
import React, { useState, useEffect } from "react";
import FilterGender from "../components/Filters/FilterGender";
import FilterIndigenous from "../components/Filters/FilterIndigenous";
// import FilterVision from "../components/FilterVision/FilterVision";
// import FilterIncome from "../components/FilterIncome/FilterIncome";
// import FilterEnglishSL from "../components/FilterEnglishSL/FilterEnglishSL";
// import FilterDuration from "../components/FilterDuration/FilterDuration";

export default function GrantsPage() {
  const [grantList, setGrantList] = useState([]);
  const [filteredGrantList, setFilteredGrantList] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedIndigenous, setSelectedIndigenous] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}scholarships/`)
      .then((results) => {
        console.log(results);
        return results.json();
      })
      .then((data) => {
        setGrantList(data);
      });
  }, []);

  useEffect(() => {
    setFilteredGrantList(grantList);
  }, [grantList]);
  // this will set filtered grant list with a copy of grant list (that's received your Back End)

  // Filters useEffect start

  useEffect(() => {
    let arr = [...grantList];

    if (selectedGender !== "") {
      arr = arr.filter((grant) => grant.gender === selectedGender);
      console.log("middle", arr, selectedGender);
    }

    if (selectedIndigenous !== "") {
      arr = arr.filter(
        (grant) => grant.indigenous_status === selectedIndigenous
      );
      console.log("middle 2", arr, selectedIndigenous);
    }

    setFilteredGrantList(() => arr);

    console.log("end", arr);
  }, [grantList, selectedGender, selectedIndigenous]);

  // Filters useEffect end

  return (
    <div className="main-background">
      <div>Filter by:</div>
      <div id="filters">
        <FilterGender setSelectedGender={setSelectedGender} />
        <FilterIndigenous setSelectedIndigenous={setSelectedIndigenous} />
        {/* <FilterVision setSelectedCategory={setSelectedCategory} />
        <FilterIncome setSelectedCategory={setSelectedCategory} />
        <FilterEnglishSL setSelectedCategory={setSelectedCategory} />
        <FilterDuration setSelectedCategory={setSelectedCategory} /> */}
      </div>
      {filteredGrantList.length > 0 ? (
        <div id="grant-list">
          {filteredGrantList.map((grantData, key) => (
            <GrantCard key={key} grantData={grantData} />
          ))}
        </div>
      ) : (
        <h5>hi</h5>
      )}
    </div>
  );
}

// import { useParams } from "react-router-dom"; use this to test dummy data
// import { allGrants } from "../data"; use this to test dummy data
import GrantCard from "../components/GrantCard/GrantCard";
import React, { useState, useEffect } from "react";
import FilterGender from "../components/Filters/FilterGender";
import FilterIndigenous from "../components/Filters/FilterIndigenous";
import FilterVision from "../components/Filters/FilterVision";
import FilterIncome from "../components/Filters/FilterIncome";
import FilterEnglishSL from "../components/Filters/FilterEnglishSL";
import FilterDuration from "../components/Filters/FilterDuration";
import LoadingSpinner from "../components/LoadingSpinner";

export default function GrantsPage() {
  const [loading, setLoading] = useState(false);
  const [grantList, setGrantList] = useState([]);
  const [filteredGrantList, setFilteredGrantList] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedIndigenous, setSelectedIndigenous] = useState("");
  const [selectedVision, setSelectedVision] = useState("");
  const [selectedIncome, setSelectedIncome] = useState("");
  const [selectedEnglishSL, setSelectedEnglishSL] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}scholarships/`)
      .then((results) => {
        console.log(results);
        return results.json();
      })
      .then((data) => {
        setGrantList(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
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
    }

    if (selectedIndigenous !== "") {
      arr = arr.filter(
        (grant) => grant.indigenous_status === selectedIndigenous
      );
    }

    if (selectedVision !== "") {
      arr = arr.filter((grant) => grant.vision_impairment === selectedVision);
    }
    if (selectedIncome !== "") {
      arr = arr.filter((grant) => grant.low_income === selectedIncome);
    }

    if (selectedEnglishSL !== "") {
      arr = arr.filter((grant) => grant.esol === selectedEnglishSL);
    }
    if (selectedDuration !== "") {
      arr = arr.filter((grant) => grant.duration === selectedDuration);
    }

    setFilteredGrantList(() => arr);
  }, [
    grantList,
    selectedGender,
    selectedIndigenous,
    selectedVision,
    selectedIncome,
    selectedEnglishSL,
    selectedDuration,
  ]);

  // Filters useEffect end

  return (
    <div classNameName="main-background">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h1 id="filter-by-text">Filter by:</h1>
          <div id="filters">
            <FilterGender setSelectedGender={setSelectedGender} />
            <FilterIncome setSelectedIncome={setSelectedIncome} />
            <FilterDuration setSelectedDuration={setSelectedDuration} />
            <FilterIndigenous setSelectedIndigenous={setSelectedIndigenous} />
            <FilterVision setSelectedVision={setSelectedVision} />
            <FilterEnglishSL setSelectedEnglishSL={setSelectedEnglishSL} />
          </div>
          {filteredGrantList.length > 0 ? (
            <div id="grant-list">
              {filteredGrantList.map((grantData, key) => (
                <GrantCard key={key} grantData={grantData} />
              ))}
            </div>
          ) : (
            <h2 id="no-matches-message">
              Looks like we don't have any exact matches, try searching a
              different category that might be suitable for you!
            </h2>
          )}
        </div>
      )}
    </div>
  );
}

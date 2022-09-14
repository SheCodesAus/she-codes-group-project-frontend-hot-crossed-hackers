// import { useParams } from "react-router-dom"; use this to test dummy data
// import { allGrants } from "../data"; use this to test dummy data
import GrantCard from "../components/GrantCard/GrantCard";
import React, { useState, useEffect } from "react";
import FilterGender from "../components/FilterGender/FilterGender";
import FilterIndigenous from "../components/FilterIndigenous/FilterIndigenous";
import FilterVision from "../components/FilterVision/FilterVision";
import FilterIncome from "../components/FilterIncome/FilterIncome";
import FilterEnglishSL from "../components/FilterEnglishSL/FilterEnglishSL";
import FilterDuration from "../components/FilterDuration/FilterDuration";
import LoadingSpinner from "../components/LoadingSpinner";

function GrantsPage() {
  const [loading, setLoading] = useState(false)
  const [grantList, setGrantList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    setLoading(true)
    fetch(`${process.env.REACT_APP_API_URL}scholarships/`)
      .then((results) => {
        console.log(results);
        return results.json();
      })
      .then((data) => {
        setGrantList(data);
        setLoading(false)
      });
  }, []);

  // Filter useEffect start
  useEffect(() => {
    const filteredGrantList = grantList.filter(
      (grant) => grant.gender === selectedCategory
    );
    setGrantList(() => filteredGrantList);
  }, [selectedCategory]);

  useEffect(() => {
    const filteredGrantList = grantList.filter(
      (grant) => grant.indigenous_status === selectedCategory
    );
    setGrantList(() => filteredGrantList);
  }, [selectedCategory]);

  useEffect(() => {
    const filteredGrantList = grantList.filter(
      (grant) => grant.vision_impairment === selectedCategory
    );
    setGrantList(() => filteredGrantList);
  }, [selectedCategory]);

  useEffect(() => {
    const filteredGrantList = grantList.filter(
      (grant) => grant.low_income === selectedCategory
    );
    setGrantList(() => filteredGrantList);
  }, [selectedCategory]);

  useEffect(() => {
    const filteredGrantList = grantList.filter(
      (grant) => grant.esol === selectedCategory
    );
    setGrantList(() => filteredGrantList);
  }, [selectedCategory]);

  useEffect(() => {
    const filteredGrantList = grantList.filter(
      (grant) => grant.duration === selectedCategory
    );
    setGrantList(() => filteredGrantList);
  }, [selectedCategory]);

  // Filters useEffect end

  return (
    <div className="main-background">
    {loading ? <LoadingSpinner /> : <div>
      <div id="filters">
        <FilterGender setSelectedCategory={setSelectedCategory} />
        <FilterIndigenous setSelectedCategory={setSelectedCategory} />
        <FilterVision setSelectedCategory={setSelectedCategory} />
        <FilterIncome setSelectedCategory={setSelectedCategory} />
        <FilterEnglishSL setSelectedCategory={setSelectedCategory} />
        <FilterDuration setSelectedCategory={setSelectedCategory} />
      </div>
      <div id="grant-list">
        {grantList.map((grantData, key) => {
          return <GrantCard key={key} grantData={grantData} />;
        })}
      </div>
    </div>
  }</div>
  );
}
export default GrantsPage;

// use the function below to test dummy data
// function GrantsPage() {
//     return (

//         <div>
//             <div id="h1-home">
//                 <h1>Grants</h1>
//             </div>
//             <div id="grant-list">
//             {allGrants.map((grantData, key) => {
//             return <GrantCard key={key} grantData={grantData} />;
//             })}
//             </div>

//         </div>
//     );

// }
// export default GrantsPage;

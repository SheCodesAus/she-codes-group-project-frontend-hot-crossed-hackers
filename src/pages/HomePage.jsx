import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
    return (
        <div id="project-list">
        {allProjects.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} />;
    })}
    </div>
    );
}
    



// function to get projects from the API below

// function HomePage() {
//     const [projectList, setProjectList] = useState([]);

//     useEffect(() => {
//         fetch(`${process.env.REACT_APP_API_URL}projects`)
//         .then((results) => {
//         return results.json();
//         })
//         .then((data) => {
//         setProjectList(data);
//         });
//         },[]);

//     return (
//         <div id= "project-list">
//         {projectList.map((projectData, key) => {
//         return <ProjectCard key={key} projectData={projectData} />;
//         })}
//         </div>
//     );
// }

export default HomePage;
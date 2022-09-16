import React from "react";
import "./GrantDetails.css";

function GrantDetails(props) {
  const { grantData } = props;

  return (
    <div className="details-container">
      <img id="details-image" src={grantData.image} alt="grant" />
      <p id="main-title">{grantData.title}</p>
      <ul>
        <li>Organisation: {grantData.organisation}</li> <br></br>
        <li>Description: {grantData.description}</li>
        <br></br>
        <li>Eligibility: {grantData.eligibility}</li>
        <br></br>
        {/* <a href={grantData.url}>
          <li>More information at: {grantData.url}</li>
        </a> */}
        {/* <button onClick={handleSave} className="save-btn" >SAVE</button>
            <button onClick={handleDelete} className="save-btn" >UNSAVE</button> */}
        <br></br>
      </ul>
    </div>
  );
}

export default GrantDetails;

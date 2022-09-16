import React from "react";
import { Link } from "react-router-dom";
import "./GrantCard.css";
function GrantCard(props) {
    const { grantData } = props;
    return (
        <div className="grant-card">
            <Link to={`/grant/${grantData.id}`}>  <img src={grantData.image} className='w-100 hover-shadow' alt="grant" /></Link>
            <h3 className="grant-title">{grantData.title}</h3>
            <h4 className="date"> Closing date: {new Date(grantData.closing_date).toDateString()}</h4>
            {/* <h4 className="description" >{grantData.description}</h4> */}
            {/* <div className ="card-CTA"> */}
            <Link to={`/grant/${grantData.id}`}>
                <h4 className="see-more-btn">
                    See more
                </h4>
            </Link>
            <button className="save-btn" >SAVE</button>
            {/* </div> */}
        </div >
    );
}

export default GrantCard;
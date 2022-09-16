import React from "react";
// import { useNavigate } from 'react-router-dom'
import "./UserProfile.css";



const UserProfile = () => {
    return (
        <form className="User-Profile">
            <div>
                <h2>Welcome!</h2>
            </div>
            <div>
                <p>Your Profile</p>
            </div>

            <div>
                <input
                    type="email"
                    id="email"
                    className="email"
                    placeholder="Email"
                // onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="password"
                    id="password"
                    className="password"
                    placeholder="Password"
                // onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn">
                Create Account
            </button>
        </form>
    );
}
export default UserProfile;
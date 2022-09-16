import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./SignUpForm.css";


function SignUpForm() {
const navigate = useNavigate()
const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: ""
    
});

const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value,
    }));
};

const postData = async () => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}users/`,
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        }
    );
    return response.json()
};


const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password && credentials.email) {
        postData().then((response) => {
            console.log("signup response data: ... ", credentials.username)
            navigate("/login");
        });
        
    }
}
    return (
        <form className="form-box">
            <div>
                <h2>Create an account to apply</h2>
            </div>
            <div>
                <p>Start your journey today by applying to your favourite scholarships</p>
            </div>
            <div>
                <input
                    type="text"
                    id="username"
                    className="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="email"
                    id="email"
                    className="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="password"
                    id="password"
                    className="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn" onClick={handleSubmit}>
                Create Account
            </button>
        </form>
    );
}
export default SignUpForm;
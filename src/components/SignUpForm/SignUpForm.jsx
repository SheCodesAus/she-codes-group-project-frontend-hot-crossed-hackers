import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./SignUpForm.css";



const SignUpForm = () => {
    const navigate = useNavigate()
    const [newcredentials, setNewCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setNewCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const postData = async () => {
        console.log("New user")
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}users/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newcredentials),
        }
        );
        return response.json();
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (newcredentials.email && newcredentials.password) {
            postData().then((response) => {
                navigate("/Login");
            });
        }
    };


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
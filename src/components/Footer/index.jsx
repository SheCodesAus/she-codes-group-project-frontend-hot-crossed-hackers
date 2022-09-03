import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../logo.png";
// import Container from "../Container";
import "./styles.css";

export default function Footer() {
    const navigate = useNavigate();
    const loginStatus = window.localStorage.getItem("login");
    const userId = window.localStorage.getItem("user_id");

    return (
        <footer>
            {/* <div className="footer-nav">
                <div className="branding-section">
                    <img src={Logo} alt="ScholarshipPro_logo" className="footer-logo" />
                    <p>
                        Add
                    </p>
                </div>
                <nav className="nav-section">
                    <div>
                        {!loginStatus ? (
                            <>
                                <p className="nav-section-title">Get Started</p>
                                <div className="nav-section-menu">
                                    <Link to="/login" className="nav-section-menu-item">
                                        Login
                                    </Link>
                                    <Link to="/login" className="nav-section-menu-item">
                                        Sign up
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="nav-section-title">Start Exploring</p>
                                <div className="nav-section-menu">
                                    <Link to={`/profile/${userId}`}>Profile</Link>
                                    <Link to="/create-project">Create Project</Link>
                                    <p
                                        onClick={() => {
                                            localStorage.clear();
                                            navigate("/");
                                            window.location.reload();
                                        }}
                                    >
                                        Log out
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="nav-section-follow-us">
                        <p className="nav-section-title">Add</p>
                        <div></div>
                    </div>
                </nav>
            </div> */}
            <div className="breakline"></div>
            <div className="footer-copyright">
                <p>{`© ${new Date().getFullYear()} ScholarshipPro All rights reserved.`}</p>
                <p>
                    <span>XX</span> ScholarshipPro
                </p>
            </div>
        </footer>
    );
}
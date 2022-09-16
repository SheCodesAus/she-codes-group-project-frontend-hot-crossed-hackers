import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    const [isMobile, setIsMobile] = useState(true);
    const location = useLocation()
    console.log(location);
    const [loggedIn, setLoggedIn] = useState(!!window.localStorage.getItem('token'));
    const logOut = () => {
        window.localStorage.removeItem("token");
        setLoggedIn(false)
    }

    React.useEffect(() => {
        setLoggedIn(!!window.localStorage.getItem('token'))
    }, [location]
    )

    const username = window.localStorage.getItem("username")
    const [userData, setUserData] = useState("");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${username}`)
            .then(res => res.json())
            .then(data => { setUserData(data); console.log(data) })
    }, [username])



    return (
        <nav className="nav-bar">
            <div className="left-menu">
                <Link to="/"><div /> <img className="logo" src={require('./logo.png')} alt="logo" /></Link>
            </div>
            <div img className={isMobile ? "right-menu-mobile" : "right-menu"}
                onClick={() => setIsMobile(false)}>
                <Link className="button" to="/grants">Scholarships</Link>
                {loggedIn ? (
                    <Link className="button" to="/" onClick={logOut}>Logout</Link>)
                    : (<Link className="button" to="/login">Log in</Link>)}
                {loggedIn ? (
                    <Link className="button" to={"/users/"+userData.id}>Account</Link>)
                    : (<Link className="button" to="/Signup">Sign up</Link>)}
            </div>
            <button className="mobile-menu-icon"
                onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (
                    <i className="fas fa-times"></i>
                ) : (
                    <i className="fa fa-bars"></i>
                )}
            </button>
        </nav>
    );
}


export default Nav;
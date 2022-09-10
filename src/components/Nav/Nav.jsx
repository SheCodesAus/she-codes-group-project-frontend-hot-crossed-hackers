import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Nav.css'

const Nav = () => {
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

    const handleClick = event => {
        event.currentTarget.classList.toggle('hamburger-menu');
        event.currentTarget.classList.remove('hamburger-menu');
    };

    return (
        <nav className="nav-bar">
            <div className="left-menu">
                <Link to="/"><div className="logo" /> <img src={require('./logo.png')} alt="logo" /></Link>
            </div>
            <div className="right-menu">
                <Link className="button" to="/grants">Scholarships</Link>
                {loggedIn ? (
                    <Link className="button" to="/" onClick={logOut}>Logout</Link>)
                    : (<Link className="button" to="/login">Log in</Link>)}
                {loggedIn ? (
                    <Link className="button" to="/Account">Account</Link>)
                    : (<Link className="button" to="/Signup">Sign up</Link>)}
            </div>
            <div className="hamburger-menu" onClick={handleClick}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
}


export default Nav;
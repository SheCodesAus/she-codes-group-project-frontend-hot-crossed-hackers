import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {
    return (
        <nav>
            <div>
                <Link to="/"><img className="logo" src="../src/Images/logo.png" alt="logo"></img></Link>
            </div>
            <ul>
                <li>
                    <Link to="grants"> Grants</Link>
                </li>
                <li>
                    <Link to="login"> Log in</Link>
                </li>
                <li>
                    <Link to="Signup"> Sign up</Link>
                </li>
            </ul>
        </nav >
    );
}

export default Nav;
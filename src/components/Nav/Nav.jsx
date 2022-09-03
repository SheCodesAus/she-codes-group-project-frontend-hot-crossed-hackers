import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {
    return (
        <nav>
            <div>
                <Link to="/"><img src={process.env.PUBLIC_URL + '/logo.png'} className="logo" alt="logo"></img></Link>
            </div>
            <ul>
                <li>
                    <Link to="grants"> Grants</Link>
                </li>
                <li>
                    <Link to="login" className="loginbtn"> Log in</Link>
                </li>
                <li>
                    <Link to="Signup"> Sign up</Link>
                </li>
            </ul>
        </nav >
    );
}

export default Nav;
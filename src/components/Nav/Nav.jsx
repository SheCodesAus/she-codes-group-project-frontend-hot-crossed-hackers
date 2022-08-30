import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/"> Home </Link>
            <Link to="login"> Login</Link>
            <Link to="grants"> Grants</Link>
        </nav>
    );
}

export default Nav;
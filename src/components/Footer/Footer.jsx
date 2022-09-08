import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div>
                <Link to="/"><div className="footer" /></Link>
            </div>
            <ul className="footer.titles">
                <li>
                    <Link to="Contact"> Contact us</Link>
                </li>
                <li>
                    <Link to="Signup"> Sign up</Link>   
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
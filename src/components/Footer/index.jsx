import React from "react";
import "./styles.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="breakline"></div>
            <div className="footer-copyright">
                <p>{`© ${new Date().getFullYear()} ScholarshipPro All rights reserved.`}</p>
                <p>
                    Scholarship Pro
                </p>
            </div>
        </footer>
    );
}
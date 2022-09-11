import React from 'react';
import "./PageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return <section id="not-found">
        <div class="circles">
            <p>404<br></br>
                <small>PAGE NOT FOUND</small>
            </p>
            <span class="circle big"></span>
            <span class="circle med"></span>
            <span class="circle small"></span>
        </div>
    </section>
}

export default PageNotFound;
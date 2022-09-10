// import React, { useState } from "react";
// // import { renderIntoDocument } from "react-dom/test-utils";
// import { Link } from "react-router-dom";
// import './Nav.css'

// function Nav() {

//     function logOut() {
//         window.localStorage.removeItem('token');
//     }
//     return (
//         <nav>
//             <div>
//                 <Link to="/"><div className="logo" /> <img src={require('./logo.png')} alt="logo" /></Link>
//             </div>
//             {window.localStorage.getItem('token') ?
//                 <> <Link className="button" to="/grants">Scholarships </Link>
//                     <Link className="button" to="/" onClick={logOut}>Logout</Link>
//                 </>
//                 : <>
//                     <Link className="button" to="/Signup">Sign up </Link>
//                     <Link className="button" to="/Login">Log in </Link></>
//             }
//         </nav >
//     );
// }


// export default Nav;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Nav.css'


function Nav() {
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
            </nav>
        );
    }
}

export default Nav;
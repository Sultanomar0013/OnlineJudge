import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import "./css/Navbar.css";
import { GiBlackBook } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useLoggedIn } from "../Hooks/useLoggedIn";
import { decodeToken } from "../Hooks/jwtDecode";

function Navbar() {
    const { loggedIn, setLoggedIn } = useLoggedIn();
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const token = localStorage.getItem("token");
    const [userRole, setUserRole] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        if (token) {
            const decodedToken = decodeToken(token);
            if (decodedToken && decodedToken.selectedRole) {
                setUserRole(decodedToken.selectedRole);
            }
            console.log("Decoded Token:", decodedToken);
            console.log("User Role:", userRole);
        }
    }, [token]);

    function handleSignOut() {
        console.log("Sign-out clicked");
        localStorage.removeItem("token");
        setLoggedIn(false);

    }

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo">
                            <GiBlackBook className="navbar-icon" onClick={closeMobileMenu} />
                            Online Judge
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Home
                                </NavLink>
                            </li>

                            {loggedIn && (
                                <>
                                    {userRole === "Teacher" && (
                                        <>
                                            <li className="nav-item">
                                                <NavLink
                                                    to="/problem"
                                                    className={({ isActive }) =>
                                                        "nav-links" + (isActive ? " activated" : "")
                                                    }
                                                >
                                                    Problem Set
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink
                                                    to="/teacherexam"
                                                    className={({ isActive }) =>
                                                        "nav-links" + (isActive ? " activated" : "")
                                                    }
                                                >
                                                    Set Exam
                                                </NavLink>
                                            </li>
                                        </>
                                    )}

                                    {userRole === "Student" && (
                                        <>
                                            <li className="nav-item">
                                                <NavLink
                                                    to="/problem"
                                                    className={({ isActive }) =>
                                                        "nav-links" + (isActive ? " activated" : "")
                                                    }
                                                >
                                                    Problem Set
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink
                                                    to="/exam"
                                                    className={({ isActive }) =>
                                                        "nav-links" + (isActive ? " activated" : "")
                                                    }
                                                >
                                                    Examination
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink
                                                    to="/studentexam"
                                                    className={({ isActive }) =>
                                                        "nav-links" + (isActive ? " activated" : "")
                                                    }
                                                >
                                                    Examination Start
                                                </NavLink>
                                            </li>
                                        </>
                                    )}

                                    <li className="nav-item hello">
                                        <Link
                                            to="/"
                                            style={{
                                                textDecoration: 'none',
                                                color: '#fff',
                                                fontWeight: 'bold',
                                                transition: 'all 0.3s ease',
                                                // Add any other styles you need
                                            }}
                                            onClick={handleSignOut}
                                        >
                                            SignOut
                                        </Link>
                                    </li>
                                </>
                            )}

                            {!loggedIn && (
                                <>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/signin"
                                            className={({ isActive }) =>
                                                "nav-links" + (isActive ? " activated" : "")
                                            }
                                        >
                                            SignIn
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/signup"
                                            className={({ isActive }) =>
                                                "nav-links" + (isActive ? " activated" : "")
                                            }
                                        >
                                            SignUp
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;



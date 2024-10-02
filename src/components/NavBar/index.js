import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <ul className="nav nav-fill">
            <li className="nav-item">
                <Link className="nav-link b david" to="/">
                    David Oyeyemi
                </Link>
            </li>
            <li className="nav-item b">
                <Link className="nav-link" to="/">
                    Home
                </Link>
            </li>
            <li className="nav-item b">
                <Link className="nav-link" to="/about">
                    About Me
                </Link>
            </li>
            <li className="nav-item b">
                <Link className="nav-link" to="/project">
                    Projects
                </Link>
            </li>
            <li className="nav-item contact">
                <Link className="nav-link" to="/contact">
                    Contact
                </Link>
            </li>
        </ul>
    );
}

export default NavBar;
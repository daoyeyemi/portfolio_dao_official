import "../Main/style.css";

import { Link } from "react-router-dom";
import React from "react";
import logo from "../Main/IMG_8144.JPG";
import logo1 from "../Main/github.png";
import logo2 from "../Main/linkedin.png";

function Main() {
    return (
        <div id="main">
            <img className="drunklee" id="drunklee" src={logo} alt="..." /> 
            <p>The David Oyeyemi Portfolio</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/about">
                            <i class="fas fa-user-circle"></i>
                        </Link>
                        <Link to="/about" className="iconCaption" style={{ textDecoration: 'none' }}>
                            About Me
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/project">
                            <i className="fas fa-file"></i>
                        </Link>
                        <Link to="/project" className="iconCaption" style={{ textDecoration: 'none' }}>
                                 See My Work
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/contact">
                            <i class="fas fa-comment-dots"></i>
                        </Link>
                        <Link to="/contact" className="iconCaption" style={{ textDecoration: 'none' }}>
                                Contact Me
                        </Link>
                    </div> 
                </div>
                <div id="footer">
                    <a href={"https://github.com/daoyeyemi"} target={"_blank"}><img id="img1" src={logo1} alt="..."></img></a>
                    <a href={"https://linkedin.com/in/david-oyeyemi-035689103"} target={"_blank"}><img id="img2" src={logo2} alt="..."></img></a>   
                </div>
            </div>
        </div>
    )
}

export default Main;
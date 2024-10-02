import "./style.css";

import React, { useState } from "react";

import { Link } from "react-router-dom";
import logo from "./IMG_8153.JPG";
import logo1 from "./github.png";
import logo2 from "./linkedin.png";

function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img width="300px" height="350px" id="image" src={logo} alt="..." />
                    </div>
                    <div className="col-md-8">
                            <p className="bigDaddy">David Oyeyemi</p>
                            <p id="bio">
                                I'm a full-stack software developer with background in physics and computer science based 
                                in Carson, California. I'm all about improving, learning, & challenging myself.
                                Let's work together.
                            </p>
                    </div>
                </div>
            </div>
                <div id="footer">
                    <a href={"https://github.com/daoyeyemi"} target={"_blank"}><img id="img1" src={logo1} alt="..."></img></a>
                    <a href={"https://linkedin.com/in/david-oyeyemi-035689103"} target={"_blank"}><img id="img2" src={logo2} alt="..."></img></a>   
                </div>
            </div>
    )
}

export default AboutMe;
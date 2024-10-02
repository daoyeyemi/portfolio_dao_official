import "./style.css";

import React from "react";
import ers_pyqt from "../../../src/downloads/ers_pyqt.zip"
import logo1 from "../Main/github.png";
import logo2 from "../Main/linkedin.png";
import oyedaEcom from "../ProjectCollect/oyedaEcom.png";
import screenshot1 from "../ProjectCollect/ers_screenshot.png";

function ProjectCollect() {
    return (
        <div>
            <h1>My Projects</h1>
            <div className="container">            
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <a href={ers_pyqt} download="ers_pyqt.zip">
                            <img src={screenshot1} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">emotion recognition system</h5>
                            <p className="card-text">An advanced artificial intelligence-based application able to identify and analyze human emotions in real-time using video footage. 
                                Utilizes machine learning and computer vision with the help of Tensorflow for training of convolutional neural network model. Stores emotion history and 
                                allows users to track trends over time. Performs regression analysis based on user history data to predict emotions of users at certain times.
                                Made possible through use of Python programming language and PyQt5 framework. Download project using project below and follow <i>ers_installation_manual.docx</i> in <strong>ers_pyqt</strong> folder.
                                For macOS users only.
                            </p>
                            <p className="card-text"><small className="text-muted">September 26, 2024 </small></p>
                            <a href={ers_pyqt} download="ers_pyqt.zip">
                                <i class="fa fa-download download-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <a href={"https://oyeda-ecom-9c840fa41f1f.herokuapp.com/"} target={"_blank"}>
                            <img src={oyedaEcom} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">oyedaEcom</h5>
                            <p className="card-text">
                                An e-commerce application that allows users to shop for all the latest sneaker apparel. 
                                Made possible using Python programming language and Django framework. 
                                Contains user authentication and login functionality.
                                Stores user data and transaction history using SQLite3. Deployed on Heroku.
                            </p>
                            <p className="card-text"><small className="text-muted">December 7, 2021</small></p>
                        </div>
                    </div>
                </div>
                {/* <div className="col">
                    <div className="card">
                        <a href={"https://share.streamlit.io/daoyeyemi/nbadata/data.py"} target={"_blank"}>
                            <img src={nbadataproject} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">NBA Data Science Application</h5>
                            <p className="card-text">
                                A data science web application that displays NBA players' stats from every season from 1951 to 2020.
                                Showcases data for top 100 players in points per game in season while displaying a graph that illustrates effective field goal percentage and points per game in y and x axis respectively.
                                Made possible through Python programming language, Streamlit, and BasketballReference.com.
                            </p>
                            <p className="card-text"><small className="text-muted">December 20, 2021</small></p>
                        </div>
                    </div>
                </div> */}
                <br></br><br></br>
            </div>    
        </div>                
            <div id="footer">
                <a href={"https://github.com/daoyeyemi"} target={"_blank"}><img id="img1" src={logo1} alt="..."></img></a>
                <a href={"https://linkedin.com/in/david-oyeyemi-035689103"} target={"_blank"}><img id="img2" src={logo2} alt="..."></img></a>   
            </div>
        </div>
    )
}

export default ProjectCollect;
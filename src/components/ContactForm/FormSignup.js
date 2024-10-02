import React, { useState } from "react";
import "./style.css";
import logo1 from "./github.png";
import logo2 from "./linkedin.png";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import swal from 'sweetalert';



const FormSignup = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    function resetMyG() {
        document.getElementById("contact-form").reset()
    }

    function sendEmail(e) {  
         
            e.preventDefault();
            
            emailjs.sendForm('service_en5uzb6', 'template_h6cpy4o', e.target, 'user_t0OmTdjcm6TsP8MpRnmHY')
            .then((result) => {
                console.log(result.text);
                    swal({
                        title: "Thank you!",
                        text: "Your message has been sent. I will get back to you as soon as possible.",
                        icon: "success",
                        button: true
                    });     
                    resetMyG()
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            <h1>Contact Me</h1>
                <form id="contact-form" onSubmit={sendEmail}>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="text" name="name" id="form-control" className="form-control" id="exampleFormControlInput1" placeholder="Input name here" required/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label><p className="optional"></p>
                        <input type="email" name="email" id="form-control" className="form-control" id="exampleFormControlInput1" placeholder="Input email here" required/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Message</label><p className="optional"></p>
                        <textarea name="message" id="form-control" className="form-control" id="exampleFormControlTextarea1" placeholder="Input message here" rows="8" required></textarea>
                    </div>
                    <div className="button">
                    <input type="submit" className="btn btn-warning" value="Submit"></input>
                    </div>
                    <div id="footer">
                        <a href={"https://github.com/daoyeyemi"}><img id="img1" src={logo1} alt="..."></img></a>
                        <a href={"https://linkedin.com/in/david-oyeyemi-035689103"}><img id="img2" src={logo2} alt="..."></img></a>   
                    </div>
            </form>            
        </div>
    )
}

export default FormSignup;
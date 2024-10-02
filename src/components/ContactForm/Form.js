import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
// import submitForm from ""

const Form = () => {
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    // function submitForm() {
    //     setIsSubmitted(true);
    // } 
    return (
        <div>
            {!isSubmitted ? <FormSignup /> : <FormSuccess />}
        </div>
    )
}

export default Form; 
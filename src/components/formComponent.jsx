import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstnameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);   
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstnameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstnameError("First Name must be 3 characters or longer!");
        }else{
            setFirstnameError("")
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastnameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastnameError("Lasr Name must be 2 characters or longer!");
        }else{
            setLastnameError("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        }else{
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        }else{
            setPasswordError("")
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordError("Password and Confirm Password must match!");
        }
    }

    // const formMessage = () => {
    //     if( hasBeenSubmitted ) {
    //         return "Thank you for submitting the form!";
    //     } else {
    //         return "Welcome, please submit the form";
    //     }
    // }

    return(
        <div>
            <form onSubmit={ createUser }>
                {
                    hasBeenSubmitted ?
                    <h3>Thank you for submitting the form!</h3>:
                    <h3>Welcome, please sumbit the form</h3>
                }
                <div>
                    <label>First Name: </label> 
                    <input type="text" name="firstName" onChange={ handleFirstName } />
                    {
                        firstNameError ?
                        <p style={{color:'red'}}>{ firstNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" name="lastName" onChange={ handleLastName } />
                    {
                        lastNameError ?
                        <p style={{color:'red'}}>{ lastNameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" name="email" onChange={ handleEmail } />
                    {
                        emailError ?
                        <p style={{color:'red'}}>{ emailError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={ handlePassword } />
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{ passwordError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" name="confirmPassword" onChange={ handleConfirmPassword } />
                    {
                        confirmPasswordError ?
                        <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            {/* <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p> */}
        </div>
    );
};
    
export default UserForm;
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import PWDRequisite from './PWDRequisite';
import { userCredentials } from './utils';

function Forgotpassword() {

    const [email, setEmail] = useState(''); // saves the current email id entered by the user
    const [error, setError] = useState(false); // if email is not inputted then error is set to true
    const [invalidError, setInvalidError] = useState(false); // if user inputs an invalid email format then error is set to true
    const [emailNotFoundError, setEmailNotFoundError] = useState(false); //if a non registered user tries to input an email then error is set to true
    const [password, setPassword] = useState('');// saves the current password enteres by the user
    const [validatepass, setValidatepass] = useState(false); // if submit or foucs occurs only then the password is further checked if it is strong or not 
    const [pwdcheck, setPwdcheck] = useState({
        capcheck: false,
        lengthcheck: false,
        numcheck: false,
        splcharcheck: false,
    }); // chesks the strength of the password
    const values = Object.values(userCredentials)
    const emails = values.map(valuesList => valuesList[0])
    const navigate = useNavigate();
    const handleOnFocus = () => {
        setValidatepass(true); // on focus it checks pasword strength
    };
    const handleOnBlur = () => {
        setValidatepass(false);
    };
    const handleOnKeyUp = (e) => {
        const value = e.target.value;
        const capcheck = /[A-Z]/.test(value);
        const lengthcheck = value.length >= 8;
        const numcheck = /[0-9]/.test(value);
        const splcharcheck = /[!@#$%^&*()]/.test(value);
        setPwdcheck({
            capcheck,
            lengthcheck,
            numcheck,
            splcharcheck,
        });// set of rules that needs to be true for a password to be strong.

    }

    // Email validation
    const isValidEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email); // regular expression to check if the inputted email is in valid format.
        if (!emailRegex) {
            setInvalidError(true);
        } else {
            setInvalidError(false);// if inputted format of the email is vcalid then check if the email belongs to a registed user else raise an error
           
            if (emails.includes(email)) {
                setEmailNotFoundError(false);
            } else {
                setEmailNotFoundError(true);
            }
        }
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError(true); // if email is not entered then raise an error
        } else {
            setError(false);
            isValidEmail();// valid email check
            console.log(emailNotFoundError);
            if (
                pwdcheck.capcheck &&
                pwdcheck.lengthcheck &&
                pwdcheck.numcheck &&
                pwdcheck.splcharcheck &&
                email && emails.includes(email)
            ) {
                // Password and email are verified then, continue with form submission 
                navigate('/Verified');
            } else {

                setValidatepass(true);


            }
        }
    };

    const handleAlertClose = () => {
        setError(false);
        setInvalidError(false);
        setEmailNotFoundError(false);
        setPwdcheck({
            capcheck: false,
            lengthcheck: false,
            numcheck: false,
            splcharcheck: false,
        }); // on close all these states are set to false only then on re-clicking the submit button the error will be raised else the error is not raised due to the previous state that is maintaine during the session.
    };
    return (
        <div className="login-form-container">
            <form>
                <h1 text-align="center">Set New Password</h1>
                <br />
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label text="bold">Email:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Email Address"
                        value={email}
                        onChange={handleChange}
                    />
                </Form.Group>
                {error && (
                    <Alert variant="danger" onClose={handleAlertClose} dismissible>
                        <Alert.Heading>Oh snap!</Alert.Heading>
                        <p>Please enter an email address</p>
                    </Alert>
                )}
                {invalidError && (
                    <Alert variant="danger" onClose={handleAlertClose} dismissible>
                        <Alert.Heading>Oh snap!</Alert.Heading>
                        <p>Please enter a valid format for the email address</p>
                    </Alert>
                )}
                {emailNotFoundError && (
                    <Alert variant="danger" onClose={handleAlertClose} dismissible>
                        <Alert.Heading>Oh snap!</Alert.Heading>
                        <p>User not found</p>
                    </Alert>
                )}
                <Form.Group className="mb-4" controlId="formBasicPassword1">
                    <Form.Label>New Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter a New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={handleOnFocus}
                        onBlur={handleOnBlur}
                        onKeyUp={handleOnKeyUp}
                    />
                </Form.Group>
                <div>
                    {/* on setting the validatepass state variable the PWDRequisite page is called along with valid and invalid flags  */}
                    {validatepass ? (
                        <PWDRequisite
                            capflag={pwdcheck.capcheck ? "valid" : "invalid"}
                            lenflag={pwdcheck.lengthcheck ? "valid" : "invalid"}
                            numflag={pwdcheck.numcheck ? "valid" : "invalid"}
                            splflag={pwdcheck.splcharcheck ? "valid" : "invalid"}
                        />) : null}
                </div>
                <div className="button-container">
                    <Button type="submit" variant="primary" onClick={handleSubmit}>
                        Change
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Forgotpassword;

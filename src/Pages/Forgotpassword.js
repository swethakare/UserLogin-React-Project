import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import PWDRequisite from './PWDRequisite';
import { userCredentials } from './utils';

function Forgotpassword(userCredentials) {
    console.log(userCredentials);
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [invalidError, setInvalidError] = useState(false);
    const [emailNotFoundError, setEmailNotFoundError] = useState(false);
    const [password, setPassword] = useState('');
    const [validatepass, setValidatepass] = useState(false);
    const [pwdcheck, setPwdcheck] = useState({
        capcheck: false,
        lengthcheck: false,
        numcheck: false,
        splcharcheck: false,
    });
    const navigate = useNavigate();
    const handleOnFocus = () => {
        setValidatepass(true);
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
        });

    }

    // Email validation
    const isValidEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        if (!emailRegex) {
            setInvalidError(true);
        } else {
            setInvalidError(false);
            const values = Object.values(userCredentials)
            const emails = values.map(valuesList => valuesList[0])
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
            setError(true);
        } else {
            setError(false);
            isValidEmail();
            if (
                pwdcheck.capcheck &&
                pwdcheck.lengthcheck &&
                pwdcheck.numcheck &&
                pwdcheck.splcharcheck &&
                email
            ) {
                // Password is valid, continue with form submission or additional actions
                navigate('/Verified');
            } else {
                setValidatepass(true);
            }
        }
    };

    const handleAlertClose = () => {
        setError(false);
        setInvalidError(false);
        setPwdcheck({
            capcheck: false,
            lengthcheck: false,
            numcheck: false,
            splcharcheck: false,
        });
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

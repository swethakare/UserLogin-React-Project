import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { userCredentials } from './utils';
// userCredentials contains a few hardcoded values of users along with their email id and password
const LoginForm = () => {
  const [username, setUsername] = useState(''); // saves the current user name that has been inputted by the user
  const [password, setPassword] = useState(''); // saves the current password that has been entered by the user
  const [showError, setShowError] = useState(false); // if user name is not entered and on clicking the submit button then error occurs
  const [showInvalidError, setShowIError] = useState(false); // if user name and password soesnot exist in the userCredentials then raise an error.
  const [showButton, setShowButton] = useState(true); // it is set to hide the buttons when an error occurs
  const [showSuccess, setShowSuccess] = useState(false); // it is set to show sucess message on loggin in with vslid user id and password
  let navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setShowButton(false);
      setShowError(true);// if user id and password is null error vars are set and buttons are hidden
    } else if (Object.keys(userCredentials).includes(username) && password === userCredentials[username][1]) {
      setShowSuccess(true);
      setShowButton(false);
      alert("Login authenticated");// raises an alert message if user credentials are valid on successfull authorization

    } else {
      setShowButton(false);
      setShowIError(true);
    }
  };
  const handleAlertClose = () => {
    setShowError(false);
    setShowIError(false);
    setShowButton(true);
    // on close all these states are set to false only then on re-clicking the submit button the error will be raised else the error is not raised due to the previous state that is maintaine during the session.
  };
  return (
    <div className="login-form-container">
      <form>
        <h1 text-align="center"> User Login Form</h1><br></br>
        <Form.Group className="mb-4" controlId="formBasicUsername">
          <Form.Label text="bold">Username:</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        {/* if user clicks on login button without entring the username or password */}
        {showError && (
          <Alert variant="danger" onClose={handleAlertClose} dismissible>
            <Alert.Heading>Oh snap!</Alert.Heading>
            <p>Username or Password cannot be null</p>
          </Alert>
        )}

        {/* Invalid error message appears if user tries to input some oher password or username */}
        {showInvalidError && (
          <Alert variant="danger" onClose={handleAlertClose} dismissible>
            <Alert.Heading>Oh snap!</Alert.Heading>
            <p>Invalid Username/Password</p>
          </Alert>
        )}

        {/* an alert message appears when showSucess flag is set to true */}
        {showSuccess && (
          <Alert variant="success">
            <Alert.Heading>User Verified Successfully!</Alert.Heading>
          </Alert>
        )}

        <div className="button-container">
          {showButton && <Button type="submit" onClick={handleSubmit}>Login</Button>}
        </div>

        <div className="button-container">
          <Button type="submit" variant='primary' onClick={() => { navigate('/Forgotpassword') }}> Forgot Password</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { userCredentials } from './utils';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [showInvalidError, setShowIError] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFgButton, setShowFgButton] = useState(true);
  let navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setShowButton(false);
      setShowFgButton(false);
      setShowError(true);
    } else if (Object.keys(userCredentials).includes(username) && password === userCredentials[username][1]) {
      setShowSuccess(true);
      setShowButton(false);
      setShowFgButton(false);
      alert("Login authenticated");

    } else {
      setShowButton(false);
      setShowFgButton(false);
      setShowIError(true);
    }
  };
  const handleAlertClose = () => {
    setShowError(false);
    setShowIError(false);
    setShowButton(true); // Reset login buttons state to true after closing the error alert
    setShowFgButton(true); // Reset ForgotPassword buttons state to true after closing the error alert
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

        {/* username is user1, password is 123456; an alert message appears when showSucess flag is set to true */}
        {showSuccess && (
          <Alert variant="success">
            <Alert.Heading>User Verified Successfully!</Alert.Heading>
          </Alert>
        )}

        <div className="button-container">
          {showButton && <Button type="submit" onClick={handleSubmit}>Login</Button>}
        </div>

        <div className="button-container">
          {showFgButton && <Button type="submit" variant='primary' onClick={() => { navigate('/Forgotpassword') }}> Forgot Password</Button>}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

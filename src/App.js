
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { HashRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import LoginForm from './Pages/Loginform';
import Forgotpassword from './Pages/Forgotpassword';
import Verified from './Pages/Verified';
import './App.css';

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Forgotpassword" element={<Forgotpassword />} />
        <Route path="/Verified" element={<Verified />} />
      </Routes>
    </HashRouter>

  );

}

export default App;

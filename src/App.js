import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';  // Make sure the correct path is used for HomePage
import WelcomePage from './components/WelcomePage';  // Ensure you have this page component
import Login from './components/Login';
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Set HomePage as the first route */}
        <Route path="/welcome" element={<WelcomePage />} />  {/* Route to WelcomePage */}
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

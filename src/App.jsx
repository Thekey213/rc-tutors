// Assuming AuthProvider is defined in AuthProvider.jsx at src/firebase directory
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterForm from './pages/account/RegisterForm';
import LoginForm from './pages/account/LoginForm';
import Homepage from './pages/home/Homepage';
import AuthProvider from './firebase/AuthProvider'; 

function App() {
 return (
    <Router basename='rc-tutors'>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} /> 
          <Route path="/home" element={<Homepage />} />  
        </Routes>
      </AuthProvider>
    </Router>
 );
}

export default App;

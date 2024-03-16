import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterForm from './pages/account/RegisterForm';
import LoginForm from './pages/account/LoginForm';
import Homepage from './pages/home/Homepage';
import AuthProvider from './firebase/AuthProvider';
import Profile from './components/Profile';

function App() {
  return (
    <Router basename='rc-tutors'>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} /> 
          <Route path="/home" element={<Homepage />} />
          <Route path="/profile" element={<Profile fullName={"Azakhiwe Dilinga"} email={"azdilinga@gmail.com"} password={"wegotthis"} phone={"0660414374"} />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import RegisterForm from './pages/account/RegisterForm';
import LoginForm from './pages/account/LoginForm';
import Homepage from './pages/home/Homepage';
import Chat from './pages/Chat/Chat';
import AuthProvider from './firebase/AuthProvider';
import Profile from './components/Profile';
import ProtectedRoute from '../ProtectedRoute';

function App() {
 return (
    <Router basename='rc-tutors'>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} /> 
          {/* Protected routes */}
          <Route path="/home" element={<ProtectedRoute><Homepage /></ProtectedRoute>} />
          <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile fullName={"Azakhiwe Dilinga"} email={"azdilinga@gmail.com"} password={"wegotthis"} phone={"0660414374"} /></ProtectedRoute>} />
          {/* Redirect to login for other routes */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </AuthProvider>
    </Router>
 );
}

export default App;

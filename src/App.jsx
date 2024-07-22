import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterForm from './pages/account/RegisterForm';
import LoginForm from './pages/account/LoginForm';
import Homepage from './pages/home/Homepage';
import Chat from './pages/Chat/Chat';
import { AuthContext } from './firebase/AuthProvider';
import Profile from './pages/profile/Profile';
import ProtectedRoute from '../ProtectedRoute';
import EditProfile from './pages/profile/EditProfile';
import Tutors from './pages/tutors/Tutors';
import dummyData from './pages/tutors/dummyData.json';
import TutorDetails from './pages/tutors/TutorDetails';
import Calendar from './pages/schedule/Calendar';

function App() {
  const { user, loading } = useContext(AuthContext) || {}; // Provide default value for user object

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router basename='rc-tutors'>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/calendar" element={<Calendar />} />
        
        {/* Protected routes */}
        <Route path="/home" element={<ProtectedRoute><Homepage /></ProtectedRoute>} />
        <Route path="/chat" element={<ProtectedRoute><Chat userId={user?.uid} /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/edit" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
        <Route path="/tutors" element={<ProtectedRoute><Tutors tutorModules={dummyData} /></ProtectedRoute>} />
        <Route path="/tutor/:tutorName" element={<ProtectedRoute><TutorDetails tutorModules={dummyData} /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './src/firebase/AuthProvider'; // Adjust import path as necessary

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext) || {};

  // Show a loading state if authentication status is being determined
  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if the user is authenticated
  const isAuthenticated = user;

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If authenticated, render the children
  return children;
};

export default ProtectedRoute;

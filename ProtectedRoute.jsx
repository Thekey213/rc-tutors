import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './src/firebase/AuthProvider'; // Adjust the import path as necessary

const ProtectedRoute = ({ children }) => {
 const authContext = useContext(AuthContext);

 useEffect(() => {
    // Check if authContext is null or undefined
    if (!authContext) {
      console.error('AuthContext is not available. Ensure AuthProvider is wrapping the component tree.');
    }
 }, [authContext]);

 // Check if the user is authenticated
 const isAuthenticated = authContext && authContext.user;

 if (!isAuthenticated) {
    console.log('User is not authenticated. Redirecting to login page.');
    return <Navigate to="/login" />;
 }

 // If the user is authenticated, render the children components
 return children;
};

export default ProtectedRoute;

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './src/firebase/AuthProvider'; 

function ProtectedRoute({ children }) {
 
 const auth = useContext(AuthContext);

 
 if (!auth.user) {
   
    return <Navigate to="/login" />;
 }
 

 return children;
}

export default ProtectedRoute;

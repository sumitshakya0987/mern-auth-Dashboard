import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  const isTokenValid = () => {
    if (!token) return false;
    try {
      const { exp } = jwtDecode(token);
      return exp * 1000 > Date.now(); // true if token is valid
    } catch (err) {
      return false;
    }
  };

  return isTokenValid() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;


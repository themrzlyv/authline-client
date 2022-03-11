import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute';
import ProtectedRoute from '../../components/ProtectedRoute';
import Login from './pages/Login';
import Registration from './pages/Registration';

const Auth = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        }
      />
      <Route
        path="/registration"
        element={
          <PrivateRoute>
            <Registration />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Auth;

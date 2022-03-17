import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../../components/ProtectedRoute';
import Registration from './pages/Registration';

const Auth = () => {
  return (
    <Routes>
      <Route
        path="/registration"
        element={
          <ProtectedRoute>
            <Registration />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Auth;

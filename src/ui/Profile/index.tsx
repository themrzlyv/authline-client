import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute';
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';

const ProfilePage = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/update"
        element={
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default ProfilePage;

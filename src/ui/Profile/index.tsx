import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute';
import NotFound from '../NotFound';
import ProfileLayout from './components/ProfileLayout';
import Profile from './pages/Profile';
import ProfilePosts from './pages/ProfilePosts';
import ProfileStatistics from './pages/ProfileStatistics';

const ProfilePage = () => {
  return (
    <ProfileLayout>
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
          path="/posts"
          element={
            <PrivateRoute>
              <ProfilePosts />
            </PrivateRoute>
          }
        />
        <Route
          path="/statistics"
          element={
            <PrivateRoute>
              <ProfileStatistics />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ProfileLayout>
  );
};

export default ProfilePage;

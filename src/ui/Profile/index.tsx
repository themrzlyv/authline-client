import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute';
import NotFound from '../NotFound';
import ProfileLayout from './components/ProfileLayout';
import Profile from './pages/Profile';
import ProfilePosts from './pages/ProfilePosts';
import ProfileStatistics from './pages/ProfileStatistics';

const ProfilePage = () => {
  return (
    <ProfileLayout>
      <Switch>
        <PrivateRoute path="/profile" exact={true} Component={Profile} />
        <PrivateRoute path="/profile/posts" Component={ProfilePosts} />
        <PrivateRoute path="/profile/statistics" Component={ProfileStatistics} />
        <Route component={NotFound} />
      </Switch>
    </ProfileLayout>
  );
};

export default ProfilePage;

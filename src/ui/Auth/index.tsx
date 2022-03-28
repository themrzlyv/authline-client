import React from 'react';
import { Switch } from 'react-router-dom';
import ProtectedRoute from '../../components/ProtectedRoute';
import Registration from './pages/Registration';

const Auth = () => {
  return (
    <Switch>
      <ProtectedRoute path="/auth/registration" Component={Registration} />
    </Switch>
  );
};

export default Auth;

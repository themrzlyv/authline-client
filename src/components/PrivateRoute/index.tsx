import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelector } from '../../infrastructure/selectors';
import PreLoader from '../PreLoader';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user, isLoading } = useSelector(authSelector);
  const location = useLocation();

  if (isLoading) {
    return <PreLoader />;
  }

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;

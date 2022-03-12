import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Storage from '../../infrastructure/Global/Storage';
import { authSelector } from '../../infrastructure/selectors';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useSelector(authSelector);
  const token = Storage.getItem('jwt-token');
  const location = useLocation();

  if (user || token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;

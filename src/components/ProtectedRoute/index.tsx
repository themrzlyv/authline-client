import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Storage from '../../infrastructure/Global/Storage';
import { authSelector } from '../../infrastructure/selectors';

interface iProp {
  path: string;
  Component: React.ComponentType<unknown>;
}

const ProtectedRoute: React.FC<iProp> = ({ Component, path }) => {
  const { user } = useSelector(authSelector);
  const token = Storage.getItem('jwt-token');

  return (
    <Route path={path} render={() => (!user || !token ? <Component /> : <Redirect to="/" />)} />
  );
};

export default ProtectedRoute;

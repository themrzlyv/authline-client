import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelector } from '../../infrastructure/selectors';
import { toggleLoginModal } from '../../ui/Auth/common/redux/Auth.slice';
import PreLoader from '../PreLoader';

interface iProp {
  path: string;
  exact?: boolean;
  Component: React.ComponentType<unknown>;
}

const PrivateRoute: React.FC<iProp> = ({ Component, path, exact }) => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector(authSelector);

  if (isLoading) {
    return <PreLoader />;
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        if (user) {
          return <Component />;
        }
        dispatch(toggleLoginModal());
        return <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;

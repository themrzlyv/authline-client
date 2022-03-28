import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { iRoute } from '../infrastructure/@types/router-types';

interface iProps {
  routes: iRoute[];
}

const RenderRoutes: React.FC<iProps> = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route: iRoute) => (
        <Route key={route.name} exact={route.exact} path={route.path} component={route.component} />
      ))}
    </Switch>
  );
};

export default RenderRoutes;

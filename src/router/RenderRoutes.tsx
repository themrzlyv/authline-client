import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { iRoute } from '../infrastructure/@types/router-types';

interface iProps {
  routes: iRoute[];
}

const RenderRoutes: React.FC<iProps> = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route: iRoute) => (
        <Route key={route.name} index={route.index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default RenderRoutes;

import React from 'react';
import { iRoute } from '../infrastructure/@types/router-types';
import Home from '../ui/Home';
import Login from '../ui/Login';
import NotFound from '../ui/NotFound';

export const mainRoutes: iRoute[] = [
  {
    path: '/',
    name: 'home',
    element: <Home />,
    index: true,
  },
  {
    path: '/login',
    name: 'login',
    element: <Login />,
  },
  {
    path: '*',
    name: 'NotFound',
    element: <NotFound />,
  },
];

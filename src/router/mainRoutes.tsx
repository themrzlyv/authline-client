import React from 'react';
import { iRoute } from '../infrastructure/@types/router-types';

const Home = React.lazy(() => import('../ui/Home'));
const Auth = React.lazy(() => import('../ui/Auth'));
const Profile = React.lazy(() => import('../ui/Profile'));
const NotFound = React.lazy(() => import('../ui/NotFound'));

export const mainRoutes: iRoute[] = [
  {
    path: '/',
    name: 'home',
    element: <Home />,
    index: true,
  },
  {
    path: '/auth/*',
    name: 'auth',
    element: <Auth />,
  },
  {
    path: '/profile/*',
    name: 'profile',
    element: <Profile />,
  },
  {
    path: '*',
    name: 'NotFound',
    element: <NotFound />,
  },
];

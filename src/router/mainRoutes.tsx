import React from 'react';
import { iRoute } from '../infrastructure/@types/router-types';

const Home = React.lazy(() => import('../ui/Home'));
const Auth = React.lazy(() => import('../ui/Auth'));
const Profile = React.lazy(() => import('../ui/Profile'));
const Brands = React.lazy(() => import('../ui/Brands'));
const NotFound = React.lazy(() => import('../ui/NotFound'));

export const mainRoutes: iRoute[] = [
  {
    path: '/',
    name: 'home',
    component: () => <Home />,
    exact: true,
  },
  {
    path: '/brands',
    name: 'brands',
    component: () => <Brands />,
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => <Auth />,
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => <Profile />,
  },
  {
    path: undefined,
    name: 'NotFound',
    component: () => <NotFound />,
  },
];

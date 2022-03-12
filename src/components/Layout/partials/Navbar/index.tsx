import { Avatar, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../../assets/racing.png';

const NavBar = () => {
  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];
  return (
    <Grid container>
      <Grid
        item
        xs={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRight={1}
        borderColor="grey.300"
      >
        <Avatar src={Logo} sx={{ width: 34, height: 34 }} />
        <Typography
          variant="h5"
          fontWeight="bold"
          color="black"
          component="a"
          href="/"
          textTransform="uppercase"
          sx={{ textDecoration: 'none' }}
          marginLeft={1}
        >
          Autlines
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Grid container>
          <Grid item xs={8} display="flex" justifyContent="space-evenly">
            {navLinks.map((link) => (
              <NavLink to={link.path} key={link.name} style={{ textDecoration: 'none' }}>
                <Typography variant="subtitle2" fontWeight="bold" color="black">
                  {link.name}
                </Typography>
              </NavLink>
            ))}
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavBar;

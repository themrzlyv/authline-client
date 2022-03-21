import { Container, Grid } from '@mui/material';
import React from 'react';
import Footer from './partials/Footer';
import Header from './partials/Header';
import NavBar from './partials/Navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <Grid container display="flex" flexDirection="column" bgcolor="grey.100">
      <Header />
      <NavBar />
      {props.children}
      <Footer />
    </Grid>
  );
};

export default Layout;

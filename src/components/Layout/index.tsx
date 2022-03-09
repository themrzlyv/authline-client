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
    <Container maxWidth="lg">
      <Grid container display="flex" flexDirection="column">
        <Header />
        <NavBar />
        {props.children}
        <Footer />
      </Grid>
    </Container>
  );
};

export default Layout;

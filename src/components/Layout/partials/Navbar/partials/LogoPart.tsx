import { Grid } from '@mui/material';
import React from 'react';
import MenuLogo from '../components/MenuLogo';

const LogoPart = () => {
  return (
    <Grid
      item
      xs={3}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRight={1}
      borderColor="grey.300"
    >
      <MenuLogo />
    </Grid>
  );
};

export default LogoPart;

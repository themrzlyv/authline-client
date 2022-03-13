import { Grid } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from './common/data';
import LogoPart from './partials/LogoPart';
import MenuPart from './partials/MenuPart/MenuPart';
import MobileMenuPart from './partials/MenuPart/MobileMenuPart';


const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.laptop });

  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <LogoPart />
      {isMobile ? <MobileMenuPart /> : <MenuPart />}
    </Grid>
  );
};

export default NavBar;

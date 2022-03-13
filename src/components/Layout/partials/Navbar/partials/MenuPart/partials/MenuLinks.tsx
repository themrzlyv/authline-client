import { Grid } from '@mui/material';
import React from 'react';
import { menuLinks } from '../../../common/data';
import MenuLink from '../../../components/MenuLink';


const MenuLinks = () => {
  return (
    <Grid item xs={8} display="flex" alignItems="center" justifyContent="space-evenly">
      {menuLinks.map((link) => (
        <MenuLink key={link.key} link={link} />
      ))}
    </Grid>
  );
};

export default MenuLinks;

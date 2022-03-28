import { Avatar, Typography } from '@mui/material';
import React from 'react';
import Logo from '../../../../../assets/racing.png';

const MenuLogo = () => {
  return (
    <>
      <Avatar src={Logo} sx={{ width: 34, height: 34 }} />
      <Typography
        variant="h5"
        fontWeight="bold"
        color="primary"
        component="a"
        href="/"
        textTransform="uppercase"
        sx={{ textDecoration: 'none' }}
        marginLeft={1}
      >
        Authline
      </Typography>
    </>
  );
};

export default MenuLogo;

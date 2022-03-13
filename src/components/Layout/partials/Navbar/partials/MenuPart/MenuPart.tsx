import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import MenuLinks from './partials/MenuLinks';

const MenuPart = () => {
  return (
    <Grid item xs={9}>
      <Grid container>
        <MenuLinks />
        <Grid item xs={2} display="flex" alignItems="center" justifyContent="space-evenly">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Grid>
        <Grid item xs={2} display="flex" alignItems="center" justifyContent="center">
          <Button variant="contained" color="warning">
            <Typography fontSize={10} variant="caption" fontWeight="bold" color="white">
              create a new post
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MenuPart;

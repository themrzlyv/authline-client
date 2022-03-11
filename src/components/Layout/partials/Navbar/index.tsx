import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../../infrastructure/selectors';

const NavBar = () => {
  const { user } = useSelector(authSelector);
  console.log(user);
  return (
    <>
      <Grid item xs={12}>
        <Paper
          sx={{ height: '4em', width: '100%', display: 'flex', alignItems: 'center' }}
          elevation={2}
        >
          <Typography variant="body1">{user?.name}</Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default NavBar;

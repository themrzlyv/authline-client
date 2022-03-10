import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const NavBar = () => {
  return (
    <>
      <Grid item xs={12}>
        <Paper
          sx={{ height: '4em', width: '100%', display: 'flex', alignItems: 'center' }}
          elevation={2}
        >
          <Typography variant="body1">Navbar</Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default NavBar;

import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

// type Props = {};

const Header = () => {
  return (
    <>
      <Grid item xs={12} marginBottom={1}>
        <Paper elevation={4}>
          <Typography variant="body2">Header</Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default Header;

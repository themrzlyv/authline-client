import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <>
      <Grid item xs={12} marginBottom={1}>
        <Paper elevation={4}>
          <Typography variant="body2">footer</Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default Footer;

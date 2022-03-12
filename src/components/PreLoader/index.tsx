import { Box, CircularProgress, Grid } from '@mui/material';
import React from 'react';

const PreLoader = () => {
  return (
    <Grid item xs={12}>
      <Box width="100%" height="80vh" display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    </Grid>
  );
};

export default PreLoader;

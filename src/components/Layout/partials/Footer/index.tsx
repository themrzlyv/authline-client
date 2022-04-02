import { Box, Grid, Paper, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.dark,
  },
  headerContainer: {
    padding: theme.spacing(2),
    margin: `${theme.spacing(4)} 0`,
    border: `1px solid ${theme.palette.secondary.main}`,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} className={classes.root}>
        <Box className={classes.headerContainer}>
          <Typography variant="subtitle1" color="white">
            Authline LLC - 2022
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default Footer;

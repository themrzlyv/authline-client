import { Grid } from '@mui/material';
import React from 'react';
import ProfileNav from '../ProfileNav';

interface iProp {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<iProp> = ({ children }) => {
  return (
    <Grid container>
      <ProfileNav />
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default ProfileLayout;

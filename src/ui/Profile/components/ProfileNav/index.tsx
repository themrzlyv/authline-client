import { Grid, Tab, Tabs } from '@mui/material';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { profileMenuLinks } from '../../common/data';

const ProfileNav = () => {
  const location = useLocation();

  return (
    <Grid item xs={12} display="flex" justifyContent="center">
      <Tabs textColor="primary" indicatorColor="primary" value={location.pathname}>
        {profileMenuLinks.map((link) => (
          <Tab
            value={link.path}
            key={link.name}
            component={NavLink}
            to={link.path}
            label={link.name}
          />
        ))}
      </Tabs>
    </Grid>
  );
};

export default ProfileNav;

import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import useWindowDimensions from '../../../../../../infrastructure/hooks/useWindowDimensions';
import { DeviceSize, menuLinks } from '../../common/data';
import MenuLink from '../../components/MenuLink';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import MenuLinks from './partials/MenuLinks';
import { useMediaQuery } from 'react-responsive';
import MobileMenuLinks from './partials/MobileMenuLinks';

const MobileMenuPart = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);
  return (
    <Grid item xs={9}>
      <Grid container justifyContent="flex-start">
        <MobileMenuLinks isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Grid item xs={10} display="flex" alignItems="center" justifyContent="flex-end">
          <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon />
          </IconButton>
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
              publicity
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileMenuPart;

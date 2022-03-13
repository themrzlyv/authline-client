import { Box, Grid, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { menuLinks } from '../../../common/data';
import MenuLink from '../../../components/MenuLink';

import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles(() => ({
  mobileMenu: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '0.5em',
    top: '0',
    left: '0',
    width: '25%',
    height: '100%',
    backgroundColor: 'white',
    zIndex: '1000',
  },
  menuCloseContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const MobileMenuLinks: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  const classes = useStyles();

  if (!isMenuOpen) return null;

  return (
    <Grid item xs={8} className={classes.mobileMenu}>
      <Box className={classes.menuCloseContainer}>
        <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box>
        {menuLinks.map((link) => (
          <MenuLink key={link.key} link={link} style={{ margin: 59 }} />
        ))}
      </Box>
    </Grid>
  );
};

export default MobileMenuLinks;

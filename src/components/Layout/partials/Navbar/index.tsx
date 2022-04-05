import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Button, Grid, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../../infrastructure/hooks/useAuth';
import useControlNavLinks from '../../../../infrastructure/hooks/useControlNavLinks';
import { useRouter } from '../../../../infrastructure/hooks/useRouter';
import { authSelector } from '../../../../infrastructure/selectors';
import { logOutUser, toggleLoginModal } from '../../../../ui/Auth/common/redux/Auth.slice';
import { DeviceSize } from '../../common/data';
import { toggleMenuButton } from '../../common/redux/Layout.slice';
import { iNavLink } from '../../common/types';
import { menuLinks } from './common/data';
import MenuLogo from './components/MenuLogo';
import SideBar from './SideBar';

const NavBar = () => {
  const dispatch = useDispatch();
  const { signOut } = useAuth();
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.laptop });
  const { location } = useRouter();

  const { user } = useSelector(authSelector);

  const { navLinks } = useControlNavLinks({ links: menuLinks });

  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Grid
            item
            xl={10}
            md={12}
            xs={12}
            mx="auto"
            display="flex"
            justifyContent={isMobile ? 'space-between' : 'center'}
          >
            <Grid
              item
              xl={3}
              lg={3}
              xs={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {isMobile ? (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => dispatch(toggleMenuButton())}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <MenuLogo />
              )}
            </Grid>
            {!isMobile && (
              <Grid item lg={7} display="flex" alignItems="center" justifyContent="space-evenly">
                <Tabs textColor="primary" indicatorColor="primary" value={location.pathname}>
                  {navLinks.map((link: iNavLink) => (
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
            )}

            <Grid
              item
              xl={1}
              lg={2}
              md={2}
              xs={3}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <IconButton>
                {user ? (
                  <LogoutIcon onClick={() => signOut()} />
                ) : (
                  <LoginIcon onClick={() => dispatch(toggleLoginModal())} />
                )}
              </IconButton>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <Button variant="contained" color="primary">
                <Typography fontSize={10} variant="caption" fontWeight="bold" color="white">
                  Publicy
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
        <SideBar />
      </AppBar>
    </>
  );
};

export default NavBar;

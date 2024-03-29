import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import MdPhone from '@mui/icons-material/Phone';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import useControlNavLinks from '../../../../infrastructure/hooks/useControlNavLinks';
import { useRouter } from '../../../../infrastructure/hooks/useRouter';
import { layoutSelector } from '../../../../infrastructure/selectors';
import { toggleMenuButton } from '../../common/redux/Layout.slice';
import { menuLinks } from './common/data';
import MenuLogo from './components/MenuLogo';

const SideBar = () => {
  const dispatch = useDispatch();
  const { menu } = useSelector(layoutSelector);
  const { location } = useRouter();
  const { navLinks } = useControlNavLinks({ links: menuLinks });

  return (
    <>
      <Drawer open={menu.isOpen} onClose={() => dispatch(toggleMenuButton())}>
        <Box width={250}>
          <Box sx={{ width: '90%' }} marginX="auto">
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  disableTouchRipple
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <IconButton edge="end" onClick={() => dispatch(toggleMenuButton())}>
                    <CloseIcon />
                  </IconButton>
                </ListItemButton>
              </ListItem>
            </List>
            <List
              subheader={
                <ListSubheader component={Box} display="flex" alignItems="center" my={1}>
                  <MenuLogo />
                </ListSubheader>
              }
            >
              {navLinks.map((link) => (
                <ListItem
                  key={link.key}
                  disablePadding
                  component={NavLink}
                  to={link.path}
                  sx={{ color: 'black' }}
                >
                  <ListItemButton selected={location.pathname === link.path}>
                    <ListItemText primary={link.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <List
              subheader={
                <ListSubheader
                  component={Box}
                  display="flex"
                  alignItems="center"
                  mt={1}
                  borderTop={1}
                  borderColor="grey.300"
                  position="static"
                >
                  <Typography variant="subtitle2" fontWeight="bold" my={1}>
                    Contact Us
                  </Typography>
                </ListSubheader>
              }
            >
              <ListItem disablePadding>
                <ListItemButton disabled>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText primary="support@autline.com" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton disabled>
                  <ListItemIcon>
                    <MdPhone />
                  </ListItemIcon>
                  <ListItemText primary="+1 294 505 0989" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SideBar;

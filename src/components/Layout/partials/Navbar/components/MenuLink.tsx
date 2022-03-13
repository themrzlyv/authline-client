import { Typography } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { DeviceSize } from '../common/data';

type Props = {
  link: {
    name: string;
    path: string;
  };
  style?: React.CSSProperties;
};

const MenuLink = (props: Props) => {
  const { link, style } = props;
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.laptop });

  return (
    <NavLink
      style={({ isActive }) => ({
        color: isActive ? '#22ABC3' : 'black',
        textDecoration: 'none',
        ...style,
      })}
      to={link.path}
      key={link.name}
    >
      <Typography variant="subtitle2" fontWeight="bold">
        {link.name}
      </Typography>
    </NavLink>
  );
};

export default MenuLink;

import { IconButton, Typography } from '@mui/material';
import React from 'react';

type Props = {
  label: string;
  icon?: React.ReactElement;
};

const HeaderTextUi = (props: Props) => {
  return (
    <>
      <Typography variant="h6" my={0}>
        {props.label}
        {props.icon && (
          <IconButton sx={{ marginLeft: '0.1em' }} edge="end">
            {props.icon}
          </IconButton>
        )}
      </Typography>
    </>
  );
};

export default HeaderTextUi;

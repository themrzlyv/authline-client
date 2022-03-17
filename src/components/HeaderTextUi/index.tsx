import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';

type Props = {
  label: string;
  icon?: React.ReactElement;
};

const HeaderTextUi = (props: Props) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="h6" sx={{ marginRight: 1 }}>
        {props.label}
      </Typography>
      {props.icon && props.icon}
    </Box>
  );
};

export default HeaderTextUi;

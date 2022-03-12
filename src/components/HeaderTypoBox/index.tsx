import { Box, Chip, Typography } from '@mui/material';
import React from 'react';

type Props = {
  label: string;
  icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  text: string;
};

const HeaderTypoBox = (props: Props) => {
  const { label, icon, text } = props;
  return (
    <Box display="flex" alignItems="center">
      <Chip icon={icon} label={label} size="small" variant="outlined" />
      <Typography variant="subtitle2" fontWeight="bold" marginLeft={1}>
        {text}
      </Typography>
    </Box>
  );
};

export default HeaderTypoBox;

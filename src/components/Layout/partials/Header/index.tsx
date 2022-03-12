import { Chip, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useWindowDimensions from '../../../../infrastructure/hooks/useWindowDimensions';
import MdPhone from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HeaderTypoBox from '../../../HeaderTypoBox';

const Header = () => {
  const { width } = useWindowDimensions();

  if (width < 1160) return null;

  return (
    <>
      <Grid
        item
        xs={12}
        marginBottom={1}
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        paddingY={1}
        borderBottom={1}
        borderColor="grey.300"
      >
        <HeaderTypoBox label="Call Us 24/7" icon={<MdPhone />} text="+1 294 505 0989" />
        <HeaderTypoBox label="Email" icon={<EmailIcon />} text="support@autline.com" />
        <HeaderTypoBox
          label="Opening Hours"
          icon={<AccessTimeIcon />}
          text="Mon - Fri: 9:00 - 18:00"
        />
      </Grid>
    </>
  );
};

export default Header;

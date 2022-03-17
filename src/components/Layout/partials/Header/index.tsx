import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import MdPhone from '@mui/icons-material/Phone';
import { Grid } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HeaderTypoBox from '../../../HeaderTypoBox';
import { DeviceSize } from '../../common/data';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.laptop });

  if (isMobile) return null;

  return (
    <>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        paddingY={1}
        bgcolor="grey.100"
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

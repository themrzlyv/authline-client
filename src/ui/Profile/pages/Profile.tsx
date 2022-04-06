import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import HeaderTextUi from '../../../components/HeaderTextUi';
import PreLoader from '../../../components/PreLoader';
import { authSelector } from '../../../infrastructure/selectors';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import InputUi from '../../../components/InputUi';
import { useFormik } from 'formik';
import ButtonUi from '../../../components/ButtonUi';
import { updateUserSchema } from '../../../infrastructure/data/YupSchemas/updateUserSchema';

import moment from 'moment';
import Calendar from '../../../components/Calendar';

const useStyles = makeStyles(() => ({
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

const Profile = () => {
  const { user, isLoading } = useSelector(authSelector);

  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      newPassword: '',
      oldPassword: '',
      city: user.city,
      number: user.number,
      birthday: moment(user.birthday, 'YYYY-MM-DD'),
    },
    validationSchema: updateUserSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  if (isLoading) {
    return <PreLoader />;
  }

  if (!user) {
    return null;
  }

  return (
    <Grid item xs={12} lg={10} mx="auto" my={2}>
      <Grid container>
        <Grid item xs={12} mb={2} borderColor="GrayText" borderBottom={1}>
          <HeaderTextUi label="Account Information" icon={<ManageAccountsIcon />} />
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          maxHeight={250}
          py={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img src={user.photo} className={classes.profileImage} alt="profile" />
        </Grid>
        <Grid item xs={12} lg={8} display="flex" flexDirection="column">
          <form
            onSubmit={formik.handleSubmit}
            style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <InputUi
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              fullWidth
              id="name"
              name="name"
              label="Name"
              type="text"
            />
            <InputUi
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="text"
            />
            <InputUi
              fullWidth
              id="newpassword"
              name="newPassword"
              label="New Password"
              type="password"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
              helperText={formik.touched.newPassword && formik.errors.newPassword}
            />
            <InputUi
              fullWidth
              id="oldpassword"
              name="oldpassword"
              label="Old Password"
              type="password"
              value={formik.values.oldPassword}
              onChange={formik.handleChange}
              error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
              helperText={formik.touched.oldPassword && formik.errors.oldPassword}
            />
            <InputUi
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
              fullWidth
              id="city"
              name="city"
              label="City"
              type="text"
            />
            <InputUi
              value={formik.values.number}
              onChange={formik.handleChange}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
              fullWidth
              id="number"
              name="number"
              label="Phone number"
              type="text"
            />
            <InputUi
              value={formik.values.birthday}
              onChange={formik.handleChange}
              error={formik.touched.birthday && Boolean(formik.errors.birthday)}
              helperText={formik.touched.birthday && formik.errors.birthday}
              fullWidth
              id="date"
              name="birthday"
              label="Date of birth"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Calendar />
            <ButtonUi
              loading={isLoading ? 1 : 0}
              color="primary"
              type="submit"
              variant="contained"
              label="Update profile"
            />
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;

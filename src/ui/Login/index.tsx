import { Button, Grid, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import HeaderTextUi from '../../components/HeaderTextUi';
import InputUi from '../../components/InputUi';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ButtonUi from '../../components/ButtonUi';

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Grid container>
      <Grid item xs={8} mx="auto" mt={4} display="flex" justifyContent="center">
        <HeaderTextUi label="Sign in" icon={<ArrowForwardIcon />} />
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center" mb={4}>
        <form
          onSubmit={formik.handleSubmit}
          style={{ width: '30em', display: 'flex', flexDirection: 'column' }}
        >
          <InputUi
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
            id="email"
            name="email"
            label="Email"
          />
          <InputUi
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <ButtonUi color="primary" type="submit" variant="contained" label="Sign in" />
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;

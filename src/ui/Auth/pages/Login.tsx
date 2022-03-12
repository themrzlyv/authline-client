import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonUi from '../../../components/ButtonUi';
import HeaderTextUi from '../../../components/HeaderTextUi';
import InputUi from '../../../components/InputUi';
import { validationSchema } from '../../../infrastructure/data/YupSchemas/loginSchema';
import { authSelector } from '../../../infrastructure/selectors';
import { loginUser } from '../common/redux/Auth.slice';

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(authSelector);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(loginUser({ ...values }));
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
            type="text"
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
          <ButtonUi
            loading={isLoading ? 1 : 0}
            color="primary"
            type="submit"
            variant="contained"
            label="Sign in"
          />
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;

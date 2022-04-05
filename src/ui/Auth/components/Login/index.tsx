import { NavigateNextTwoTone } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid, Typography } from '@mui/material';
import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonUi from '../../../../components/ButtonUi';
import InputUi from '../../../../components/InputUi';
import ModalUi from '../../../../components/ModalUi';
import { validationSchema } from '../../../../infrastructure/data/YupSchemas/loginSchema';
import API from '../../../../infrastructure/Global/axios/axios';
import Storage from '../../../../infrastructure/Global/Storage';
import { useRouter } from '../../../../infrastructure/hooks/useRouter';
import { authSelector } from '../../../../infrastructure/selectors';
import { loginUser, toggleLoginModal } from '../../common/redux/Auth.slice';

const Login = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { isLoading, loginModal } = useSelector(authSelector);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // dispatch(loginUser({ ...values }));
      try {
        const res = await API.post(
          '/auth/login',
          {
            ...values,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'credintials': 'include',
            },
          },
        );
        Storage.setItem('firstLogin', true);
        push('/');
      } catch (error) {
        return (error as AxiosError)?.response?.data?.error;
      }
    },
  });

  const goToRegister = () => {
    dispatch(toggleLoginModal());
    push('/auth/registration');
  };

  return (
    <ModalUi
      open={loginModal}
      onClose={() => dispatch(toggleLoginModal())}
      headerLabel="Sign in"
      headerIcon={<ArrowForwardIcon />}
    >
      <Grid item xs={12} display="flex" justifyContent="center" mb={2}>
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
      <Grid item xs={12} display="flex" alignItems="center">
        <Typography variant="caption" color="black">
          Don&apos;t have an account?
        </Typography>
        <ButtonUi
          color="error"
          variant="text"
          label="Sign up"
          style={{ marginLeft: '1em' }}
          onClick={goToRegister}
        />
      </Grid>
    </ModalUi>
  );
};

export default Login;

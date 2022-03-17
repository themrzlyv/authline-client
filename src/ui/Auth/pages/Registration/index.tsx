import { Grid, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ButtonUi from '../../../../components/ButtonUi';
import HeaderTextUi from '../../../../components/HeaderTextUi';
import InputUi from '../../../../components/InputUi';
import { registrationSchema } from '../../../../infrastructure/data/YupSchemas/registrationSchema';
import UserReq from '../../../../infrastructure/Global/APIrequests/UserReq';
import { toggleLoginModal } from '../../common/redux/Auth.slice';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate, isLoading, data, isError, error } = useMutation(UserReq.registerUser, {
    onSuccess: () => {
      toast.success('Registration successful', { toastId: 'registrationSuccess' });
      navigate('/');
    },
    onError: () => {
      toast.error('Registration failed', { toastId: 'registrationError' });
    },
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      city: '',
      number: '',
      birthday: '',
    },
    validationSchema: registrationSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  const goToLogin = () => {
    dispatch(toggleLoginModal());
  };

  console.log(data);

  return (
    <Grid container gap={1}>
      <Grid item xs={8} mx="auto" display="flex" py={1} justifyContent="center">
        <HeaderTextUi label="Sign up" />
      </Grid>
      {isError && (
        <Grid item xs={8} mx="auto" display="flex" py={1} justifyContent="center">
          {error}
        </Grid>
      )}
      <Grid item xs={5} mx="auto" display="flex">
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
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
          <ButtonUi
            loading={isLoading ? 1 : 0}
            color="primary"
            type="submit"
            variant="contained"
            label="Sign up"
          />
        </form>
      </Grid>
      <Grid item xs={12} mx="auto" display="flex" justifyContent="center" alignItems="center">
        <Typography variant="caption" color="black">
          You have an account?
        </Typography>
        <ButtonUi
          color="error"
          variant="text"
          label="Sign in"
          style={{ marginLeft: '1em' }}
          onClick={goToLogin}
        />
      </Grid>
    </Grid>
  );
};

export default Registration;

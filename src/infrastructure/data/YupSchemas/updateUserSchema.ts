import * as yup from 'yup';

export const updateUserSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  newPassword: yup
    .string()
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
  oldPassword: yup
    .string()
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
  city: yup.string().required('City is required'),
  number: yup.string().required('Number is required'),
  birthday: yup.date().required('Birthday is required'),
});

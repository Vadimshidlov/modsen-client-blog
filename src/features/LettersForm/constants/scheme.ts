import * as yup from 'yup';

export const lettersFormScheme = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required!'),
});

import * as yup from 'yup';

export const conversationFormScheme = yup.object().shape({
  userName: yup.string().required('Name is required!').min(2).max(20),
  email: yup.string().email('Invalid email').required('Email is required!'),
  message: yup
    .string()
    .required('Message is required!')
    .min(2, 'Message is short!')
    .max(600, 'Message should be less than 600 symbols'),
});

import { bool, object, string } from 'yup';

export const loginFormSchema = object().shape({
  email: string().default('').email('Please provide a valid email address').required('Email is required'),
  password: string().default('').required('Password is required'),
  remember: bool().default(false)
});

import { Link } from 'react-router-dom';

// material-ui
import { Button, Grid, Stack, Typography } from '@mui/material';

// project import
// import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';
import LoginForm from 'pages/authentication/auth-forms/login-form/login-form.component';
import FormProvider from 'components/form-provider/form-provider.component';
import { useLoginForm } from './auth-forms/login-form/login-form.hooks';

// ================================|| LOGIN ||================================ //

const Login = () => {
  const form = useLoginForm();

  const handleLogin = (formData) => {
    console.log(formData);
  };

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Login</Typography>
            <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
              Don&apos;t have an account?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <FormProvider formMethods={form}>
            <LoginForm />
            <Button type="submit" variant="contained" onClick={form.handleSubmit(handleLogin)} fullWidth>
              Login
            </Button>
          </FormProvider>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;

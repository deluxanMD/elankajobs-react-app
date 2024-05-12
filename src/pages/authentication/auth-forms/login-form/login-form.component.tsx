import { PasswordField } from 'components/fields/password-field/password-field.component';
import TextField from 'components/fields/text-field/text-field.component';
import React from 'react';

const LoginForm = () => {
  return (
    <>
      <TextField name="email" label="Email Address" />
      <PasswordField name="password" label="Password" />
    </>
  );
};

export default LoginForm;

import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import HelperText from '../helper-text/helper-text.component';

type TextFieldProps = {
  'data-testid'?: string;
  name: string;
} & MuiTextFieldProps;

const TextField = ({ name, helperText, 'data-testid': dataTestId = 'TextField', ...rest }: TextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <MuiTextField error={!!error} fullWidth data-testid={dataTestId} {...field} {...rest} />
          {(!!error || !!helperText) && <HelperText errorMessage={error?.message} helperText={helperText?.toString()} />}
        </>
      )}
    />
  );
};

export default TextField;

import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import HelperText from '../helper-text/helper-text.component';

type PasswordFieldProps = {
  'data-testid'?: string;
  name: string;
} & TextFieldProps;

export const PasswordField = ({ name, helperText, 'data-testid': dataTestId = 'PasswordField', ...rest }: PasswordFieldProps) => {
  const [type, setType] = useState<'text' | 'password'>('password');
  const { control } = useFormContext();

  const handleVisibility = () => {
    setType(type === 'password' ? 'text' : 'password');
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <TextField
            error={!!error}
            type={type}
            fullWidth
            data-testid={dataTestId}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="start"
                  style={{ cursor: 'pointer' }}
                  onClick={handleVisibility}
                  data-testid={`${dataTestId}.InputAdornment`}
                >
                  {type === 'password' ? <Visibility /> : <VisibilityOff />}
                </InputAdornment>
              )
            }}
            {...field}
            {...rest}
          />
          {(!!error || !!helperText) && <HelperText errorMessage={error?.message} helperText={helperText?.toString()} />}
        </>
      )}
    />
  );
};

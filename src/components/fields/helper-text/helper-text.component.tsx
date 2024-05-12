import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

type HelperTextProps = {
  errorMessage?: string;
  helperText?: string;
  'data-testid'?: string;
};

const HelperText = ({ errorMessage, helperText, 'data-testid': dataTestId }: HelperTextProps) => {
  const {
    palette: { error, info }
  } = useTheme();

  return (
    <Box data-testid={`${dataTestId}.HelperText`}>
      <Typography color={!!errorMessage ? error.main : info.main}>{errorMessage ?? helperText}</Typography>
    </Box>
  );
};

export default HelperText;

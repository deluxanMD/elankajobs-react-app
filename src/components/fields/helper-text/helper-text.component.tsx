import { Box, Typography, useTheme } from '@mui/material';

interface HelperTextProps {
  errorMessage?: string;
  helperText?: string;
}

const HelperText = ({ errorMessage, helperText }: HelperTextProps) => {
  const {
    palette: { error, info }
  } = useTheme();

  return (
    <Box data-testid="HelperText">
      <Typography color={!!errorMessage ? error.main : info.main}>{errorMessage ?? helperText}</Typography>
    </Box>
  );
};

export default HelperText;

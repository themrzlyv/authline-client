import { TextField } from '@mui/material';
import React from 'react';

type Props = {
  id?: string;
  name?: string;
  label?: string;
  fullWidth?: boolean;
  type?: string;
  value: string | any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  helperText: string | any;
  InputLabelProps?: {
    shrink: boolean;
  };
};

const InputUi = (props: Props) => {
  const { value, onChange, error, helperText, ...rest } = props;
  return (
    <TextField
      {...rest}
      sx={{ marginY: '1em' }}
      value={value}
      onChange={onChange}
      error={error && Boolean(error)}
      helperText={helperText}
      variant="filled"
    />
  );
};

export default InputUi;

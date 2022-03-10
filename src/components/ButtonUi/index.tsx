import { Button } from '@mui/material';
import React from 'react';

type Props = {
  label: string;
  color?: 'inherit' | 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
  variant?: 'text' | 'outlined' | 'contained';
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  onClick?: () => void;
};

const ButtonUi = (props: Props) => {
  const { label, onClick, ...rest } = props;
  return (
    <Button sx={{ marginY: '1em' }} {...rest}>
      {label}
    </Button>
  );
};

export default ButtonUi;

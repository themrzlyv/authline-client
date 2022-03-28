import { Button, CircularProgress, Typography } from '@mui/material';
import React from 'react';

type Props = {
  label: string;
  loading?: number;
  color?: 'inherit' | 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
  variant?: 'text' | 'outlined' | 'contained';
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  fullWidth?: boolean;
  onClick?: () => void;
};

const ButtonUi: React.FC<Props> = (props) => {
  const { label, ...rest } = props;

  return (
    <Button
      disabled={Boolean(props.loading)}
      sx={{ marginY: '1em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      {...rest}
      variant={props.loading ? 'outlined' : props.variant}
    >
      {props.loading ? (
        <CircularProgress size={15} color="primary" sx={{ marginY: '0.3em' }} />
      ) : (
        <Typography variant="body1">{label}</Typography>
      )}
    </Button>
  );
};

export default ButtonUi;

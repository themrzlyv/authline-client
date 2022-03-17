import { Grid, IconButton, Modal, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import HeaderTextUi from '../HeaderTextUi';

import CloseIcon from '@mui/icons-material/Close';

interface iProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  headerLabel: string;
  headerIcon?: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 800,
    width: 350,
    backgroundColor: 'white',
    boxShadow: theme.shadows[24],
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 4),
  },
}));

const ModalUi: React.FC<iProps> = ({ children, open, onClose, headerLabel, headerIcon }) => {
  const classes = useStyles();
  return (
    <Modal open={open} keepMounted>
      <Grid container className={classes.root}>
        <Grid item xs={12} my={1} display="flex" justifyContent="flex-end">
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <HeaderTextUi label={headerLabel} icon={headerIcon} />
        </Grid>
        {children}
      </Grid>
    </Modal>
  );
};

export default ModalUi;

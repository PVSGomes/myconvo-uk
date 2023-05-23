import React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as AppActions from '../store/actions/AppActions';

const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ReusableSnackbar = ({
  message,
  severity,
  autoHideDuration,
  open, // Rename the prop to initialOpen
}) => {
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(AppActions.hideSnackBar());
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          sx={{ width: '100%', fontSize: 15, fontWeight: 500 }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

ReusableSnackbar.propTypes = {
  message: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired,
  autoHideDuration: PropTypes.number,
  open: PropTypes.bool, // Add the open prop
};

export default ReusableSnackbar;

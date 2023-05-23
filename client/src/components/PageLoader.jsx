import { Box, CircularProgress } from '@mui/material';
import React from 'react';

function PageLoader() {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <CircularProgress size={30} color="primary" />
    </Box>
  );
}

export default PageLoader;

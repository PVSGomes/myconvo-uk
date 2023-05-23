import React from 'react';
import { Typography, Box } from '@mui/material';
import { AiOutlineInbox } from 'react-icons/ai';

const NoDataView = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        textAlign: 'center',
        alignSelf:'center',
      }}
    >
      <AiOutlineInbox
        style={{ fontSize: '48px', marginBottom: '10px', color: '#d5d5d5' }}
      />
      <Typography variant="h5" fontWeight="400" sx={{ mb: 2 }}>
        Oops! No data found.
      </Typography>
      <Typography variant="body1" color="text.secondary">
        We could not find any data matching your criteria.
      </Typography>
    </Box>
  );
};

export default NoDataView;

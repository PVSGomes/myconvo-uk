import { Box } from '@mui/material';
import React from 'react';
import { Colors } from '../../../values/colors';
import { SPONSOR_IMAGES } from '../../../constants';

const SponsorView = () => {
  return (
    <Box
      sx={{
        width: '100%',
        px: 20,
        py: 2,
        height: '120px',
        // backgroundColor: Colors.blueLight,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
      }}
    >
      {SPONSOR_IMAGES.map((image) => (
        <Box
          key={image}
          sx={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: '#f7f8fa',
            transition: 'all 0.4s ease-in-out',
            backgroundBlendMode: 'luminosity',
            '&:hover': {
              backgroundColor: 'transparent',
              backgroundBlendMode: 'normal',
              transform: 'scale(1.2)', // Adjust the scale factor as desired
            },
          }}
        />
      ))}
    </Box>
  );
};

export default SponsorView;

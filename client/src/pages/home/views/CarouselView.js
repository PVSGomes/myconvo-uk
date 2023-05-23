import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Colors } from '../../../values/colors';
import heroGraduationImage from '../../../assets/Images/hero-graduation.jpg';

function CarouselView() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '600px',
        backgroundColor: Colors.secondary,
        backgroundImage: `url(${heroGraduationImage})`, // Use the imported image directly
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        // backgroundBlendMode: 'multiply',
        transition: 'filter 0.3s ease-in-out', // Add transition for smoother effect
        '&:hover': {},
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: Colors.blueBurn,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 1,
          alignItems: 'center',
          transition: 'filter 0.3s ease-in-out', // Add transition for smoother effect
          '&:hover': {},
        }}
      >
        <Typography variant="title" color={Colors.white}>
          Welcome to My Convo UK
        </Typography>
        <Typography variant="h3" color={Colors.white} fontWeight="400">
          Streamline your graduation experience with My Convo UK
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: Colors.white,
            borderColor: Colors.yellow,
            fontSize: 20,
            px: 3,
            my: 2,
            borderWidth: 2,
            borderRadius: 60,
            textTransform: 'none',
            transition:
              'border-width 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out', // Add transition properties with ease-in-out timing
            '&:hover': {
              borderWidth: 2,
              backgroundColor: Colors.yellow,
              color: Colors.white,
              borderColor: Colors.yellow,
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
}

export default CarouselView;

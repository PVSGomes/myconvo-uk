import { Box, Typography } from '@mui/material';
import React from 'react';
import { Colors } from '../../../values/colors';
import ABOUT_US_IMG from '../../../assets/Images/about-us.jpg';

const DiscoverView = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '580px',
        px: 10,
        py: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        backgroundColor:Colors.white,
      }}
    >
      <Box
        sx={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: Colors.secondary,
          backgroundImage: `url(${ABOUT_US_IMG})`, // Use the imported image directly
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
        }}
      />
      <Box
        sx={{
          flex: 1,
          height: '100%',
        }}
      >
        <Box>
          <Typography
            variant="subtitle"
            color={Colors.subTitle}
            fontWeight="1000"
          >
            Discover Our Journey: From Concept to Creation,
          </Typography>
          <Typography variant="h5" color={Colors.greyText} fontWeight="400">
            We are help to simplifies the graduation process for universities
            and students across the UK. Our team of experienced developers and
            designers have created a platform that allows for easy scheduling
            and arrangement of graduation ceremonies, including photography
            services.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mt: 5,
          }}
        >
          <Box>
            <Typography variant="h3" color={Colors.black} fontWeight="800">
              Our Goal
            </Typography>
            <Typography variant="h5" color={Colors.greyText} fontWeight="400">
              Our goal is to save time and effort for all parties involved in
              the graduation process.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h3" color={Colors.black} fontWeight="800">
              We are guarantee,
            </Typography>
            <Typography variant="h5" color={Colors.greyText} fontWeight="400">
              Our team is dedicated to ensuring that every user has a positive
              experience using our platform.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DiscoverView;

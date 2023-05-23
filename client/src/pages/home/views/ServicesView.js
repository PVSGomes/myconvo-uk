import { Box, Typography } from '@mui/material';
import React from 'react';
import SubTitleBox from '../components/SubTitleBox';
import { SERVICES_LIST } from '../../../constants';
import { Colors } from '../../../values/colors';

const ServicesView = () => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.white,
        py: 4,
      }}
    >
      <SubTitleBox
        title="SERVICES"
        description="Experience seamless and hassle-free services with us. We are committed to providing high-quality, reliable services to simplify the graduation process and make it a memorable experience for everyone involved."
      />
      <Box
        sx={{
          px: 10,
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 3,
          my: 3,
        }}
      >
        {SERVICES_LIST.map(({ title, description, icon, color }, index) => (
          <Box
            key={title}
            sx={{
              height: '350px',
              width: '30%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 3,
              pb: 5,
              gap: 3,
              backgroundColor: Colors.white,
              boxShadow: '0px 5px 90px 0px rgba(110, 123, 131, 0.05)', // Add box shadow
              transition: 'box-shadow 0.3s ease-in-out', // Add transition for smooth hover effect
              '&:hover': {
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Modify box shadow on hover
              },
            }}
          >
            <Box
              sx={{
                backgroundColor: Colors.grey,
                padding: '10px',
                borderRadius: '50px',
                width: '70px',
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: Colors.infoBg,
                },
              }}
            >
              {React.cloneElement(icon, {
                style: {
                  fontSize: '32px',
                  color: color,
                  zIndex: 10,
                  '&:hover': {
                    color: '#fff',
                  },
                },
              })}
            </Box>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="h5" fontWeight="400" textAlign="center">
              {description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesView;

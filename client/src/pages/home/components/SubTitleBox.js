import { Box, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { Colors } from '../../../values/colors';

const SubTitleBox = ({ title, description }) => {
  const [firstPart, secondPart] = description.split('.');

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
      }}
    >
      <Typography
        variant="subtitle"
        sx={{
          color: Colors.black,
          fontWeight: '1000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {title}
        <Box
          sx={{
            alignSelf: 'center',
            width: '40%',
            py: 0.2,
            backgroundColor: Colors.yellow,
            '&:hover': {
              backgroundColor: Colors.black,
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Typography>
      <Typography
        variant="h4"
        color={Colors.greyText2}
        sx={{
          textAlign: 'center',
          fontWeight: '400',
        }}
      >
        {firstPart}
        <Typography
          variant="h4"
          color={Colors.greyText2}
          sx={{
            textAlign: 'center',
            fontWeight: '400',
          }}
        >
          {secondPart}
        </Typography>
      </Typography>
    </Box>
  );
};

SubTitleBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SubTitleBox;

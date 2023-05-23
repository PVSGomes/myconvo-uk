import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Colors } from '../values/colors';

const Breadcrumb = ({ title, breadcrumb }) => {
  const parts = breadcrumb.split('/');
  const firstPart = parts.slice(0, -1).join('/');
  const secondPart = parts[parts.length - 1];

  return (
    <Box>
      <Typography variant="h2" fontWeight="400">
        {title}
      </Typography>
      <Typography color={Colors.lightPurple} sx={{ display: 'flex' }}>
        {firstPart} /{' '}
        <Typography color={Colors.black} sx={{ ml: 0.5 }}>
          {secondPart}
        </Typography>
      </Typography>
    </Box>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumb: PropTypes.string.isRequired,
};

export default Breadcrumb;

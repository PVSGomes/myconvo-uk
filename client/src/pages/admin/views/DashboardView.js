import { Box } from '@mui/material';
import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb';

const DashboardView = () => {
  return (
    <Box>
      <Breadcrumb title="Admin Dashboard" breadcrumb="Admin Panel/Dashboard" />
    </Box>
  );
};

export default DashboardView;

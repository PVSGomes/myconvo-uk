import React from 'react';
import { Box } from '@mui/material';
import CarouselView from './views/CarouselView';
import SponsorView from './views/SponsorView';
import DiscoverView from './views/DiscoverView';
import ServicesView from './views/ServicesView';
import { Colors } from '../../values/colors';
import ContactUsView from './views/ContactUsView';
import GalleryView from './views/GalleryView';

const Home = () => {
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor:Colors.backgroundGrey,
    }}>
      <CarouselView />
      <SponsorView />
      <DiscoverView />
      <ServicesView />
      <GalleryView/>
      <ContactUsView/>
    </Box>
  );
};

export default Home;

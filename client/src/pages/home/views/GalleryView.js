import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Tab, Tabs } from '@mui/material';
import { GALLERY_ITEMS } from '../../../constants';

const GalleryView = () => {
  const [imageCount, setImageCount] = React.useState(4);

  const handleTabChange = (event, newValue) => {
    setImageCount(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: '100%', px: 10, my: 4 }}>
      <Tabs
        value={imageCount}
        onChange={handleTabChange}
        aria-label="Image Count Tabs"
      >
        <Tab label="4 Images" value={6} />
        <Tab label="6 Images" value={8} />
        <Tab label="8 Images" value={15
        } />
      </Tabs>
      <ImageList>
        <ImageListItem key="Subheader" cols={4}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {GALLERY_ITEMS.slice(0, imageCount).map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              m: 0,
              borderRadius: '20px',
              overflow: 'hidden',
              '&:hover': {
                zIndex: 99,
                transform: 'scale(0.9)', // Zoom in on hover
                transition: 'transform 0.3s ease', // Add animation transition
              },
            }}
          >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <ImageListItemBar
              sx={{
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px',
              }}
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default GalleryView;

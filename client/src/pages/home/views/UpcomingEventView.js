import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const items = [
  {
    title: 'Item 1',
    description: 'Description for item 1',
  },
  {
    title: 'Item 2',
    description: 'Description for item 2',
  },
  {
    title: 'Item 3',
    description: 'Description for item 3',
  },
];



const UpcomingEventView = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    const touchCurrentX = event.touches[0].clientX;
    const deltaX = touchStartX - touchCurrentX;

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
      };
    
      const handlePrevious = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
      };

    if (deltaX >= 50) {
      handleNext();
    } else if (deltaX <= -50) {
      handlePrevious();
    }
  };



  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={{ touchAction: 'pan-y' }}
    >
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {items[activeIndex].title}
          </Typography>
          <Typography color="text.secondary">{items[activeIndex].description}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpcomingEventView;

import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Breadcrumb from '../../../components/Breadcrumb';
import EventCard from '../components/EventCard';
import NoDataView from '../../../components/NoDataView';
import { useDispatch } from 'react-redux';
import * as AppActions from '../../../store/actions/AppActions'

const EventView = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.AppReducer);

  const currentDate = new Date(); // Get the current date

  useEffect(()=>{
    dispatch(AppActions.setEvents('university'));
  },[])

  const previousEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate < currentDate;
  });

  return (
    <Box>
      <Breadcrumb title="Event Details" breadcrumb="Admin Panel/Event" />
      <Box
        sx={{
          my: 3,
          mx: 10,
        }}
      >
        <Typography variant="h4" fontWeight="400">
          Up Coming Event Details
        </Typography>
        {events && events.length > 0 ? (
          events?.map((eventItem) => <EventCard eventItem={eventItem} />)
        ) : (
          <NoDataView />
        )}
      </Box>

      <Box
        sx={{
          mt: 10,
          mb: 3,
          mx: 10,
        }}
      >
        <Typography variant="h4" fontWeight="400">
          Previous Event Details
        </Typography>

        {previousEvents && previousEvents.length > 0 ? (
          previousEvents.map((eventItem) => (
            <EventCard key={eventItem.name} eventItem={eventItem} />
          ))
        ) : (
          <NoDataView />
        )}
      </Box>
    </Box>
  );
};

export default EventView;

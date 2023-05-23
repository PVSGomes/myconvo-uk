import React, { useEffect, useMemo } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { CiImageOn } from 'react-icons/ci';
import {
  IoMailOutline,
  IoLocationOutline,
  IoCallOutline,
} from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../../../components/Breadcrumb';
import { Colors } from '../../../values/colors';
import ImageUploader from '../../../components/ImageUploader';
import * as AppActions from '../../../store/actions/AppActions';
import StudentEditPopup from '../components/StudentEditPopup';
import EventCard from '../../admin/components/EventCard';

const StudentProfileView = () => {
  const dispatch = useDispatch();
  const { studentImage, isStudentImage, userInfo, events } = useSelector(
    (state) => state.AppReducer
  );

  const handleFileUpload = (url) => {
    dispatch(AppActions.setStudentImage(url));
  };
  const handleEditMode = async () => {
    await dispatch(AppActions.showEditStudentPopup(true));
  };

  useEffect(() => {
    dispatch(AppActions.setEvents('university'));
  }, []);

  const currentEvent = useMemo(
    () =>
      events?.filter((eventItem) => eventItem._id === userInfo?.graduationId)[0],
    [events]
  );

  console.log(currentEvent);

  return (
    <Box sx={{ m: 4 }}>
      <Breadcrumb title="Profile" breadcrumb="Home/ Student Portal/ Profile" />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '16px',
          p: 4,
        }}
      >
        <Box
          sx={{
            width: 250,
            height: 250,
            boxSizing: 'border-box',
            backgroundColor: Colors.grey,
            border: !isStudentImage
              ? `1px solid ${Colors.error}`
              : `1px solid ${Colors.greyDivider}`,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: studentImage
              ? `url(${studentImage})`
              : userInfo?.image,
            objectFit: 'contain',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            cursor: 'pointer',
            transition: 'background-image 0.3s ease',
            overflow: 'hidden',
            gap: 3,
          }}
        >
          {!studentImage ? (
            <CiImageOn size="50" color={Colors.greyText} />
          ) : null}
          <ImageUploader onFileUpload={handleFileUpload} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: 1,
          }}
        >
          <Box>
            <Typography variant="h2"> {userInfo?.name}</Typography>
            <Typography
              sx={{
                color: Colors.secondaryLight,
                fontSize: 16,
                mb: 2,
              }}
            >
              Student
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 0.5,
                fontSize: 16,
              }}
            >
              <IoMailOutline />
              {userInfo?.email}
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 0.5,
                fontSize: 16,
              }}
            >
              <IoCallOutline /> {userInfo?.phoneNo}
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 0.5,
                fontSize: 16,
              }}
            >
              <IoLocationOutline />
              {userInfo?.address}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
          }}
        >
          <LoadingButton
            size="small"
            onClick={handleEditMode}
            // loading={isLoading}
            variant="contained"
            // disabled={isLoading}
            sx={{
              width: '30%',
              height: '40px',
              color: Colors.white,
              fontSize: 13,
              alignSelf: 'flex-end',
              backgroundColor: Colors.secondaryLight,
              '&:hover': {
                backgroundColor: Colors.secondaryLight,
              },
            }}
          >
            Edit Profile
          </LoadingButton>
        </Box>
      </Box>
      {currentEvent && (
        <Box>
          <Box sx={{ my: 3, mx: 3 }}>
            <Typography variant="h3" fontWeight="400">
              Event Details
            </Typography>
          </Box>
          <EventCard
            eventItem={{
              eventTitle: currentEvent?.eventTitle,
              address: currentEvent?.address,
              date: currentEvent?.date,
              location: currentEvent?.location,
            }}
            isAdmin={false}
          />
        </Box>
      )}
      <StudentEditPopup />
    </Box>
  );
};

export default StudentProfileView;

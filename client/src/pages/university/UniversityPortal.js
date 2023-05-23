import { Avatar, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MdEdit, MdClose } from 'react-icons/md';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { RxDotsHorizontal } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb';
import AddStudentCard from './components/AddStudentCard';
import * as AppActions from '../../store/actions/AppActions';
import { Colors } from '../../values/colors';
import NoDataView from '../../components/NoDataView';
import EventCard from '../admin/components/EventCard';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 120,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const UniversityPortal = () => {
  const dispatch = useDispatch();
  const { studentList, userInfo } = useSelector((state) => state.AppReducer);
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  const handleClickEdit = () => {
    handleClose();
  };

  const handleClickDelete = () => {
    handleClose();
  };

  useEffect(() => {
    dispatch(AppActions.getStudents());
  }, []);

  return (
    <Box sx={{ m: 5, mt: 14 }}>
      <Breadcrumb
        title="Event Management"
        breadcrumb="Home/ University Portal/ Event Management"
      />
      <Box sx={{ my: 3, mx: 3 }}>
        <Typography variant="h3" fontWeight="400">
          Event Details
        </Typography>
        <EventCard
          eventItem={{
            eventTitle: userInfo.eventTitle,
            address: userInfo.address,
            date: userInfo.date,
            location: userInfo.location,
          }}
          isAdmin={false}
        />
      </Box>

      <Box sx={{ my: 3, mx: 3 }}>
        <Typography variant="h3" fontWeight="400">
          Add Student to Event
        </Typography>
        <AddStudentCard />
      </Box>

      <Box sx={{ my: 3, mx: 3 }}>
        <Typography variant="h3" fontWeight="400">
          Student List ({studentList.length})
        </Typography>
        {studentList && studentList.length > 0 ? (
          studentList.map((student) => (
            <Box
              // eslint-disable-next-line no-underscore-dangle
              key={student._id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 4,
                backgroundColor: Colors.white,
                borderRadius: 2,
                boxShadow: '0px 5px 90px 0px rgba(110, 123, 131, 0.09)',
                m: 2,
                p: 2,
              }}
            >
              <Box
                sx={{
                  flex: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Avatar alt={student.name} src={student.image} />
              </Box>
              <Typography variant="h5" fontWeight="400" sx={{ flex: 1 }}>
                <Typography variant="body2" fontWeight="400">
                  Name
                </Typography>
                {student.name ? student.name : '-'}
              </Typography>
              <Typography variant="h5" fontWeight="400" sx={{ flex: 2 }}>
                <Typography variant="body2" fontWeight="400">
                  Email Address
                </Typography>
                {student.email ? student.email : '-'}
              </Typography>
              <Typography variant="h5" fontWeight="400" sx={{ flex: 1 }}>
                <Typography variant="body2" fontWeight="400">
                  Phone Number
                </Typography>
                {student.phoneNo ? student.phoneNo : '-'}
              </Typography>
              <Typography variant="h5" fontWeight="400" sx={{ flex: 3 }}>
                <Typography variant="body2" fontWeight="400">
                  Address
                </Typography>
                {student.address ? student.address : '-'}
              </Typography>
              <Box
                sx={{
                  flex: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={anchorEl ? 'long-menu' : undefined}
                  aria-expanded={anchorEl ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
              </Box>
            </Box>
          ))
        ) : (
          <NoDataView />
        )}
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={anchorEl}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClickEdit} disableRipple>
            <MdEdit color={Colors.blueShade} style={{ marginRight: 10 }} />
            Edit
          </MenuItem>
          <MenuItem onClick={handleClickDelete} disableRipple>
            <MdClose color={Colors.cancelRed} style={{ marginRight: 10 }} />
            Delete
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <RxDotsHorizontal
              color={Colors.secondary}
              style={{ marginRight: 10 }}
            />
            More
          </MenuItem>
        </StyledMenu>
      </Box>
    </Box>
  );
};

export default UniversityPortal;

import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { MdDone, MdClose } from 'react-icons/md';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { RxDotsHorizontal } from 'react-icons/rx';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PropTypes from 'prop-types';
import { Colors } from '../../../values/colors';
import IMAGE from '../../../assets/Images/portfolio/portfolio-2.jpg';
import { useDispatch, useSelector } from 'react-redux';
import * as AppActions from '../../../store/actions/AppActions';

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

const EventCard = ({ eventItem, isAdmin = true }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(false);

  const { isLoading } = useSelector((state) => state.AppReducer);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  const handleClickVerify = async (type, id) => {
    await dispatch(AppActions.updateEvent({ type, id }));
    handleClose();
  };

  return (
    <Box
      sx={{
        my: 4,
        // mx: 15,
        backgroundColor: Colors.white,
        borderRadius: 2,
        boxShadow: '0px 5px 90px 0px rgba(110, 123, 131, 0.09)',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: Colors.silver,
          px: 2,
          py: 0.5,
          boxSizing: 'border-box',
        }}
      >
        <Typography>#123</Typography>
        <Typography>{eventItem?.date}</Typography>
        {isAdmin && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h5"
              fontWeight="400"
              sx={{
                color: Colors.white,
                backgroundColor:
                  eventItem?.isVerified === 'pending'
                    ? Colors.yellow
                    : eventItem?.isVerified === 'approved'
                    ? Colors.green
                    : Colors.cancelRed,
                px: 1,
                py: 0.2,
                borderRadius: 1,
              }}
            >
              {eventItem?.isVerified === 'pending'
                ? 'Pending'
                : eventItem?.isVerified === 'approved'
                ? 'Approved'
                : 'Rejected'}
            </Typography>
            {isLoading ? (
              <IconButton>
                <CircularProgress color="success" size={25} />
              </IconButton>
            ) : (
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
              <MenuItem
                onClick={() => handleClickVerify('approved', eventItem?._id)}
                disableRipple
              >
                <MdDone
                  color={Colors.approveGreen}
                  style={{ marginRight: 10 }}
                />
                Approve
              </MenuItem>
              <MenuItem
                onClick={() => handleClickVerify('reject', eventItem?._id)}
                disableRipple
              >
                <MdClose color={Colors.cancelRed} style={{ marginRight: 10 }} />
                Reject
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
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
          py: 1,
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            flex: 1,
            borderRadius: 2,
            width: 150,
            height: 150,
            backgroundImage: `url(${IMAGE})`,
            objectFit: 'contain',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            m: 1,
          }}
        />
        <Box
          sx={{
            flex: 3,
            m: 1,
            alignSelf: 'baseline',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 150,
          }}
        >
          <Typography>Event Name : {eventItem?.eventTitle}</Typography>
          <Typography>Address : {eventItem?.address}</Typography>
          <Typography>Date : {eventItem?.date}</Typography>
          <Typography>Location : {eventItem?.location}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

EventCard.propTypes = {
  eventItem: PropTypes.object.isRequired,
};

export default EventCard;

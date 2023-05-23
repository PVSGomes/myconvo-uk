import { Box, Checkbox, Typography } from '@mui/material';
import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MdEdit, MdClose } from 'react-icons/md';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { RxDotsHorizontal } from 'react-icons/rx';
import PropTypes from 'prop-types';
import { Colors } from '../../../values/colors';
import IMAGE from '../../../assets/Images/portfolio/portfolio-2.jpg';

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

const PackageCard = ({
  image,
  price,
  title,
  description,
  loading,
  onCheckboxChange,
  isAdmin = false,
}) => {
  const [checked, setChecked] = useState(false);

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

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onCheckboxChange(newChecked); // Pass the newChecked value to the parent component
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Box
      sx={{
        // my: 3,
        width: '20%',
        backgroundColor: Colors.white,
        borderRadius: 2,
        boxShadow: '0px 5px 90px 0px rgba(110, 123, 131, 0.29)',
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
        <Typography variant="h4">{title}</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {loading ? (
            <IconButton>
              <CircularProgress color="success" size={25} />
            </IconButton>
          ) : !isAdmin ? (
            <Checkbox
              {...label}
              defaultChecked
              checked={checked}
              onChange={handleCheckboxChange}
            />
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
      <Box
        sx={{
          height: 300,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          px: 2,
          py: 1,
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            borderRadius: 2,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image})`,
            objectFit: 'contain',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            m: 1,
          }}
        />
        <Box
          sx={{
            m: 1,
            gap: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant="h4"
            fontWeight="400"
            sx={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}
          >
            {description}
          </Typography>
          <Typography>$ {price}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

PackageCard.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool,
};

export default PackageCard;

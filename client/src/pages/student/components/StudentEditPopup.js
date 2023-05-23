import { Box, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiImageOn } from 'react-icons/ci';
import { LoadingButton } from '@mui/lab';
import CustomModal from '../../../components/CustomModel';
import * as AppActions from '../../../store/actions/AppActions';
import { Colors } from '../../../values/colors';
import CustomTextField from '../../../components/CustomTextField';
import ImageUploader from '../../../components/ImageUploader';

const StudentEditPopup = () => {
  const dispatch = useDispatch();
  const [student, setStudent] = useState({
    image: '',
    password: '',
    newPassword: '',
  });

  const [studentValidation, setStudentValidation] = useState({
    isImage: true,
    isPassword: true,
    isNewPassword: true,
    isPasswordMatch: true,
  });
  const { isStudentEditPopUpShow, isLoading } = useSelector(
    (state) => state.AppReducer
  );
  const handleOnchangeStudentDetails = (data, key) => {
    setStudent({ ...student, [key]: data });
  };

  const handleFileUpload = (url) => {
    handleOnchangeStudentDetails(url, 'image');
  };

  const handleClose = () => {
    dispatch(AppActions.showEditStudentPopup(false));
  };

  const handleClickEdit = async () => {
    const isImageValid = !!student.image;
    const isPasswordValid = !!student.password.trim();
    const isNewPasswordValid = !!student.newPassword.trim();
    const isPasswordMatch = student.newPassword.trim() === student.password.trim();
  
    if (!isImageValid || !isPasswordValid || !isNewPasswordValid || !isPasswordMatch) {
      setStudentValidation({
        isImage: isImageValid,
        isPassword: isPasswordValid,
        isNewPassword: isNewPasswordValid,
        isPasswordMatch: isPasswordMatch,
      });
      return;
    }
  
    await dispatch(AppActions.editStudent(student));
  };

  return (
    <CustomModal open={isStudentEditPopUpShow} onClose={handleClose}>
      <Typography variant="h3" fontWeight="400">
        Student Edit Details
      </Typography>
      <Typography variant="h4" sx={{ mt: 3, mx: 3 }} fontWeight="400">
        Order Summary
      </Typography>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            width: '30%',
            height: 200,
            boxSizing: 'border-box',
            backgroundColor: Colors.grey,
            border: !studentValidation.isImage
              ? `1px solid ${Colors.error}`
              : `1px solid ${Colors.greyDivider}`,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: student.image ? `url(${student.image})` : 'none',
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
          {!student.image ? (
            <CiImageOn size="50" color={Colors.greyText} />
          ) : null}
          <ImageUploader onFileUpload={handleFileUpload} />
        </Box>

        <Box
          component="form"
          sx={{
            gap: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexDirection: 'column',
            width: '50%',
            height: '100%',
          }}
        >
          <CustomTextField
            fullWidth
            id="outlined-basic-title"
            label="Full Name"
            variant="outlined"
            value={student.password}
            onChange={(e) =>
              handleOnchangeStudentDetails(e.target.value, 'password')
            }
            error={!studentValidation.isPassword}
            helperText={
              !studentValidation.isPassword && 'This field is required'
            }
          />
          <CustomTextField
            fullWidth
            id="outlined-basic-price"
            label="Email"
            variant="outlined"
            value={student.newPassword}
            onChange={(e) =>
              handleOnchangeStudentDetails(e.target.value, 'newPassword')
            }
            error={!studentValidation.isNewPassword}
            helperText={
              !studentValidation.isNewPassword && 'This field is required'
            }
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%',
            px: 4,
            py: 1,
          }}
        >
          <LoadingButton
            size="small"
            onClick={handleClickEdit}
            loading={isLoading}
            variant="contained"
            disabled={isLoading}
            sx={{
              width: '20%',
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
            Save Changes
          </LoadingButton>
        </Box>
      </Box>
    </CustomModal>
  );
};

export default StudentEditPopup;

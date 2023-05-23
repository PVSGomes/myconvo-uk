import React, { useCallback, useMemo, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { MdDone } from 'react-icons/md';
import { CiImageOn } from 'react-icons/ci';
import { LoadingButton } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../../../values/colors';
import CustomTextField from '../../../components/CustomTextField';
import * as AppActions from '../../../store/actions/AppActions';
import ImageUploader from '../../../components/ImageUploader';

const AddStudentCard = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (url) => {
    dispatch(AppActions.setStudentImage(url));
  };

  const {
    studentName,
    studentEmail,
    studentPhone,
    studentAddress,
    studentImage,
    isStudentName,
    isStudentEmail,
    isStudentPhone,
    isStudentAddress,
    isStudentImage,
  } = useSelector((state) => state.AppReducer);

  

  const hasErrors = useMemo(() => {
    return (
      !isStudentName ||
      !isStudentEmail ||
      !isStudentPhone ||
      !isStudentAddress ||
      !isStudentImage
    );
  }, [
    isStudentName,
    isStudentEmail,
    isStudentPhone,
    isStudentAddress,
    isStudentImage,
  ]);

  const handleValidations = async () => {
    const validationPromises = [];

    if (!studentName.trim()) {
      validationPromises.push(
        dispatch(AppActions.setStudentValidation(false, 'NAME'))
      );
    }

    if (!studentEmail.trim()) {
      validationPromises.push(
        dispatch(AppActions.setStudentValidation(false, 'EMAIL'))
      );
    }

    if (!studentPhone.trim()) {
      validationPromises.push(
        dispatch(AppActions.setStudentValidation(false, 'PHONE'))
      );
    }

    if (!studentAddress.trim()) {
      validationPromises.push(
        dispatch(AppActions.setStudentValidation(false, 'ADDRESS'))
      );
    }

    if (!studentImage) {
      validationPromises.push(
        dispatch(AppActions.setStudentValidation(false, 'IMAGE'))
      );
    }

    await Promise.all(validationPromises);
  };

  // Usage example
  const handleFormSubmit = async () => {
    await handleValidations();
    if (!hasErrors) {
      setLoading(true);
      await dispatch(AppActions.createStudent());
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        my: 3,
        width: '80%',
        height: '480px',
        backgroundColor: Colors.white,
        borderRadius: 2,
        boxShadow: '0px 5px 90px 0px rgba(110, 123, 131, 0.29)',
        overflow: 'hidden',
        p: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '80%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            width: '30%',
            height: '100%',
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
            backgroundImage: studentImage ? `url(${studentImage})` : 'none',
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
          component="form"
          sx={{
            flex: 2,
            alignSelf: 'baseline',
            gap: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <CustomTextField
            fullWidth
            id="outlined-basic-title"
            label="Full Name"
            variant="outlined"
            value={studentName}
            onChange={(e) =>
              dispatch(AppActions.setStudentName(e.target.value))
            }
            error={!isStudentName}
            helperText={!isStudentName && 'This field is required'}
          />
          <CustomTextField
            fullWidth
            id="outlined-basic-price"
            label="Email"
            variant="outlined"
            value={studentEmail}
            onChange={(e) =>
              dispatch(AppActions.setStudentEmail(e.target.value))
            }
            error={!isStudentEmail}
            helperText={!isStudentEmail && 'This field is required'}
          />
          <CustomTextField
            fullWidth
            id="outlined-multiline-static"
            label="Phone"
            variant="outlined"
            value={studentPhone}
            onChange={(e) =>
              dispatch(AppActions.setStudentPhone(e.target.value))
            }
            error={!isStudentPhone}
            helperText={!isStudentPhone && 'This field is required'}
          />
          <CustomTextField
            fullWidth
            id="outlined-multiline-static"
            label="Address"
            multiline
            rows={4}
            variant="outlined"
            value={studentAddress}
            onChange={(e) =>
              dispatch(AppActions.setStudentAddress(e.target.value))
            }
            error={!isStudentAddress}
            helperText={!isStudentAddress && 'This field is required'}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 2,
        }}
      >
        <Typography
          sx={{
            color: hasErrors ? Colors.error : Colors.black,
          }}
        >
          Enter details to create student
        </Typography>
        <LoadingButton
          size="small"
          onClick={handleFormSubmit}
          loading={loading}
          variant="contained"
          disabled={loading || hasErrors}
          startIcon={<MdDone color={Colors.white} />}
          sx={{
            width: '20%',
            height: '40px',
            color: Colors.white,
            backgroundColor: Colors.secondaryLight,
            '&:hover': {
              backgroundColor: Colors.secondaryLight,
            },
          }}
        >
          Add Student
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default AddStudentCard;

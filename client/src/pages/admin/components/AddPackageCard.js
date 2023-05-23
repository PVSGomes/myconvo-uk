import React, { useCallback, useMemo, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { MdDone } from 'react-icons/md';
import { CiImageOn } from 'react-icons/ci';
import { LoadingButton } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../../../values/colors';
import CustomTextField from '../../../components/CustomTextField';
import * as PackageActions from '../../../store/actions/PackageActions';
import ImageUploader from '../../../components/ImageUploader';

const AddPackageCard = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (url) => {
    dispatch(PackageActions.setPackageImage(url));
  };

  const {
    packageTitle,
    packageDescription,
    packagePrice,
    packageImage,
    isPackageTitle,
    isPackageDescription,
    isPackagePrice,
    isPackageImage,
  } = useSelector((state) => state.PackageReducer);

  const hasErrors = useMemo(() => {
    return (
      !isPackageTitle ||
      !isPackageDescription ||
      !isPackagePrice ||
      !isPackageImage
    );
  }, [isPackageTitle, isPackageDescription, isPackagePrice, isPackageImage]);

  const handleValidations = async () => {
    const validationPromises = [];

    if (!packageTitle.trim()) {
      validationPromises.push(
        dispatch(PackageActions.setPackageValidation(false, 'TITLE'))
      );
    }

    if (!packageDescription.trim()) {
      validationPromises.push(
        dispatch(PackageActions.setPackageValidation(false, 'DESCRIPTION'))
      );
    }

    if (!packagePrice.trim()) {
      validationPromises.push(
        dispatch(PackageActions.setPackageValidation(false, 'PRICE'))
      );
    }

    if (!packageImage) {
      validationPromises.push(
        dispatch(PackageActions.setPackageValidation(false, 'IMAGE'))
      );
    }

    await Promise.all(validationPromises);
  };

  // Usage example
  const handleFormSubmit = async () => {
    await handleValidations();
    if (!hasErrors) {
      setLoading(true);
      await dispatch(PackageActions.createPackage());
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        my: 3,
        width: '80%',
        height: '360px',
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
            border: !isPackageImage
              ? `1px solid ${Colors.error}`
              : `1px solid ${Colors.greyDivider}`,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: packageImage ? `url(${packageImage})` : 'none',
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
          {!packageImage ? (
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
            label="Package Name"
            variant="outlined"
            value={packageTitle}
            onChange={(e) =>
              dispatch(PackageActions.setPackageTitle(e.target.value))
            }
            error={!isPackageTitle}
            helperText={!isPackageTitle && 'This field is required'}
          />
          <CustomTextField
            fullWidth
            id="outlined-basic-price"
            label="$ Price"
            variant="outlined"
            value={packagePrice}
            onChange={(e) =>
              dispatch(PackageActions.setPackagePrice(e.target.value))
            }
            error={!isPackagePrice}
            helperText={!isPackagePrice && 'This field is required'}
          />
          <CustomTextField
            fullWidth
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            value={packageDescription}
            onChange={(e) =>
              dispatch(PackageActions.setPackageDescription(e.target.value))
            }
            error={!isPackageDescription}
            helperText={!isPackageDescription && 'This field is required'}
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
          Enter details to create package
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
          Save Package
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default AddPackageCard;

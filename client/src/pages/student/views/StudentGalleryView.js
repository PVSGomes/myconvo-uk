import React, { useState } from 'react';
import { Box, Grid, Checkbox, Typography } from '@mui/material';
import { AiOutlineSave } from 'react-icons/ai';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import JSZip from 'jszip';
import { LoadingButton } from '@mui/lab';
import { useDispatch } from 'react-redux';
import Breadcrumb from '../../../components/Breadcrumb';
import { GALLERY_ITEMS } from '../../../constants';
import { Colors } from '../../../values/colors';
import NoDataView from '../../../components/NoDataView';
import * as AppActions from '../../../store/actions/AppActions';

const StudentGalleryView = () => {
  const dispatch = useDispatch();
  const [selectedImages, setSelectedImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageSelect = (imageId) => {
    setSelectedImages((prevSelected) => {
      if (prevSelected.includes(imageId)) {
        return prevSelected.filter((id) => id !== imageId);
      }
      return [...prevSelected, imageId];
    });
  };

  const handleDownloadSelected = () => {
    setIsUploading(true);
    const zip = new JSZip();
    const imagePromises = [];

    selectedImages.forEach((imageId) => {
      const selectedImage = GALLERY_ITEMS.find((item) => item.id === imageId);
      if (selectedImage) {
        const imagePromise = fetch(selectedImage.img)
          .then((response) => response.blob())
          .then((blob) => {
            zip.file(`${selectedImage.title}.jpg`, blob);
          });
        imagePromises.push(imagePromise);
      }
    });

    Promise.all(imagePromises)
      .then(() => {
        zip.generateAsync({ type: 'blob' }).then((content) => {
          const anchor = document.createElement('a');
          anchor.style.display = 'none';

          anchor.href = URL.createObjectURL(content);
          anchor.download = 'selected_images.zip';
          document.body.appendChild(anchor);
          anchor.click();
          document.body.removeChild(anchor);
          setIsUploading(false);
          dispatch(
            AppActions.setOpenSnackBar(true, {
              snackbarMessage: 'Successfully Downloaded',
              snackbarSeverity: 'success',
              snackbarAutoHideDuration: 5000,
            })
          );
        });
      })

      .catch((error) => {
        setIsUploading(false);
        dispatch(
          AppActions.setOpenSnackBar(true, {
            snackbarMessage: 'Something went wrong generating zip',
            snackbarSeverity: 'error',
            snackbarAutoHideDuration: 5000,
          })
        );
        console.error('Error generating zip:', error);
      });
  };

  return (
    <Box sx={{ m: 4 }}>
      <Breadcrumb title="Gallery" breadcrumb="Home/ Student Portal/ Gallery" />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          mt: 4,
        }}
      >
        <Typography variant="h3" fontWeight="400">
          Select Images to Download ({selectedImages.length})
        </Typography>
        <LoadingButton
          size="small"
          onClick={handleDownloadSelected}
          variant="contained"
          loading={isUploading}
          disabled={selectedImages.length <= 0 || isUploading}
          startIcon={
            <AiOutlineSave
              color={selectedImages.length <= 0 ? 'disable' : Colors.white}
            />
          }
          sx={{
            width: '15%',
            height: '40px',
            color: Colors.white,
            fontSize: 13,
            backgroundColor: Colors.secondaryLight,
            '&:hover': {
              backgroundColor: Colors.secondaryLight,
            },
          }}
        >
          Save Images
        </LoadingButton>
      </Box>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {GALLERY_ITEMS && GALLERY_ITEMS.length > 0 ? (
          GALLERY_ITEMS.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '200px',
                  borderRadius: '4px',
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease, border-radius 0.3s ease',
                    transform: selectedImages.includes(item.id)
                      ? 'scale(0.9)'
                      : 'scale(1)',
                    borderRadius: selectedImages.includes(item.id)
                      ? '12px'
                      : '4px',
                  }}
                />

                <Checkbox
                  checked={selectedImages.includes(item.id)}
                  onChange={() => handleImageSelect(item.id)}
                  icon={
                    <CheckCircleIcon
                      sx={{
                        color: '#c7c7c7b3',
                      }}
                    />
                  }
                  checkedIcon={
                    <CheckCircleIcon
                      sx={{
                        color: Colors.discountBlue,
                      }}
                    />
                  }
                  sx={{
                    position: 'absolute',
                    top: selectedImages.includes(item.id) ? '12px' : '8px',
                    right: selectedImages.includes(item.id) ? '24px' : '8px',
                  }}
                />
              </Box>
            </Grid>
          ))
        ) : (
          <NoDataView />
        )}
      </Grid>
    </Box>
  );
};

export default StudentGalleryView;

import React from 'react';
import { Uploader } from 'uploader'; // Installed by "react-uploader".
import { UploadButton } from 'react-uploader';
import { Button } from '@mui/material';
import { PropTypes } from 'prop-types';
import { Colors } from '../values/colors';

const uploader = Uploader({
  apiKey: 'free',
});
const options = { multi: true };

function ImageUploader({ onFileUpload }) {
  const getFilesUrl = (files) => {
    const fileUrls = files.map((file) => file.fileUrl);
    const URL = fileUrls.length > 0 ? fileUrls[0] : null;
    if (onFileUpload) {
      onFileUpload(URL);
    }
  };

  return (
    <div>
      <UploadButton
        uploader={uploader}
        options={options}
        onComplete={getFilesUrl}
      >
        {({ onClick }) => (
          <Button
            sx={{
              width: 200,
              height: '40px',
              color: Colors.greyText,
              fontSize: 13,
              alignSelf: 'flex-end',
              backgroundColor: Colors.grey,
              borderWidth: 1,
              border: `1px solid ${Colors.greyDivider}`,
              '&:hover': {
                backgroundColor: Colors.grey,
              },
            }}
            onClick={onClick}
          >
            Choose an Image
          </Button>
        )}
      </UploadButton>
    </div>
  );
}
ImageUploader.propTypes = {
  onFileUpload: PropTypes.func,
};

export default ImageUploader;

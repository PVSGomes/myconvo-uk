import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { RiMapPinLine } from 'react-icons/ri';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineMail } from 'react-icons/md';
import { Colors } from '../../../values/colors';
import SubTitleBox from '../components/SubTitleBox';
import CustomTextField from '../../../components/CustomTextField';

const ContactUsView = () => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.white,
        py: 4,
        height: '100%',
      }}
    >
      <SubTitleBox
        title="CONTACT"
        description="No matter which method you choose, we value your input and strive to provide excellent customer service, Your satisfaction is important to us, and we look forward to assisting you."
      />
      <Box
        sx={{
          px: 10,
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 3,
          my: 5,
        }}
      >
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 1,
              boxShadow: '0px 5px 90px 0px rgba(110, 123, 131, 0.09)',
              py: 3,
            }}
          >
            <Typography
              variant="h3"
              color={Colors.black}
              fontWeight="800"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  padding: '12px',
                  borderRadius: '50px',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderStyle: 'dashed',
                  borderColor: Colors.yellow,
                  borderWidth: 0.5,
                }}
              >
                <RiMapPinLine size="25" color={Colors.yellow} />
              </Box>
              Our Address
            </Typography>
            <Typography variant="h5" color={Colors.greyText} fontWeight="400">
              245 Flower Street, London, UK <br />
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              mt: 3,
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 1,
                boxShadow: '0px 5px 90px 0px rgba(110, 123, 131, 0.09)',
                py: 3,
              }}
            >
              <Typography
                variant="h3"
                color={Colors.black}
                fontWeight="800"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    padding: '12px',
                    borderRadius: '50px',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderStyle: 'dashed',
                    borderColor: Colors.yellow,
                    borderWidth: 0.5,
                  }}
                >
                  <MdOutlineMail size="25" color={Colors.yellow} />
                </Box>
                Email Us
              </Typography>
              <Typography variant="h5" color={Colors.greyText} fontWeight="400">
                info@myconvouk.com <br />
                contact@myconvouk.com
              </Typography>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 1,
                boxShadow: '0px 5px 90px 0px rgba(110, 123, 131, 0.09)',
                py: 3,
              }}
            >
              <Typography
                variant="h3"
                color={Colors.black}
                fontWeight="800"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    padding: '12px',
                    borderRadius: '50px',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderStyle: 'dashed',
                    borderColor: Colors.yellow,
                    borderWidth: 0.5,
                  }}
                >
                  <BiPhoneCall size="25" color={Colors.yellow} />
                </Box>
                Call Us
              </Typography>
              <Typography variant="h5" color={Colors.greyText} fontWeight="400">
                +44 20 1234 5678
                <br />
                +44 20 9876 5432
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          component="form"
          sx={{
            flex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 1,
            boxShadow: '0px 5px 90px 0px rgba(110, 123, 131, 0.09)',
            py: 3,
            px: 4,
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <CustomTextField
              fullWidth
              id="outlined-basic"
              label="Your Name"
              variant="outlined"
            />
            <CustomTextField
              fullWidth
              id="outlined-basic"
              label="Your Email"
              variant="outlined"
            />
          </Box>
          <CustomTextField
            fullWidth
            id="outlined-basic"
            label="Subject"
            variant="outlined"
          />
          <CustomTextField
            fullWidth
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            sx={{
              width: 'fit-content',
              color: Colors.white,
              borderColor: Colors.yellow,
              backgroundColor: Colors.yellow,
              fontSize: 18,
              px: 3,
              my: 2,
              mb: 5.5,
              borderWidth: 2,
              borderRadius: 60,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: Colors.yellow,
                color: Colors.white,
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUsView;

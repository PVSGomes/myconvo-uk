import { styled } from '@mui/system';
import { TextField } from '@mui/material';
import { Colors } from '../values/colors';

const CustomTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: Colors.yellow, // Change hover border color
    },
    '&.Mui-focused fieldset': {
      borderColor: Colors.yellow, // Change focus border color
    },
  },
  '& .MuiInputLabel-root': {
    color: Colors.greyText, // Change label color
    fontSize: 15,
    fontWeight: '400',
  },
}));

export default CustomTextField;

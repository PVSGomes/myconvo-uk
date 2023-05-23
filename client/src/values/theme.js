import { createTheme } from '@mui/material/styles';
import { Colors } from './colors';
import { Fonts } from './fonts';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: Colors.greyLight,
    },
    primary: {
      main: Colors.black,
      light: Colors.primaryLight,
      dark: Colors.primaryDark,
      contrastText: Colors.primaryText,
    },
    secondary: {
      main: Colors.secondary,
      light: Colors.secondaryLight,
      dark: Colors.secondaryDark,
      contrastText: Colors.secondaryText,
    },
    error: {
      main: Colors.error,
      light: Colors.errorLight,
      dark: Colors.errorDark,
      contrastText: Colors.errorText,
    },
    white: {
      main: Colors.white,
      contrastText: Colors.black,
    },
    black: {
      main: Colors.black,
      contrastText: Colors.white,
    },
    specialBlue: {
      main: Colors.blueText,
      light: Colors.blueHighlight,
      dark: Colors.secondary,
      contrastText: Colors.white,
    },
    lightBlue: {
      main: Colors.blueLight,
      light: Colors.white,
      dark: Colors.blueText,
      contrastText: Colors.secondary,
    },
    info: {
      main: Colors.infoBg,
      light: Colors.white,
      dark: Colors.blueText,
      contrastText: Colors.secondary,
    },
    success: {
      main: Colors.green,
      light: Colors.greenLight,
      dark: Colors.green,
      contrastText: Colors.white,
    },
  },
  typography: {
    fontFamily: Fonts.nunitoSans,
    fontSize: 14,
    fontWeight: '400',
    title:{
      fontFamily: Fonts.nunitoSans,
      fontSize: 45,
      fontWeight: '800',
    },
    subtitle:{
      fontFamily: Fonts.nunitoSans,
      fontSize: 35,
      fontWeight: '800',
    },
    h1: {
      fontFamily: Fonts.nunitoSans,
      fontSize: 28,
      fontWeight: '700',
    },
    h2: {
      fontFamily: Fonts.nunitoSans,
      fontSize: 24,
      fontWeight: '700',
    },
    h3: {
      fontFamily: Fonts.nunitoSans,
      fontSize: 20,
      fontWeight: '700',
    },
    h4: {
      fontFamily: Fonts.nunitoSans,
      fontSize: 16,
      fontWeight: '600',
    },
    h5: {
      fontFamily: Fonts.nunitoSans,
      fontSize: 16,
    },
    h6: {
      fontFamily: Fonts.nunitoSans,
      fontSize: 14,
    },
    body1: {
      fontFamily: Fonts.nunitoSans,
      fontSize: 15,
      fontWeight: 500,
    },
    body2: {
      fontFamily: Fonts.nunitoSans,
      fontSize: 12,
      fontWeight: 400,
    },
    body3: {
      fontFamily: Fonts.nunitoSans,
      fontSize: 18,
      fontWeight: 400,
    },
    body4: {
      fontFamily: Fonts.nunitoSans,
      fontSize: 18,
      fontWeight: 800,
    },
    body5: {
      fontFamily: Fonts.nunitoSans,
      fontSize: 14,
      fontWeight: 400,
    },
    body6: {
      fontFamily: Fonts.nunitoSans,
      fontSize: 14,
      fontWeight: 800,
    },
    small: {
      fontFamily: Fonts.nunitoSans,
      fontSize: 11,
      fontWeight: 300,
    },
  },
  shape: {
    borderRadius: 4,
  },
  shadows: [
    'none',
    '0px 1px 1px rgba(0,0,0,0.05)',
    '0px 1px 1px rgba(0,0,0,0.1)',
    '0px 2px 2px rgba(0,0,0,0.1)',
    '0px 3px 3px rgba(0,0,0,0.1)',
    '0px 3px 6px rgba(0,0,0,0.15)',
    '0px 5px 6px rgba(0,0,0,0.1)',
    '0px 6px 6px rgba(0,0,0,0.1)',
    '0px 7px 7px rgba(0,0,0,0.1)',
    '0px 8px 8px rgba(0,0,0,0.1)',
    '0px 9px 9px rgba(0,0,0,0.1)',
    '0px 0px 10px rgba(0,0,0,0.1)',
    '0px 10px 10px rgba(0,0,0,0.1)',
    '0px 10px 10px rgba(0,0,0,0.12)',
    '0px 10px 10px rgba(0,0,0,0.14)',
    '0px 10px 10px rgba(0,0,0,0.16)',
    '0px 10px 10px rgba(0,0,0,0.18)',
    '0px 10px 10px rgba(0,0,0,0.2)',
    '0px 10px 10px rgba(0,0,0,0.2)',
    '0px 10px 10px rgba(0,0,0,0.2)',
    '0px 10px 10px rgba(0,0,0,0.2)',
    '0px 10px 10px rgba(0,0,0,0.2)',
    '0px 10px 10px rgba(0,0,0,0.2)',
    '0px 10px 10px rgba(0,0,0,0.2)',
    '0px 10px 10px rgba(0,0,0,0.2)',
  ],
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: Fonts.nunitoSans,
          fontSize: 12,
          fontWeight: '400',
        },
      },
    },
  },
});
export default theme;

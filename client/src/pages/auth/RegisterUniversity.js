import styled from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import BadgeIcon from "@mui/icons-material/Badge";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import api from "../api";
// import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode'
// import { login, userInfo } from '../redux/user';
import { useNavigate } from "react-router-dom";
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Navbar from "../../components/ResponsiveAppBar";
import Api from '../../Api'
// import API from './../api'
const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MainContainer = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #fcfddf;
  background-size: cover;
`;

const Container = styled.div`
  width: 100vw;
  height: 150vh;
  background-color: #fcfddf;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 600px;
  padding: 20px;
  background: #fbfcc7;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  align:left;
  display: 'flex',
  justifyContent: 'flex-start',
  width: 100%
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.div`
  font-size: 12px;
  margin: 20px 0px;
  width: 500px;
`;

const SignUpSpan = styled.span`
  margin-left: 5px;
  color: #956c6e;
`;

const SignUpDiv = styled.div`
  width: 500px
  font-size: 12px;
  display: flex;
  justify-content: center;
  margin-top:15px;
`;

const Button = styled.button`
  width: 500px;
  border: none;
  padding: 15px 20px;
  background-color: #cacf0e;
  color:black;
  font-size: 17px;
  font-weight:600;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const RadioButtonContainer = styled.div`
  flex: 1;
  min-width: 80%;
  margin: 10px 10px 0px 10px;
  padding: 6px 10px 6px 10px;

  border: 1.5px solid #fff;
  border-radius: 3px;
  display: flex;
`;

const RadioInput = styled.div`
  display: flex;
  margin: 0 10px;
`;

const LogoImg = styled.img`
  width: 100px;
  position: absolute;
  top: 5px;
  left: 5px;
  // background-color: white;
`;

const CartImg = styled.img`
  width: 40px;
`;

const OrImg = styled.img`
  width: 500px;
  margin: 15px 0;
`;

const SocialImg = styled.img`
  width: 200px;
  margin: 15px 0;
`;

const FlexBox = styled.div`
  display: flex;
  width: "40%";
`;

const RegisterMother = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phoneNo: "",
    userType: "university",
    password: "",
    address: "",
    date: dayjs("2022-04-17"),
    time: "",
    eventTitle: "",
    location: "",
    isVerified: "pending",
  });

  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
  const [confirmPassword, setConfirmPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState("");
  const [snackbarMsg, setSnackbarMsg] = useState("");
    let navigate = useNavigate();
  //   const dispatch = useDispatch();

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("userDetails:::", userDetails);
    if (
      userDetails.name !== "" &&
      userDetails.email !== "" &&
      userDetails.password !== "" &&
      userDetails.date !== "" &&
      userDetails.address !== "" &&
      userDetails.phoneNo !== "" &&
      userDetails.time !== "" &&
      userDetails.location !== "" &&
      userDetails.eventTitle !== ""
    ) {
      if (!isValidEmail(userDetails.email)) {
        setSnackbarType("error");
        setSnackbarMsg("Please enter a valid email");
        handleOpenSnackbar();
      } else {
        try {
          const result = await Api.post("/user/create", userDetails);
          console.log("result:::::::", result);
          // let decodedToken = jwt_decode(result.data.token)
          localStorage.setItem('token', result.data.token)
          localStorage.setItem('userInfo', JSON.stringify(result.data.userDetails))
          // dispatch(login({ 'fullName': decodedToken.fullName, 'email': decodedToken.email }))
          // dispatch(userInfo(result.data.userDetails))
          setUserDetails({
            name: "",
            email: "",
            phoneNo: "",
            userType: "university",
            password: "",
            address: "",
            date: dayjs("2022-04-17"),
            time: "",
            eventTitle: "",
            location: "",
          });

          setSnackbarType("success");
          setSnackbarMsg("User Created Successfully");
          handleOpenSnackbar();
          navigate('/')

        } catch (error) {
          setSnackbarType("error");
          setSnackbarMsg(error.response.data.message);
          handleOpenSnackbar();
        }
      }

    } else {
      setSnackbarType("error");
      setSnackbarMsg("Please fill all the fields");
      handleOpenSnackbar();
    }
  };

  return (
    <MainContainer>
      <Container>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarType}
            sx={{ width: "100%" }}
          >
            {snackbarMsg}
          </Alert>
        </Snackbar>
        <Wrapper>
          <Title>REGISTER UNIVERSITY</Title>

          <TextField
            label="University Name"
            id="name"
            autoComplete="off"
            value={userDetails.name}
            onChange={(e) => {
              setUserDetails({ ...userDetails, name: e.target.value });
            }}
            sx={{
              "& .MuiInputBase-root": {
                width: 500,
              },

              input: { color: "black", marginLeft: "8px" },
              m: 1,
              fieldset: { borderColor: "black" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "black",
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
            InputProps={{
              sx: {
                width: "100%",
              },
              startAdornment: <BadgeIcon style={{ color: "black" }} />,
            }}
          />
          <TextField
            label="Address"
            id="fullName"
            autoComplete="off"
            value={userDetails.address}
            onChange={(e) => {
              setUserDetails({ ...userDetails, address: e.target.value });
            }}
            sx={{
              "& .MuiInputBase-root": {
                width: 500,
              },

              input: { color: "black", marginLeft: "8px" },
              m: 1,
              fieldset: { borderColor: "black" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "black",
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
            InputProps={{
              sx: {
                width: "100%",
              },
              startAdornment: <HomeIcon style={{ color: "black" }} />,
            }}
          />

          <TextField
            label="Phone Number"
            id="phoneNo"
            type="tel"
            autoComplete="off"
            value={userDetails.phoneNo}
            onChange={(e) => {
              setUserDetails({ ...userDetails, phoneNo: e.target.value });
            }}
            sx={{
              "& .MuiInputBase-root": {
                width: 500,
              },

              input: { color: "black", marginLeft: "8px" },
              m: 1,
              fieldset: { borderColor: "black" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "black",
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
            InputProps={{
              sx: {
                width: "100%",
              },
              startAdornment: <CallIcon style={{ color: "black" }} />,
            }}
          />

          <TextField
            label="E-mail"
            onChange={(e) => {
              setUserDetails({ ...userDetails, email: e.target.value });
            }}
            value={userDetails.email}
            type="email"
            id="email"
            autoComplete="off"
            sx={{
              "& .MuiInputBase-root": {
                width: 500,
              },
              input: { color: "black", marginLeft: "8px" },
              m: 1,
              fieldset: { borderColor: "black" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "black",
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
            InputProps={{
              sx: {
                width: "100%",
              },
              startAdornment: <MailOutlineIcon style={{ color: "black" }} />,
            }}
          />

          <TextField
            type="password"
            label="Password"
            onChange={(e) => {
              setUserDetails({ ...userDetails, password: e.target.value });
            }}
            id="password"
            value={userDetails.password}
            sx={{
              "& .MuiInputBase-root": {
                width: 500,
              },
              input: { color: "black", marginLeft: "8px" },
              m: 1,
              fieldset: { borderColor: "black" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "black",
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
            InputProps={{
              sx: {
                width: "100%",
              },
              startAdornment: <KeyIcon style={{ color: "black" }} />,
            }}
          />
          <SubTitle>Event Details</SubTitle>


          <TextField
            label="Event Title"
            id="eventTitle"
            autoComplete="off"
            value={userDetails.eventTitle}
            onChange={(e) => {
              setUserDetails({ ...userDetails, eventTitle: e.target.value });
            }}
            sx={{
              "& .MuiInputBase-root": {
                width: 500,
              },

              input: { color: "black", marginLeft: "8px" },
              m: 1,
              fieldset: { borderColor: "black" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "black",
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
            InputProps={{
              sx: {
                width: "100%",
              },
              startAdornment: <SchoolIcon style={{ color: "black" }} />,
            }}
          />
          <TextField
            label="Location"
            id="location"
            autoComplete="off"
            value={userDetails.location}
            onChange={(e) => {
              setUserDetails({ ...userDetails, location: e.target.value });
            }}
            sx={{
              "& .MuiInputBase-root": {
                width: 500,
              },

              input: { color: "black", marginLeft: "8px" },
              m: 1,
              fieldset: { borderColor: "black" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "black",
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
            InputProps={{
              sx: {
                width: "100%",
              },
              startAdornment: <LocationOnIcon style={{ color: "black" }} />,
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                label="Date"
                onChange={(newValue) => {
                  setUserDetails({ ...userDetails, date: newValue });
                }}
                value={userDetails.date}
                sx={{
                  "& .MuiInputBase-root": {
                    width: 500,
                  },

                  input: {
                    color: "black",
                    marginLeft: "8px",
                    borderColor: "black",
                  },
                  m: 1,
                  fieldset: { borderColor: "black" },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
                InputLabelProps={{
                  style: { color: "#000", borderColor: "black" },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker', 'TimePicker']}>

              <TimePicker
                label="Time"
                value={userDetails.time}
                onChange={(newValue) => setUserDetails({ ...userDetails, time: newValue })}
                sx={{
                  "& .MuiInputBase-root": {
                    width: 500,
                  },

                  input: {
                    color: "black",
                    marginLeft: "8px",
                    borderColor: "black",
                  },
                  m: 1,
                  fieldset: { borderColor: "black" },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
                InputLabelProps={{
                  style: { color: "#000", borderColor: "black" },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>

          <ButtonContainer>
            {/* <Button onClick={(e) => handleSubmit(e)}>SIGN UP</Button> */}
            <Button onClick={(e) => handleSubmit(e)}>Register</Button>
          </ButtonContainer>
          <SignUpDiv>
            Already have an account
            <Link style={{ textDecoration: "none" }} to="/login">
              {" "}
              <SignUpSpan>Log In</SignUpSpan>
            </Link>
          </SignUpDiv>
        </Wrapper>
      </Container>
    </MainContainer>
  );
};

export default RegisterMother;

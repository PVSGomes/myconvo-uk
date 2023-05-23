/* eslint no-use-before-define: 0 */
import styled from "styled-components";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import React, { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import jwt_decode from 'jwt-decode'
// import API from './../api'
// import { useSelector, useDispatch } from 'react-redux';
// import { login, userInfo } from '../redux/user';
// import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/ResponsiveAppBar";
// import api from "../api";
// import { useSelector, useDispatch } from 'react-redux';
// import { login, userInfo } from '../redux/user';
import axios from 'axios'
import * as AppActions from '../../store/actions/AppActions'
import { useDispatch } from "react-redux";

const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fcfddf;
  background-size: cover;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
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
  width: 500px
`;

const LogInSpan = styled.span`
  margin-left: 5px;
  color: #956C6E;
`;

const LogInDiv = styled.div`
  width: 500px
  font-size: 12px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
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
  margin-top:10px;
`;

const RadioButtonContainer = styled.div`
  flex: 1;
  min-width: 80%;
  margin: 20px 10px 0px 0px;
  padding: 10px;  
  border:1px solid #767676;
  border-radius: 3px; 
  display: flex;
`;

const RadioInput = styled.div`
  display: flex;
  margin: 0 10px
`;

const LogoImg = styled.img`
  width: 100px;
  position: absolute;
  top: 5px;
  left: 5px;
  // background-color: white;
`;

const CartImg = styled.img`
  width: 120px;
`;

const OrImg = styled.img`
  width: 500px;
  margin: 15px 0;
`;


const SocialImg = styled.img`
  width: 200px;
  margin: 15px 0;
`;


const Login = () => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" })
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState("");
  const [snackbarMsg, setSnackbarMsg] = useState("");
  //   const user = useSelector((state) => state.user)
  //   const dispatch = useDispatch();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("userDetails:::", userDetails);

    if (userDetails.password !== "" && userDetails.email !== "") {

      if (!isValidEmail(userDetails.email)) {
        setSnackbarType("error")
        setSnackbarMsg("Please enter a valid email")
        handleOpenSnackbar()
      } else {
        try {
          console.log("userDetails:::", userDetails);

          const result = await axios.post("http://localhost:5000/api/user/validate",  userDetails)
          console.log("result", result)

          if (result.data.userDetails.userType === "university") {
            if (result.data.userDetails.isVerified && result.data.userDetails.isVerified == "approved") {
              setSnackbarType("success")
              setSnackbarMsg("Logged In Successfully")
              handleOpenSnackbar()
              // let decodedToken = jwt_decode(result.data.token)
              localStorage.setItem('token', result.data.token)
              localStorage.setItem('userInfo', JSON.stringify(result.data.userDetails))
              // dispatch(login({ 'fullName': decodedToken.fullName, 'email': decodedToken.email }))
              // dispatch(userInfo(result.data.userDetails))
              navigate('/university')
              dispatch(AppActions.setUserInfo(result.data.userDetails))
            }
            else if (result.data.userDetails.isVerified && result.data.userDetails.isVerified == "rejected") {
              setSnackbarType("error")
              setSnackbarMsg("Your account request has been rejected by the admin")
              handleOpenSnackbar()

            }
            else {
              setSnackbarType("warning")
              setSnackbarMsg("Your account request is still processing")
              handleOpenSnackbar()
            }
          }
          else {
            setSnackbarType("success")
            setSnackbarMsg("Logged In Successfully")
            handleOpenSnackbar()
            // let decodedToken = jwt_decode(result.data.token)
            localStorage.setItem('token', result.data.token)
            localStorage.setItem('userInfo', JSON.stringify(result.data.userDetails))
            // dispatch(login({ 'fullName': decodedToken.fullName, 'email': decodedToken.email }))
            // dispatch(userInfo(result.data.userDetails))
            dispatch(AppActions.setUserInfo(result.data.userDetails))
            navigate('/')
          }

        } catch (error) {
          console.log("error", error)
          setSnackbarType("error")
          setSnackbarMsg(error.response.data)
          handleOpenSnackbar()
        }
      }

    }
    else {
      setSnackbarType("error")
      setSnackbarMsg("Please fill all the fields")
      handleOpenSnackbar()
    }

  };

  return (
    <MainContainer>
      <Container>
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity={snackbarType} sx={{ width: '100%' }}>
            {snackbarMsg}
          </Alert>
        </Snackbar>
        <Wrapper>
          <Title>LOG IN</Title>
          <TextField
            label="E-mail"
            onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}
            value={userDetails.email}
            type='email'
            id="email"
            autoComplete='off'
            sx={{
              "& .MuiInputBase-root": {
                width: 500
              },
              input: { color: 'black', marginLeft: '8px' },
              m: 1, fieldset: { borderColor: "black" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "black"
                }
              }
            }}
            InputLabelProps={{
              style: { color: '#000' },
            }}
            InputProps={{
              sx: {
                width: '100%'
              },
              startAdornment: <MailOutlineIcon style={{ color: 'black' }} />,
            }}
          />
          <TextField
            type='password'
            value={userDetails.password}
            onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
            label="Password"
            id="password"
            sx={{
              "& .MuiInputBase-root": {
                width: 500
              },
              input: { color: 'black', marginLeft: '8px' },
              m: 1, fieldset: { borderColor: "black" },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "black"
                }
              }
            }}
            InputLabelProps={{
              style: { color: '#000' },
            }}
            InputProps={{
              sx: {
                width: '100%'
              },
              startAdornment: <KeyIcon style={{ color: 'black' }} />,
            }}
          />
          <ButtonContainer>
            <Button onClick={(e) => { handleSubmit(e) }}>LOG IN</Button>

          </ButtonContainer>
          <LogInDiv>
            Don’t have an account?
            <Link style={{ textDecoration: 'none' }} to="/regUniversity"> <LogInSpan> Register University</LogInSpan></Link>
          </LogInDiv>
        </Wrapper>
      </Container>
    </MainContainer>
  );
};

export default Login;

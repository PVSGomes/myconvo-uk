import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/home/Home';
import PageLoader from './components/PageLoader';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Login from './pages/auth/Login';
import Footer from './components/Footer';
import PersistentDrawer from './pages/admin/PersistentDrawer';
import RegisterUniversity from './pages/auth/RegisterUniversity';
import StudentPortal from './pages/student/StudentPortal';
import UniversityPortal from './pages/university/UniversityPortal';
import ReusableSnackbar from './components/ReusableSnackbar';
import AdminLogin from './pages/auth/AdminLogin';

function App() {
  const location = useLocation();
  const isShowHeader = location.pathname === '/admin'; // Adjust the path if needed
  const isShowFooter =
    location.pathname === '/admin' ||
    location.pathname === '/login' ||
    location.pathname === '/regUniversity';

  const isChangeHeaderColor = !!(
    location.pathname === '/' || location.pathname === '/home'
  );

  const { isSnackbarOpen, snackbarBody } = useSelector(
    (state) => state.AppReducer
  );

  return (
    <Box>
      {!isShowHeader && (
        <ResponsiveAppBar isChangeColor={isChangeHeaderColor} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/home"
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/adminLogin"
          element={
            <Suspense fallback={<PageLoader />}>
              <AdminLogin />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<PageLoader />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/regUniversity"
          element={
            <Suspense fallback={<PageLoader />}>
              <RegisterUniversity />
            </Suspense>
          }
        />

        <Route
          path="/admin"
          element={
            <Suspense fallback={<PageLoader />}>
              <PersistentDrawer />
            </Suspense>
          }
        />

        <Route
          path="/student"
          element={
            <Suspense fallback={<PageLoader />}>
              <StudentPortal />
            </Suspense>
          }
        />
        <Route
          path="/university"
          element={
            <Suspense fallback={<PageLoader />}>
              <UniversityPortal />
            </Suspense>
          }
        />
      </Routes>
      {!isShowFooter && <Footer />}
      <ReusableSnackbar
        message={snackbarBody.snackbarMessage}
        severity={snackbarBody.snackbarSeverity}
        open={isSnackbarOpen}
        autoHideDuration={snackbarBody.snackbarAutoHideDuration}
      />
    </Box>
  );
}

export default App;

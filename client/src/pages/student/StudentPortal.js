import { Box, Button, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { TfiPackage } from 'react-icons/tfi';
import StudentProfileView from './views/StudentProfileView';
import StudentPackagesView from './views/StudentPackagesView';
import StudentGalleryView from './views/StudentGalleryView';
import { Colors } from '../../values/colors';
import { useDispatch } from 'react-redux';
import * as AppActions from '../../store/actions/AppActions';
import { useNavigate } from 'react-router-dom';

const StudentPortal = () => {
  let navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const dispatch = useDispatch();
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleLogout=()=>{
    dispatch(AppActions.clearUserInfo());
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    navigate('/');
    window.location.reload();
  }

  return (
    <Box
      sx={{
        my: 8,
        height: '100hv',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flex: '0 0 200px' }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            orientation="vertical"
            sx={{ borderRight: 1, borderColor: 'divider' }}
            TabIndicatorProps={{
              style: {
                backgroundColor: Colors.lightPurpleShade,
              },
            }}
          >
            <Tab
              label={
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    ml: 4,
                    gap: 2,
                    color:
                      activeTab === 0
                        ? Colors.lightPurple
                        : Colors.defaultIconColor,
                    fontSize: 16,
                    textTransform: 'none',
                  }}
                >
                  <TfiPackage
                    color={
                      activeTab === 0
                        ? Colors.lightPurple
                        : Colors.defaultIconColor
                    }
                  />
                  Profile
                </Box>
              }
              sx={{
                '&.Mui-selected': {
                  backgroundColor: Colors.lightPurpleLight,
                },
                '&:hover': {
                  backgroundColor: Colors.lightPurpleLight,
                  color: Colors.lightPurple,
                },
              }}
            />
            <Tab
              label={
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    ml: 4,
                    gap: 2,
                    color:
                      activeTab === 1
                        ? Colors.lightPurple
                        : Colors.defaultIconColor,
                    fontSize: 16,
                    textTransform: 'none',
                  }}
                >
                  <TfiPackage
                    color={
                      activeTab === 1
                        ? Colors.lightPurple
                        : Colors.defaultIconColor
                    }
                  />
                  Packages
                </Box>
              }
              sx={{
                '&.Mui-selected': {
                  backgroundColor: Colors.lightPurpleLight,
                },
                '&:hover': {
                  backgroundColor: Colors.lightPurpleLight,
                  color: Colors.lightPurple,
                },
              }}
            />
            <Tab
              label={
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    ml: 4,
                    gap: 2,
                    color:
                      activeTab === 2
                        ? Colors.lightPurple
                        : Colors.defaultIconColor,
                    fontSize: 16,
                    textTransform: 'none',
                  }}
                >
                  <TfiPackage
                    color={
                      activeTab === 2
                        ? Colors.lightPurple
                        : Colors.defaultIconColor
                    }
                  />
                  Gallery
                </Box>
              }
              sx={{
                '&.Mui-selected': {
                  backgroundColor: Colors.lightPurpleLight,
                },
                '&:hover': {
                  backgroundColor: Colors.lightPurpleLight,
                  color: Colors.lightPurple,
                },
              }}
            />
          </Tabs>
          <Button
            onClick={handleLogout}
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              pl: 4,
              borderRadius: 0,
              minHeight: '48px',
              gap: 2,
              fontSize: 16,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: Colors.lightPurpleLight,
                color: Colors.lightPurple,
              },
            }}
          >
            <TfiPackage />
            Logout
          </Button>
        </Box>
        <Box sx={{ flex: '1' }}>
          {activeTab === 0 && <StudentProfileView />}
          {activeTab === 1 && <StudentPackagesView />}
          {activeTab === 2 && <StudentGalleryView />}
        </Box>
      </Box>
    </Box>
  );
};

export default StudentPortal;

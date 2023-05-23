import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../../../components/Breadcrumb';
import PackageCard from '../components/PackageCard';
import AddPackageCard from '../components/AddPackageCard';
import * as PackagesActions from '../../../store/actions/PackageActions';
import NoDataView from '../../../components/NoDataView';

const PackagesView = () => {
  const dispatch = useDispatch();
  const { packages } = useSelector((state) => state.PackageReducer);

  useEffect(() => {
    dispatch(PackagesActions.getPackages());
  }, []);

  return (
    <Box>
      <Breadcrumb
        title="Photography Packages"
        breadcrumb="Admin Panel/Package"
      />

      <Box
        sx={{
          my: 3,
          mx: 10,
        }}
      >
        <Typography variant="h4" fontWeight="400">
          Add Photography Package
        </Typography>

        <AddPackageCard />
      </Box>

      <Box
        sx={{
          my: 5,
          ml: 10,
        }}
      >
        <Typography variant="h4" fontWeight="400">
          Current Active Packages
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: 5,
            flexWrap: 'wrap',
            justifyContent: packages.length > 0 ? 'center' : 'space-between',
            mt: 4,
          }}
        >
          {packages && packages.length > 0 ? (
            packages?.map((item) => (
              <PackageCard
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                isAdmin
              />
            ))
          ) : (
            <NoDataView />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PackagesView;

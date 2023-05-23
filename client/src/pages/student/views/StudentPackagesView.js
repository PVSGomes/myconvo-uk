import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { BsCart } from 'react-icons/bs';
import Breadcrumb from '../../../components/Breadcrumb';
import PackageCard from '../../admin/components/PackageCard';
import { Colors } from '../../../values/colors';
import * as CartActions from '../../../store/actions/CartActions';
import CartPopup from '../components/CartPopup';
import * as PackageActions from '../../../store/actions/PackageActions';
import NoDataView from '../../../components/NoDataView';

const StudentPackagesView = () => {
  const dispatch = useDispatch();
  const { packages } = useSelector((state) => state.PackageReducer);
  const [checkedItems, setCheckedItems] = useState([]);
  const loading = false;

  useEffect(() => {
    dispatch(PackageActions.getPackages());
  }, []);

  const handleCheckboxChange = (checkedItem, isChecked) => {
    if (isChecked) {
      setCheckedItems((prevCheckedItems) => [...prevCheckedItems, checkedItem]);
    } else {
      setCheckedItems((prevCheckedItems) =>
        prevCheckedItems.filter((item) => item.id !== checkedItem.id)
      );
    }
  };

  const handleCheckout = () => {
    dispatch(CartActions.setCart(checkedItems));
    dispatch(CartActions.setCartPopUpShow(true));
    console.log('checkout', checkedItems);
  };

  return (
    <Box sx={{ m: 4 }}>
      <Breadcrumb title="Profile" breadcrumb="Home/ Student Portal/ Packages" />

      <Box sx={{ my: 3, mx: 3 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            pr: 8,
          }}
        >
          <Typography variant="h3" fontWeight="400">
            Available Photography Packages ({checkedItems.length})
          </Typography>
          <LoadingButton
            size="small"
            onClick={handleCheckout}
            loading={loading}
            variant="contained"
            disabled={loading || checkedItems.length <= 0}
            endIcon={
              <BsCart
                color={checkedItems.length <= 0 ? 'disable' : Colors.white}
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
            Checkout
          </LoadingButton>
        </Box>

        <Box
          sx={{
            mt: 3,
            width: '100%',
            display: 'flex',
            gap: 5,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {packages && packages.length > 0 ? (
            packages.map((item) => (
              <PackageCard
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                loading={false}
                onCheckboxChange={(isChecked) =>
                  handleCheckboxChange(item, isChecked)
                }
              />
            ))
          ) : (
            <NoDataView />
          )}
        </Box>
      </Box>
      <CartPopup />
    </Box>
  );
};

export default StudentPackagesView;

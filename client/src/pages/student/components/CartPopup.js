import React, { useMemo } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import CustomModal from '../../../components/CustomModel';
import * as CartActions from '../../../store/actions/CartActions';
import { Colors } from '../../../values/colors';

const CartPopup = () => {
  const dispatch = useDispatch();
  const { isCartPopUpShow, studentCart, isLoading } = useSelector(
    (state) => state.CartReducer
  );

  const handleClose = () => {
    dispatch(CartActions.setCartPopUpShow(false));
  };

  const calculateTotalPrice = useMemo(() => {
    return studentCart.reduce(
      (total, item) => total + parseFloat(item.price),
      0
    );
  }, [studentCart]);

  const handleCheckout = () => {
    dispatch(CartActions.setCart([]));
    dispatch(CartActions.setCartPopUpShow(false));
  };

  return (
    <CustomModal open={isCartPopUpShow} onClose={handleClose}>
      <Typography variant="h3" fontWeight="400">
        Student Cart
      </Typography>
      <Typography variant="h4" sx={{ mt: 3,mx: 3, }} fontWeight="400">
        Order Summary
      </Typography>
      <Box
        sx={{
          my: 1,
          mx: 3,
          minHeight: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {studentCart?.map((item) => {
          return (
            <Box
              key={item.Id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                px: 1,
              }}
            >
              <Typography>{item.title} </Typography>
              <Typography>${item.price}</Typography>
            </Box>
          );
        })}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            pr: 8,
            p: 1,
            mt: 1,
            borderTop: `1px solid ${Colors.secondaryLight}`,
          }}
        >
          <Typography variant="h4">Total Price</Typography>
          <Typography variant="h4">${calculateTotalPrice}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
          px: 4,
          py: 1,
        }}
      >
        <LoadingButton
          size="small"
          onClick={handleCheckout}
          loading={isLoading}
          variant="contained"
          disabled={isLoading}
          sx={{
            width: '20%',
            height: '40px',
            color: Colors.white,
            fontSize: 13,
            alignSelf: 'flex-end',
            backgroundColor: Colors.secondaryLight,
            '&:hover': {
              backgroundColor: Colors.secondaryLight,
            },
          }}
        >
          Place Order
        </LoadingButton>
      </Box>
    </CustomModal>
  );
};

export default CartPopup;

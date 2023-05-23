import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import API from '../Api';
import styled from 'styled-components';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Button = styled.button`
  padding: 12px;
  font-size: 15px;
  background-color: #292727;
  cursor: pointer;
  border: 2px solid #292727;
  border-radius: 6px;
  color: #fff;
  margin: 15px 0;
  transition: 0.8s;
  width: 500px;
  height: 60px;

  &:hover {
    opacity: 1;
    background-color: #6a6666;
    border: 2px solid #6a6666;
    color: #fff;
  }
`;

function PaymentsModal({ isBuyer }) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason && reason == 'backdropClick') return;
    setOpen(false);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    const createPayment = async () => {
      try {
        console.log("xxxxxxxxxxxxxxx")
        const result = await API.get('payment/config');
        console.log('result', result);
        setStripePromise(loadStripe(result.data.publishableKey));
      } catch (err) {
        console.log('err', err);
      }
    };
    createPayment();
  }, []);

  useEffect(() => {
    const createPayment = async () => {
      try {
        const result = await API.post('payment/create-payment-intent');
        console.log('result', result);
        setClientSecret(result.data.clientSecret);
      } catch (err) {
        console.log('err', err);
      }
    };
    createPayment();
  }, []);

  return (
    <div>
      <div>
        <LoadingButton
          size="small"
          onClick={handleClickOpen}
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
        <Button>
          <b>Debit or Credit Card</b>
        </Button>

        <Dialog
          PaperProps={{ sx: { width: '50%' } }}
          open={open}
          onClose={handleClose}
        >
          <DialogContent>
            {clientSecret && stripePromise && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm
                  handleCloseModal={handleCloseModal}
                  isBuyer={isBuyer}
                />
              </Elements>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default PaymentsModal;

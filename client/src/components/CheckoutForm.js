import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import API from "../Api";
import { useSelector, useDispatch } from 'react-redux';


const CancelButton = styled.button`
  padding: 15px;
  border: 2px solid #f58383;
  background-color: #f58383;
  cursor: pointer;
  font-weight: 700;
  color: white;
  border-radius: 5px;
  transition: 0.8s;
  margin-right: 15px;

  &:hover {
    opacity: 1;
    background-color:#cb0b05;
  }
`;
const DoneButton = styled.button`
  padding: 15px;
  border: 2px solid #2daf01;
  background-color: #2daf01;
  cursor: pointer;
  font-weight: 700;
  color: white;
  border-radius: 5px;
  transition: 0.8s;
  margin-left: auto;


  &:hover {
    opacity: 1;
    background-color:  #29a301;
  }
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #043ccc;
  background-color: #2148C0;
  cursor: pointer;
  font-weight: 700;
  color: white;
  border-radius: 5px;
  transition: 0.8s;


  &:hover {
    opacity: 1;
    background-color: #002796;
  }
`;


const ButtonContainer = styled.div`
  display: flex;
  justify-content:flex-end;
  padding-top:12px;
`;

const ImageContainer = styled.div`
  
`;


const Image = styled.img`
  width: 100%;
`;


export default function CheckoutForm({ handleCloseModal, isBuyer }) {
  const stripe = useStripe();
  const elements = useElements();
  let navigate = useNavigate();
  // const cartItems = useSelector((state) => state.cart.cartItems)
  const appointment = useSelector((state) => state.appointment)
  const userInfoDetails = JSON.parse(localStorage.getItem("userInfo"));

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  console.log("appointment++++++++++++", appointment)

  const handleSubmit = async (e) => {
    e.preventDefault();

    let appointmentDetails = appointment.value.data;
    appointmentDetails = { ...appointmentDetails, userId: userInfoDetails._id }

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);
    try {
      const res = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "https://example.com",
        },
        redirect: 'if_required'

      });

      setIsProcessing(false);
      if (res.paymentIntent.status === "succeeded") {

        const result = await API.post('appointment/create', appointmentDetails)
        console.log("result", result)
        setIsSuccessful(true);

      }

      console.log("res", res)

    } catch (error) {
      console.log("error", error)
    }

    // if (error.type === "card_error" || error.type === "validation_error") {
    //   setMessage(error.message);
    // } else {
    //   setMessage("An unexpected error occured.");
    // }

    setIsProcessing(false);
  };

  const handleComplete = () => {

    navigate("/");
    window.location.reload()
  }
  return (
    <>
      {isSuccessful ?
        <>
          <ImageContainer>
            <Image src={'https://i.ibb.co/jG5yKKH/Paymentsuccessful21.png'} />
          </ImageContainer>
          <ButtonContainer>
            <DoneButton onClick={() => { handleComplete() }}>
              Done
            </DoneButton>
          </ButtonContainer>
        </>
        :
        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement id="payment-element" />
          <ButtonContainer>
            <CancelButton onClick={() => { handleCloseModal() }}>
              Cancel
            </CancelButton>
            <Button disabled={isProcessing || !stripe || !elements} id="submit">
              <span id="button-text">
                {isProcessing ? "Processing ... " : "Pay now"}
              </span>
            </Button>

          </ButtonContainer>
          {/* Show any error or success messages */}
          {message && <div id="payment-message">{message}</div>}
        </form>}
    </>

  );
}
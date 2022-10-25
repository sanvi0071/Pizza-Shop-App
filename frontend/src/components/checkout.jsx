import React from 'react';
import {Button} from 'react-bootstrap';

import {StripeCheckout} from 'react-stripe-checkout';
import {useDispatch , useSelector} from 'react-redux';
import { placeOrder } from '../actions/orderAction';
import Loader from './Loader';
import Error from './Error';


const CheckOut = ({subTotal}) => {
  const orderState = useSelector(state => state.placeOrderReducer)
  const {loading,error,success} = orderState
    const dispatch = useDispatch()
    const tokenHandler = (token)=> {
        dispatch(placeOrder(token, subTotal));
        console.log(token);
    };
  return(
    <>
    {loading && <Loader/>
  }
    {error && <Error error="something went wrong"/>}
    {success && <success success="Order placed successfully"/>
  }
   <StripeCheckout
   amount={subTotal*100}
   shippingAddress
   token={tokenHandler}
   stripeKey="pk_test_51Ltp10SFFP8zhYNbe30qiAGr4vzFXAIJobziNS0yrjnft9JJ8UCMASYdw7V0SPioMd7wMRtUsZIdu1ycaf9pWJRN00cSabBba2"
   currency ="INR"
>
    <Button>Pay Now</Button>
   </StripeCheckout>
   </>
   )
  
};

export default CheckOut;
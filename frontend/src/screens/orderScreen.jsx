import React,{useEffect} from 'react';
import {getUserOrders} from '../actions/orderAction';
import { useDispatch, useSelector} from 'react-redux';

import Loader from '../components/Loader';

import { Row,Col} from 'react-bootstrap';
import Error from '../components/Error';
const OrderScreen = () => {
  const orderState = useSelector(state =>state.getUserOrdersReducer);
  const {loading,error,orders} = orderState
  const dispatch = useDispatch()
   useEffect(()=>{
    dispatch(getUserOrders());
   },[dispatch]);
  return (
    <>
        <h1 className='text-center'>Your Orders</h1>
        {loading && (<Loader/>)}
        {error && (<Error error="Something went wrong"/>)}
        {
          orders && orders.map(order => (
            <div className='container border p-4 bg-light'>
          <Row>
            <Col md={4}>
              <h4>Items: </h4>
            {order.orderItems.map(item =>(
              <h6 key = {item.name}>
              
             {item.name} [{item.variant}]* {item.quantity}={" "} {item.price}</h6>
              
              ))}
            </Col>
            <Col md={4}>
              <h4>Address :</h4>
              <h6>Street:{order.shippingAddress.street}</h6>
              <h6>City:{order.shippingAddress.city}</h6>
              <h6>Country:{order.shippingAddress.country}</h6>
              <h6>PinCode:{order.shippingAddress.zip}</h6>
            </Col>
            <Col md={4}>
              <h4>Order Info</h4>
              <h6>Order Amount: {order.orderAmount}</h6>
              <h6>Transaction Id:{order.transactionId}</h6>
              <h6>Order Id:{order._id}</h6>
            </Col>
         </Row></div>
            ))
          }
      </>
  );
};
        


export default OrderScreen;
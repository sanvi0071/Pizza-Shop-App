import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { deliverOrder, getAllOrders } from '../../actions/orderAction';
import {loader} from '../Loader';
import Error from '../Error';
import {Table, Button}from 'react-bootstrap';
const OrderList = () => {
  const allOrdersState = useSelector(state => state.allUserOrdersReducer);
  const{loading,error,orders}= allOrdersState
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(getAllOrders());
  },[dispatch]);
  return (

    <div>
        <h1>Order List</h1>
        {loading && (<loader/>)}
        {error && (<Error error="Admin Order request failed!"/>)};
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Email</th>
          <th>USer Id</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders && 
        orders.map((order) => (
          <tr key={order._id}>
            <td>{order._id}</td>
            <td>{order.email}</td>
            <td>{order.transactionId}</td>
            <td>Rs {order.orderAmount}/-</td>
            <td>{order.createdAt.substring(0, 10)}</td>
            <td>
              {" "}
              {order.isDelivered ? (
            <h6 className='text-success'>Delivered</h6>
            ):(
            <>
            <Button 
            className='btn-danger'
            onClick={()=> {dispatch(deliverOrder(orders._id));
            }}>Deliver</Button></>
            )}{" "}
            </td>
          </tr>
        ))}
        </tbody>
    </Table>
    </div>
  );
};

export default OrderList;
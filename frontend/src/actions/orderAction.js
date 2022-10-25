import axios from'axios';

export const placeOrder = (token,subTotal) => async(dispatch, getState) =>{
    dispatch({type:'PLACE_ORDER_REQUEST'})
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
    try {

        const res = await axios.post('/api/orders/placeOrder',{token,subTotal,currentUser,cartItems});
        dispatch({type:'PLACE_ORDER_SUCCESS'});
        console.log(res);
    } catch (error) {
        dispatch({type:'PLACE_ORDER_FAIL'});
        console.log(error);
    }
};

export const getUserOrders = ()=>async(dispatch, getState)=>{
  const currentUser = getState().loginUserReducer.currentUser
  dispatch({
    type:'USER_ORDER_REQUEST'
  })
  try {
    const response = await axios.post('/api/orders/getUserOrder',{userId:currentUser._id})
    console.log(response)
    dispatch({type:'USER_ORDER_SUCCESS',payload:response.data});
  } catch (error) {
    dispatch({type:'USER_ORDER_FAIL',payload:error});
  }
};

export const getAllOrders = ()=>async(dispatch, getState)=>{
  //const currentUser = getState().loginUserReducer.currentUser
  dispatch({
    type:'All_ORDER_REQUEST'
  })
  try {
    const response = await axios.get('/api/orders/allUserOrder');
    
    dispatch({type:'All_ORDER_SUCCESS',payload:response.data});
  } catch (error) {
    dispatch({type:'All_ORDER_FAIL',payload:error});
  }
};

export const deliverOrder = (orderId)=>async(dispatch, getState)=>{
  //const currentUser = getState().loginUserReducer.currentUser
  dispatch({
    type:'GET_All_ORDER_REQUEST'
  })
  try {
    await axios.post('/api/orders/deliverOrder',{orderId});
    alert('Delivered Success')
    const orders = await axios.get('/api/orders/allUserOrder');
    dispatch({type:'GET_All_ORDER_SUCCESS',payload:orders.data});
    window.location.href="/admin/orderList";
  } catch (error) {
    dispatch({type:'GET_All_ORDER_FAIL',payload:error});
  }
};
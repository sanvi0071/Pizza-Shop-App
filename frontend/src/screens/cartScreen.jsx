import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import {BiMinusCircle} from 'react-icons/bi';
import {BsPlusCircle, BsTrash} from "react-icons/bs";
import { addToCart ,deleteFromCart} from '../actions/cartAction';

import CheckOut from '../components/checkout';
const CartScreen = () => {
    const cartState = useSelector(state=> state.cartReducer);
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch();
    const subTotal = cartItems.reduce((x,item) => x+item.price,0);
  return (
    <div>
       <Container>
            <Row>
                <Col md={6}>
                    <h1>My Cart</h1>
                    <Row>
                        {
                        cartItems.map(item=>(
                         <>
                         <Col md={7}>
                            <h5>{item.name}[{item.variants}]</h5>
                            <h6>
                            {" "}
                             Price:{item.quantity} X {item.prices[0][item.variants]}={" "} {item.price}
                            </h6>
                            <h6>
                              Quantity:&nbsp;
                                <BiMinusCircle
                                 className="text-danger"
                                 style={{cursor:"pointer"}}
                                 onClick={()=>{dispatch(addToCart(item,item.quantity-1, item.variants))}}
                                 />&nbsp;
                                {item.quantity}&nbsp;
                                <BsPlusCircle className="text-success" 
                                 style={{cursor:"pointer"}}
                                onClick={()=>{dispatch(addToCart(item,item.quantity+1, item.variants))}}
                                />&nbsp;
                                        </h6>
                         </Col>
                           <Col md={5}>
                             <img alt = {item.name} src = {item.image} 
                             style={{width:'80px',height:'80px'}}/>
                             <BsTrash className="text-danger"
                                 style={{cursor:"pointer", marginLeft:'20px'}}
                                 onClick={()=>{dispatch(deleteFromCart(item));
                                }}
                                 />
                         </Col>
                         <hr/>
                        </>
                         ))
                        }
                    </Row>
                </Col>
                <Col md={4}>
                    <h1>Payment Info</h1>
                    <h4>Sub Total</h4>
                    <h4>Rs: {subTotal} /-</h4>
                    <CheckOut subTotal={subTotal}/>
                </Col>
            </Row>
       </Container>
    </div>
  )
}

export default CartScreen;
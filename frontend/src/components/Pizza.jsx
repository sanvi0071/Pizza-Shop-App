import React,{useState} from 'react';
import {Card,Row,Col,Modal,Button}from'react-bootstrap';
import { useDispatch} from 'react-redux';
import { addToCart } from '../actions/cartAction';
const Pizza = ({pizza}) => {
  const [variants,setVariants]= useState('small');
  const [quantity, setQuantity]= useState(1)
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const addToCartHandler = ()=>{
    dispatch (addToCart(pizza,quantity, variants));
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: '18rem', marginTop:'30px'}}>
      <Card.Img variant="top"
       src={pizza.image} 
       style={{height:"250px", cursor:'pointer'}}
      onClick={handleShow}/>
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
       <hr/>
        <Card.Text>
          <Row>
            <Col md={6}>
              <h6>Variants</h6>
              <select value={variants} onChange={(e)=>setVariants(e.target.value)}>
                {pizza.variants.map((variants)=>(
                  <option key={variants} >{variants}</option>
                  ))}
              </select>
            </Col>
            <Col md={6}>
              <h6>Quantity</h6>
              <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
                {[...Array(10).keys()].map((v,i)=>(
                  <option key={i+1} value={i+1}>{i+1}</option>
                ))}
              </select>
            </Col>
          </Row>
        </Card.Text>
        <Row>
          <Col md={6}>Price: {pizza.prices[0][variants]*quantity}/-RS</Col>
          <Col md={6}>
            <Button 
            onClick={addToCartHandler}
            className="bg-warning text-white">Add to Cart</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}>
       
      
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
        <Card.Img variants="top" src={pizza.image} 
        style={{height:"250px"}}
         />
         </div>
         <div>
          <h5>Description:</h5>
          <h6>{pizza.description}</h6>
         </div>
        </Modal.Body>
        
      </Modal>
    </>
  );
};

export default Pizza;
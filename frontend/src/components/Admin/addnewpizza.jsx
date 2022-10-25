import React,{useState} from 'react';
import {Row,Col, Form, Button} from 'react-bootstrap';
import {addPizza} from '../../actions/pizzaAction';
import {useDispatch, useSelector} from'react-redux';
import Loader from '../Loader';
import Error from './../Error';
import Success from './../Success';

const Addnewpizza = () => {
  const [name, setName] = useState('')
  const [smallPrice, setSmallPrice] = useState()
  const [largePrice, setLargePrice] = useState()
  const [mediumPrice, setMediumPrice] = useState()
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const addPizzaState = useSelector(state =>state.addPizzaReducer)
  const {loading, error, success}= addPizzaState
  const dispatch = useDispatch()
const submitForm = (e)=>{
 e.preventDefault();
 const pizza = {
  name,image,description,category,
  prices:{
    small: smallPrice,
    medium:mediumPrice,
    large:largePrice,
  },
};
 dispatch(addPizza(pizza));

};

  return (
    <div>
       {loading && (<Loader/>)}
       {error && (<Error error="add new Pizza error"/>)}
       {success && (<Success success="Pizza added successfully"/>)}
    <Form onSubmit= {submitForm} className="bg-light p-4">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"
          value={name}
          onChange={e=> setName(e.target.value)}
           placeholder="Enter name" />
        </Form.Group>
         
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Small Price</Form.Label>
          <Form.Control type="text"
          value={smallPrice}
          onChange={e=> setSmallPrice(e.target.value)}
           placeholder="Enter small Price" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Medium Price</Form.Label>
          <Form.Control type="text"
          value={mediumPrice}
          onChange={e=> setMediumPrice(e.target.value)}
           placeholder="Enter medium Price"  />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Large Price</Form.Label>
          <Form.Control type="text"
          value={largePrice}
          onChange={e=> setLargePrice(e.target.value)}
           placeholder="Enter large Price"  />
        </Form.Group>
      </Row>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control 
          type="text"
          value={image}
          onChange={e=> setImage(e.target.value)}
           placeholder="Add image URL"/> 
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Description</Form.Label>
        <Form.Control 
        type="text"
        value={description}
        onChange={e=> setDescription(e.target.value)}
         placeholder="Enter description"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Category</Form.Label>
        <Form.Control 
        type="text"
        value={category}
        onChange={e=> setCategory(e.target.value)}
         placeholder="Enter Category"  />
      </Form.Group>
        <Button variant="primary" type='submit'>
        Add New
      </Button>
    </Form>
   </div>
  )
}

export default Addnewpizza;
import React,{useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPizzaById, updatePizza} from "../../actions/pizzaAction";
import {Row,Col, Form, Button} from 'react-bootstrap';
import Loader from "../Loader";
import Error from "../Error";

const EditPizza = ({match})=>{
  const [name, setName] = useState('')
  const [smallPrice, setSmallPrice] = useState()
  const [largePrice, setLargePrice] = useState()
  const [mediumPrice, setMediumPrice] = useState()
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const dispatch = useDispatch();
  const getPizzaByState = useSelector(state => state.getPizzaByIdReducer)
  const{error,pizza} = getPizzaByState;
  const updatePizzaByState = useSelector(state =>state.updatePizzaByIdReducer);
  const {updateLoading} = updatePizzaByState
  useEffect(()=> {
    if(pizza){if(pizza._id===match.params.pizzaId){
      setName(pizza.name);
      setDescription(pizza.description);
      setCategory(pizza.category);
      setImage(pizza.image);
      setSmallPrice(pizza.prices[0]['small']);
      setMediumPrice(pizza.prices[0]('medium'));
      setLargePrice(pizza.prices[0]('large'));

    }else{
    dispatch(getPizzaById(match.params.pizzaId))
    }}else{
      dispatch(getPizzaById(match.params.pizzaId))
    };
},[pizza,dispatch, match.params.pizzaId]);
const submitForm = (e)=>{
  e.preventDefault();
  const updatedPizza = {
    _id:match.params.pizzaId,
   name,image,description,category,
   prices:{
     small: smallPrice,
     medium:mediumPrice,
     large:largePrice,
   },
 };
  dispatch(updatePizza(updatedPizza));
 
 };

  return(
    <div>
    {updateLoading && (<Loader/>)}
    {error && (<Error error="add new Pizza error"/>)}
   
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
     Update Pizza
   </Button>
 </Form>
</div>
  );
};

export default EditPizza;

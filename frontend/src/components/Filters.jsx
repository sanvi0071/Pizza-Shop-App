import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {Form, Row, Col, Button} from 'react-bootstrap';
import { filterPizza } from '../actions/pizzaAction';
const Filters = () => {
    const [searchKey,setSearchKey] = useState('')
    const [category, setCategory] = useState('all')
    const dispatch = useDispatch()
  return (
    <div className='p-4 bg-info mt-4'>
       <Form>
      <Row>
        <Col>
          <Form.Control
          value = {searchKey}
          onChange = {e => setSearchKey(e.target.value)}
           placeholder="Search Pizza" />
        </Col>
        <Col>
          <select class ="form-select" 
          value = {category}
          onChange = {e => setCategory(e.target.value)}>
            <option>All</option>
            <option>veg</option>
            <option>non-veg</option>
          </select>
        </Col>
        <Col>
        <Button onClick={()=>{dispatch(filterPizza(searchKey, category))}}>Search</Button>
        </Col>
      </Row>
    </Form>
    </div>
  )
}

export default Filters;
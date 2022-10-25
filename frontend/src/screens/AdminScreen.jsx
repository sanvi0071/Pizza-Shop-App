import React,{useEffect} from 'react';
import {Col, Row,Container,Button,ButtonGroup} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import { Route } from 'react-router-dom';
import addnewpizza from '../components/Admin/addnewpizza';
import editPizza from '../components/Admin/editPizza';
import orderList from '../components/Admin/orderList';
import PizzaList from '../components/Admin/PizzaList';
import userList from '../components/Admin/userList';

const AdminScreen = ({history}) => {
  const userState = useSelector(state => state.loginUserReducer)
  const {currentUser} = userState;
  useEffect(()=>{
    if(localStorage.getItem('currentUser')===null|| !currentUser.isAdmin){
      window.location.href="/"
    }
  },[currentUser]);
  return (
    <>
    <Container>
      <Row>
        <h1 className='text-center bg-dark text-light p-2'>Admin Panel</h1>
        <Col md={2}>
        <ButtonGroup vertical style={{minHeight:"400px"}}>
      <Button onClick={()=> history.push('/admin/userList')}>All Users</Button>
      <Button onClick={()=> history.push('/admin/pizzaList')}>All Pizzas</Button>
      <Button onClick={()=> history.push('/admin/orderList')}>All Orders</Button>
      <Button onClick={()=> history.push('/admin/addNewPizza')}>Add new Pizza</Button>
     </ButtonGroup>
        </Col>
        <Col md={10}>
            <switch>
            <Route path="/admin" component={userList}exact/>
            <Route path="/admin/userList" component={userList}exact/>
               <Route path="/admin/editPizza/:pizzaId" component={editPizza}exact/>
               <Route path="/admin/pizzaList" component={PizzaList}exact/>
               <Route path="/admin/orderList" component={orderList}exact/>
               <Route path="/admin/addNewPizza" component={addnewpizza}exact/>
            </switch>
        </Col>
      </Row>
      </Container>
    </>
  )
}

export default AdminScreen
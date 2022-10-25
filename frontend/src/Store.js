import { applyMiddleware, legacy_createStore} from 'redux';
import { combineReducers} from 'redux';
//import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {composeWithDevTools}from 'redux-devtools-extension';
import {getAllPizzaReducer, addPizzaReducer, getPizzaByIdReducer, updatePizzaByIdReducer} from './reducers/pizzaReducer';
import { cartReducer } from './reducers/cartReducer';
import { registerUserReducer , loginUserReducer, getAllUsersReducer} from './reducers/userReducer';
import {allUserOrdersReducer, getUserOrdersReducer, placeOrderReducer} from './reducers/orderReducer';

const currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')): null;
const rootReducer = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer:getUserOrdersReducer,
    addPizzaReducer: addPizzaReducer,
    getPizzaByIdReducer:getPizzaByIdReducer,
    updatePizzaByIdReducer:updatePizzaByIdReducer,
    allUserOrdersReducer:allUserOrdersReducer,
    getAllUsersReducer:getAllUsersReducer,
},[]);
const cartItems = localStorage.getItem('cartItems')
 ? JSON.parse(localStorage.getItem('cartItems')):[];
const initialState ={
    cartReducer :{
        cartItems : cartItems,
    },
    loginUserReducer:{
        currentUser:currentUser,
    },
};
const middleware = [thunk];

const store = legacy_createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware (...middleware))
)
export default store;
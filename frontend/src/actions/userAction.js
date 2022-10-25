import axios from 'axios';
import swal from "sweetalert";
export const registerUser = (user)=> async (dispatch) =>{
    dispatch({type:'USER_REGISTER_REQUEST'});
    try {
         await axios.post("/api/users/register",user)
        dispatch({type:'USER_REGISTER_SUCCESS'});
        
    } catch (error) {
        dispatch({type:'USER_REGISTER_FAIL',payload:error});
        
    }
};
 
export const loginUser = (user) => async (dispatch) => {
  dispatch({type:'USER_LOGIN_REQUEST'})
  try {
    const response = await axios.post('/api/users/login',user);
    console.log(response);
    dispatch({type:'USER_LOGIN_SUCCESS',payload:response.data});
    localStorage.setItem('currentUser',JSON.stringify(response.data));
    window.location.href = '/'
  } catch (error) {
    dispatch({type:'USER_LOGIN_FAIL',payload:error});
    
  }
};

export const logoutUser = ()=> (dispatch) => {
  localStorage.removeItem('currentUser');
  window.location.href = "/login";
};

export const getAllUsers = () => async(dispatch) =>{
  dispatch({type:"GET_USERS_REQUEST"});
  try {
      const response = await axios.get("/api/users/getAllUsers");
      console.log(response.data);
      dispatch({type:"GET_USERS_SUCCESS",payload:response.data});
  } catch (err) {
      dispatch({type:"GET_USERS_FAIL",payload:err});
      
  }
};

export const deleteUser = (userId) => async (dispatch) =>{
  try {
      const res = await axios.post('/api/users/deleteUser',{userId});
      swal("User Deleted Successfully!","success");
      window.location.reload();
      console.log(res);
  } catch (error) {
      swal("Error, while deleting User");
  }
};

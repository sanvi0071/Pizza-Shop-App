import axios from "axios";
import swal from "sweetalert";
export const getAllPizzas = () => async(dispatch) =>{
    dispatch({type:"GET_PIZZAS_REQUEST"});
    try {
        const response = await axios.get("/api/pizzas/getAllPizzas");
        console.log(response);
        dispatch({type:"GET_PIZZAS_SUCCESS",payload:response.data});
    } catch (err) {
        dispatch({type:"GET_PIZZAS_FAIL",payload:err});
        
    }
};

export const getPizzaById= (pizzaId) => async(dispatch) =>{
    dispatch({type:"GET_PIZZA_BY_ID_REQUEST"});
    try {
        const response = await axios.post("/api/pizzas/getPizzaById",{pizzaId});
        
        dispatch({type:"GET_PIZZA_BY_ID_SUCCESS",payload:response.data});
    } catch (err) {
        dispatch({type:"GET_PIZZA_BY_ID_FAIL",payload:err});
        
    }
};

export const addPizza= (pizza) => async(dispatch) =>{
    dispatch({type:"ADD_PIZZAS_REQUEST"});
    try {
     await axios.post("/api/pizzas/addPizza",{pizza});
        
        dispatch({type:"ADD_PIZZAS_SUCCESS"});
    } catch (err) {
        dispatch({type:"ADD_PIZZAS_FAIL",payload:err});
        
    }
};

export const updatePizza= (updatedPizza) => async(dispatch) =>{
    dispatch({type:"UPDATE_PIZZA_BY_ID_REQUEST"});
    try {
        const response = await axios.post("/api/pizzas/updatePizza",{updatedPizza});
        
        dispatch({type:"UPDATE_PIZZA_BY_ID_SUCCESS",payload:response.data});
        window.location.href = "/admin/pizzaList";
    } catch (err) {
        dispatch({type:"UPDATE_PIZZA_BY_ID_FAIL",payload:err});
        
    }
};

export const deletePizza = (pizzaId) => async (dispatch) =>{
    try {
        await axios.post('/api/pizzas/deletePizza',{pizzaId});
        swal("Pizza Deleted Successfully!","success");
        window.location.href="/admin/pizzaList";
        //console.log(res);
    } catch (error) {
        swal("Error, while deleting Pizza");
    }
};

export const filterPizza =(searchKey, category) => async (dispatch)=>{
    let filteredPizza;
    dispatch({type:'GET_PIZZAS_REQUEST'})
    try {
       const res= await axios.get("/api/pizzas/getAllPizzas")
       filteredPizza = res.data.filter((pizza) => pizza.name.toLowerCase().includes(searchKey))
       if(category !=='all'){
        filteredPizza = res.data.filter((pizza)=> pizza.category.toLowerCase()=== category)
       }
       dispatch({type:'GET_PIZZAS_SUCCESS', payload:filteredPizza});       
    }catch(error)
    {
      dispatch({type:"GET_PIZZAS_FAIL",payload:error});  
    }

};
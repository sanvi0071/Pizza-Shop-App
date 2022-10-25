export const getAllPizzaReducer = (state = {pizzas:[]}, action) =>{
    switch(action.type){
        case "GET_PIZZAS_REQUEST":
        return{
            ...state,
            loading: true,
        };
        case "GET_PIZZAS_SUCCESS":
            return{
                pizzas: action.payload,
                loading: false,
            };
            case "GET_PIZZAS_FAIL":
                return{
                    error: action.payload,
                    loading:false,
                };
                default:
                return state;
    }
};

export const addPizzaReducer = (state = {}, action) =>{
    switch(action.type){
        case 'ADD_PIZZAS_REQUEST':
        return{
            ...state,
            loading: true,
        };
        case "ADD_PIZZAS_SUCCESS":
            return{
                 success:true,
                loading: false,
            };
            case 'ADD_PIZZAS_FAIL':
                return{
                    error: action.payload,
                    loading:false,
                };
                default:return state;
    }
};

export const getPizzaByIdReducer = (state = {}, action) =>{
    switch(action.type){
        case'GET_PIZZA_BY_ID_REQUEST':
        return{
            ...state,
            loading: true,
        };
        case 'GET_PIZZA_BY_ID_SUCCESS':
            return{
                 pizza: action.payload,
                loading: false,
            };
            case 'GET_PIZZA_BY_ID_FAIL':
                return{
                    error: action.payload,
                    loading:false,
                };
                default:return state;
    }
};

export const updatePizzaByIdReducer = (state = {}, action) =>{
    switch(action.type){
        case'UPDATE_PIZZA_BY_ID_REQUEST':
        return{
            ...state,
            loading: true,
        };
        case 'UPDATE_PIZZA_BY_ID_SUCCESS':
            return{
                updateSuccess: true,
               updateLoading: false,
            };
            case 'UPDATE_PIZZA_BY_ID_FAIL':
                return{
                    updateError: action.payload,
                    updateLoading:false,
                };
                default:return state;
    }
};
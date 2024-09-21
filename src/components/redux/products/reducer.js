import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "../tickets/actions-type";


const initialState={
    products:[],
    error:null,
    loading:true,

};


export const productReducer=(state=initialState,action)=>{
switch(action.type){
    case FETCH_PRODUCTS_REQUEST:
        return{...state,loading:true}; 
        case FETCH_PRODUCTS_SUCCESS:
            return{...state,products:action.payload,loading:false};
            case FETCH_PRODUCTS_FAILURE:
                return{...state,error:"something went wrong",loading:false}
                default:
                    return state
}
}
import axios from "axios";
import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "../tickets/actions-type"





export const fetchproducts=()=>{
    return async(dispatch)=>{
        try{
            dispatch({type:FETCH_PRODUCTS_REQUEST})
        const response =await axios.get("https://fakestoreapi.com/products")
if(response.status==200){
    dispatch({
        type:FETCH_PRODUCTS_SUCCESS,
        payload:response.data,
    });
};
        

    }
    catch(err){
        dispatch({
            type:FETCH_PRODUCTS_FAILURE,
        });

    }
};
}; 
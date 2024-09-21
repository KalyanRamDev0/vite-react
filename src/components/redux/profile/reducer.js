import { CHANGE_USERNAME } from "../tickets/actions-type";




const initialState={
    name:"kalyan",
    salary:10000,
};


export const profileReducer=(state=initialState,action)=>{
    switch(action.type){
        case CHANGE_USERNAME:
            return{...state,name:action.payload};
            default:
                return state;
    }

};
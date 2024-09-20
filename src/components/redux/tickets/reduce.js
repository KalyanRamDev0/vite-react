import { cancelTickets } from "./action";

const initialState = {
    totalTickets:100,
    bookedTickets:20,
    cancelTickets:30,
    holdTickets:3
};


 export const ticketReducer=(state=initialState,action)=>{ 
    switch(action.type){
        case "BOOK_TICKETS" :
            return {...state,bookedTickets:state.bookedTickets+action.payload}
            case "CANCEL_TICKETS" :
                return{...state,cancelTickets:state.cancelTickets+action.payload}
default:
    return state;
    }

}
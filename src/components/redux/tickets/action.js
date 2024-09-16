import { BOOK_TICKETS } from "./actions-type"





const bookedTickets=(qty)=>{
    return {
        type:BOOK_TICKETS
        payload:qty
    };
};




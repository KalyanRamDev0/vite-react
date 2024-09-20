import { BOOK_TICKETS, CANCEL_TICKETS } from "./actions-type"





 export const bookedTickets=(qty)=>{
    return {
        type:BOOK_TICKETS,
        payload:qty,
    };
};
export const cancelTickets=(qty)=>{
    return {
        type:CANCEL_TICKETS,
        payload:qty,
    };
};




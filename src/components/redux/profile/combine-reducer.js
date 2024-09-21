import { combineReducers } from "redux";
import { profileReducer } from "./reducer";
import { ticketReducer } from "../tickets/reduce";
import { productReducer } from "../products/reducer";




export const rootReducer=combineReducers({
    profile:profileReducer,
    tickets:ticketReducer,
    products:productReducer
});
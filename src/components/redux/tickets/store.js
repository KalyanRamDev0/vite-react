import { legacy_createStore } from "redux";
import { ticketReducer } from "./reduce";




export  const reduxData=legacy_createStore(ticketReducer);
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { ticketReducer } from "./reduce";
import { rootReducer } from "../profile/combine-reducer";
import { thunk } from "redux-thunk";
//import { rootReducer } from "../profile/combine-reducer";
//import { thunk } from "redux-thunk";




export  const reduxData=createStore(rootReducer,applyMiddleware(thunk));
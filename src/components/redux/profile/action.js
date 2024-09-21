import { CHANGE_USERNAME } from "../tickets/actions-type";




export const changeUsername=(name)=>{
    return {
        type:CHANGE_USERNAME,
        payload:name,
    }
;}
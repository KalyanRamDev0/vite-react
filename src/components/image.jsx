import {  useDispatch, useSelector } from "react-redux"
import { bookedTickets } from "./redux/tickets/action"
import { changeUsername } from "./redux/profile/action"

import { fetchproducts } from "./redux/products/actions"
import { useEffect } from "react"












const CustomImage=()=>{
//    const kalyandATA=useSelector(state=>state.profile)
//    console.log('kalyandATA',kalyandATA)
//    const ramanaDATA=useSelector(state=>state.tickets)
//    console.log('ramanaDATA',ramanaDATA)
//    const dispatch=useDispatch()
const amnaDATA=useSelector(state=>state.products)
console.log('amnaDATA',amnaDATA)
const dispatch=useDispatch()


       useEffect(()=>{
    dispatch(fetchproducts())
},[])


// useEffect(()=>{
//     dispatch(fetchproducts())
// },[])


// const clickHandler=()=>{
//     dispatch(changeUsername("ramana"))
// }
    

    return(
        <div>
            
{/* <h1>welcome-----{kalyandATA.name}</h1>
<button onClick={clickHandler}>change changeUsername</button>
        <button onClick={()=>dispatch(bookedTickets(3))}>bookedTickets</button>
        <img  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"   height={100} width={100} alt="bag pack"/>
       <h6>totalTickets.{ramanaDATA.totalTickets}</h6>
       <h2>bookedTickets{ramanaDATA.bookedTickets}</h2>
       <h3>avaliabletickets.{ramanaDATA.totalTickets-ramanaDATA.bookedTickets}</h3> */}
        </div>
    )
}
export default CustomImage
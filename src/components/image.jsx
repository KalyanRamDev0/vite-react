import {  useDispatch, useSelector } from "react-redux"
import { bookedTickets } from "./redux/tickets/action"












const CustomImage=()=>{
   const kalyandATA=useSelector(state=>state)
   console.log('kalyandATA',kalyandATA)
   const dispatch=useDispatch()


    

    return(
        <div>


        <button onClick={()=>dispatch(bookedTickets(3))}>bookedTickets</button>
        <img  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"   height={100} width={100} alt="bag pack"/>
       <h1>totalTickets.{kalyandATA.totalTickets}</h1>
       <h2>bookedTickets{kalyandATA.bookedTickets}</h2>
       <h3>avaliabletickets.{kalyandATA.totalTickets-kalyandATA.bookedTickets}</h3>
        </div>
    )
}
export default CustomImage
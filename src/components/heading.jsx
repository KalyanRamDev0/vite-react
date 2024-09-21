








//  export const MainHeading=()=>{

import { useDispatch, useSelector } from "react-redux"
import { cancelTickets } from "./redux/tickets/action"

//     const reduxstoreData=useSelector(state=>state)
//     return(
//        <>
//         <h1>hello user kalyan</h1>
//         <h1>hello user kalyan</h1>
//         <h1>hello user kalyan</h1>
//         <h1>hello user kalyan</h1>
//         <h1> kalyan</h1>
//         <h1>hello</h1>
//         <h1>user </h1>
//         </>
//     )
// }
// export default MainHeading



 export const SecondaryMainHeading=()=>{
  const kalyandATA =useSelector(state=>state.products)
  console.log('kalyanredux',kalyandATA)
  const dispatch=useDispatch()


    return(
        <>
       <div>{products.map(each=><pre>{JSON.stringify(each)}</pre>)}</div>
        {/* <button  onClick={()=>dispatch(cancelTickets(10))}>cancelTickets</button>
        <h1>cancelledtickets.{kalyandATA.cancelTickets}</h1>
        <h1>totalTickets.{kalyandATA.totalTickets}</h1>
        <h2>bookedTickets{kalyandATA.bookedTickets}</h2> */}
        </>
    )
}

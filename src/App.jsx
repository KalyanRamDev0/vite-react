
//import LoginComponent from "./components/login";
import CoustomButton from "./components/button.jsx";
import Greeting from "./components/greeting/greeting.jsx";
import style from "./components/greeting/greeging.module.css"
import Customcard from "./components/bootstrap/custom-card.jsx";
import { employeeDetails } from "./components/data/employeedata.js";
import FirstComponent from "./components/bootstrap/first-component.jsx";
import BasicExample from "./components/bootstrap/navbar.jsx";
import Mounting from "./components/lifecycle/lifecycle.jsx";
import Child from "./components/lifecycle/child.jsx";






const App=()=>{

 return(
  <div >
   {/* hello kalyan
   <div className={style.card}> hello kalyan</div>
   <CoustomButton/>
   <Greeting/>
   */}
   {/* {
    employeeDetails.map(each=>{
return(
    <>
     <Customcard     title={each.name} text={each.designation}/>
    </>
)


    })
   } */}
  {/* <Customcard     title={"john"} text={"software dev"}/> */}
  {/* <FirstComponent></FirstComponent>
  <BasicExample></BasicExample> */}
  <Mounting color="red"/>
  <Child></Child>
  </div>
 ) 
}
export default App;
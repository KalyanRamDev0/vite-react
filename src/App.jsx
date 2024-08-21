
import CustomList from "./components/list.jsx"
import { CustomOrderList } from "./components/list.jsx";
import { SecondaryMainHeading } from "./components/heading.jsx";
import  MainHeading from "./components/heading.jsx";
import CoustomButton from "./components/button.jsx";




const App=()=>{

 return(
  <div>
    <ul>
       <li>mango</li>
       <li>banana</li>
       </ul>
    <h1>hello posi </h1>
    <CustomList></CustomList>
    <CustomList></CustomList>
    <CustomList></CustomList>
    <CustomOrderList></CustomOrderList>
    <MainHeading></MainHeading>
    <SecondaryMainHeading></SecondaryMainHeading>
    <CoustomButton></CoustomButton>
  </div>
 ) 
}
export default App;
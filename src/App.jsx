

import CustomImage from "./components/image.jsx";




const App=()=>{
  const imageListing=[
    {
    name:"bag1",
    src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" ,
    height:30"
    width:

 } ]

 return(
  <>
    
    <CustomImage source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"  height="30" width="100" alternatetext="bag pack" />
    <CustomImage source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"  height="50" width="100" alternatetext="bag pack" />
    <CustomImage source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"  height="80" width="100" alternatetext="bag pack" />
    <CustomImage source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"  height="100" width="100" alternatetext="bag pack" />
    </>
 ) 
}
export default App;
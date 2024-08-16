

import CustomList from "./components/list/list.jsx"
import { CustomOrderlist } from "./components/list/list.jsx"
import {MainHeading,SecondaryMainHeading}  from "./components/heading/headings.jsx"


const App =()=>{
  return(
    <div className="hello">
      <h2>hello world</h2>
      <CustomList></CustomList>
      <CustomOrderlist></CustomOrderlist>
      <MainHeading></MainHeading>
      <SecondaryMainHeading></SecondaryMainHeading>
      
    </div>
  )
}
export default App
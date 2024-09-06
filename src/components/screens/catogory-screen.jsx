import { Link, Outlet } from "react-router-dom"
import NavBar from "../../navbar/navbars"
import { ElectronicsScreen } from "./electronics"






const CategoryScreen=()=>{
    return(
        <>
       <NavBar/>
        <h2>category screen</h2>
        <Link to={"Electronics"}> Electronics</Link>
        <Link to={"Jewellary"}>Jewellary</Link>
        
        <Outlet/>
        </>
    )
}
export default CategoryScreen
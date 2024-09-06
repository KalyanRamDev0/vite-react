import { BrowserRouter, Routes , Route } from "react-router-dom"
import HomeScreen from "../components/screens/home-screens"
import AboutScreen from "../components/screens/about-screen"
import InvalidScreen from "../components/screens/invalid screen"
import CategoryScreen from "../components/screens/catogory-screen"










const NavigationStack=()=>{
   
    return(
        <>
     
<BrowserRouter>

<Routes>
<Route path="/" element={<HomeScreen/>}></Route>
<Route path="/about" element={<AboutScreen/>}></Route>

<Route path="/*" element={<InvalidScreen/>}></Route>
<Route path="category" element={<CategoryScreen/>}>
<Route path="" element={<Jewellaryscreen/>}></Route>
<Route path="" element={<ElectronicsScreen/>}></Route>

</Route>





</Routes>
</BrowserRouter>
</>
        
       )
    
    
    }



export default NavigationStack
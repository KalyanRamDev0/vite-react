import { BrowserRouter, Routes , Route } from "react-router-dom"
import HomeScreen from "../components/screens/home-screens"
import AboutScreen from "../components/screens/about-screen"







const NavigationStack=()=>{
    return(
<BrowserRouter>

<Routes>
<Route path="/" element={<HomeScreen/>}></Route>
<Route path="/about" element={<AboutScreen/>}></Route>





</Routes>
</BrowserRouter>
        
       )
    
    
    }



export default NavigationStack
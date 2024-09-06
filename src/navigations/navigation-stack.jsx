import { BrowserRouter, Routes , Route } from "react-router-dom"
import HomeScreen from "../components/screens/home-screens"
import AboutScreen from "../components/screens/about-screen"
import InvalidScreen from "../components/screens/invalid screen"
import CategoryScreen from "../components/screens/catogory-screen"
import { ElectronicsScreen } from "../components/screens/electronics"
import { JewellaryScreen } from "../components/screens/Jewellaryscreen.jsx"
import { ProductDetailScreen } from "../components/screens/productdetailscreen.jsx"
import{ProductScreen} from "../components/screens/productscreen.jsx"










const NavigationStack=()=>{
   
    return(
        <>
     
<BrowserRouter>

<Routes>
<Route path="/" element={<HomeScreen/>}></Route>
<Route path="/about" element={<AboutScreen/>}></Route>

<Route path="/*" element={<InvalidScreen/>}></Route>
<Route path="category" element={<CategoryScreen/>}>
<Route index element={<ElectronicsScreen/>}/>
<Route path="Jewellary" element={<JewellaryScreen/>}></Route>
<Route path="Electronics" element={<ElectronicsScreen/>}></Route>

</Route>
<Route path="/Products" element={<ProductScreen/>}></Route>
<Route path="/Products/:productId" element={<ProductDetailScreen/>}></Route>






</Routes>
</BrowserRouter>
</>
        
       )
    
    
    }



export default NavigationStack
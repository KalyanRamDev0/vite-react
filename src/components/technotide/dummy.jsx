import Prices from "./courses"
import Home from "./home"
import UdemyClone from "./html"
import Courses from "./prices"
import Signup from "./signup"
import { BrowserRouter, Routes , Route } from "react-router-dom"

const NavigationStack=()=>{
   
    return(
        <>
     
<BrowserRouter>

<Routes>
<Route exact path="/" component={UdemyClone} />
        <Route path="/courses" component={Courses} />
        <Route path="/pricing" component={Prices} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Home" component={Home} />
</Routes>
</BrowserRouter>
</>
)
}
export default NavigationStack










import { useLinkClickHandler, useNavigate } from "react-router-dom"
import NavBar from "../../navbar/navbars"









const InvalidScreen=()=>{
    const navigate = useNavigate()


    handleNavigation=()=>{
        navigate("/")
    }
    return(
<>
<h2>page not found</h2>
<button onClick={handleNavigation}>back to screen</button>




</>


    )
}
export default InvalidScreen
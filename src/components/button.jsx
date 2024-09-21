import { useEffect } from "react"
import { useDispatch } from "react-redux"







const CoustomButton =()=>{
   
    const amnaDATA=useSelector(state=>state.products)
console.log('amnaDATA',amnaDATA)


const dispatch=useDispatch()


useEffect(()=>{
    dispatch(fetchproducts())
},[])





return(
    <button  style={buttonStyles} onClick={onPress}   >{text}</button>
    
)
}
export default CoustomButton
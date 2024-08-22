import { InfinitySpin } from "react-loader-spinner"





const Spinners=(props)=>{
    return(
        <InfinitySpin
  visible={true}
  width="200"
  
  ariaLabel="infinity-spin-loading"
  {...props}
  />
    )
}
export default Spinners
import { useRef } from "react";







const useRefExample=()=>{

const reference= useRef(0)

clickHandler=()=>{
    reference.current=+1
    console.log(reference.current)
}



    return(

        <>
<h2>{reference.current}</h2>
<button onClick={clickHandler}>click</button>

        </>
    )

}
export default useRefExample;
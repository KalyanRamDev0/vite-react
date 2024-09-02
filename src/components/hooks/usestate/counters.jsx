import { useState } from "react"




const Counter=()=>{



    useState()
    const[age,setAge]=useState(10)


    const clickHandler=(type)=>{
        switch(type){
            case"INCREMENT":
           setInterval(()=>{
            setAge(age=>age+1)
           },1000)
        // setAge(age+1)
            break;
            case"DECREMENT":
                   if(age>0){
                            setAge(age-1)
                
                
                        }
                        else{
                            alert("seee it once")
                        }
                        break;
                
            case"RESET":
            setAge(0)
            default
            break;
        }
    }

    // const incrementAgeHandler=()=>{
    //     setAge(age+1)
    // }
    //  const decrementAgeHandler=()=>{
    //     if(age>0){
    //         setAge(age-1)


    //     }
    //     else{
    //         alert("seee it once")
    //     }




        
    // }
    // const resretAgeHandle=()=>{
    //     setAge(0)
    // }



    return(
        <>
        <h3>Counter example</h3>
        <h2> counter{age}</h2>
        <button onClick={()=>clickHandler("INCREMENT")}>increment</button>
        <button onClick={()=>clickHandler("DECREMENT")}>increment</button>
        <button onClick={()=>clickHandler("RESET")}>increment</button>
        </>
    )

} 
export default Counter
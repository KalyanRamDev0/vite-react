import { useState } from "react"





const UseMemo=()=>{
const[milkQty,setMilkQty]=useState(1)
const[RiceQty,setRiceQty]=useState(1)

const milkPriceCalculation=()=>{
    const milkPrice=50
    return milkQty*milkPrice
}

const ricePriceCalculation=()=>{
    const riceprice=100
    return RiceQty*riceprice
}
const milkHandler=()=>{
    setMilkQty(milkQty+1)
}
const riceHandler=()=>{
    setRiceQty(RiceQty+1)
}




    return(
        <>
        <h4>milk quantity {milkQty} -price {milkPriceCalculation()}</h4>
        <h4>rice quantity{RiceQty} -price {ricePriceCalculation()}</h4>
        <button onClick={milkHandler}>change in milk quantity</button>
        <br/>
        <button onClick={riceHandler}>change in rice quantity</button>

        </>
    )
}
export default UseMemo
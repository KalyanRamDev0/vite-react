
//import React from "react"

import { useEffect, useState } from "react"


export const ProductScreen=()=>{
useEffect(()=>{fetachDta()},[])
const[data,setData]=useState([])

const fetchData=async()=>{
    const response=await axios.get()
}
    return(
       <div>ProductScreen</div>
    )
}
//export default ProductScreen
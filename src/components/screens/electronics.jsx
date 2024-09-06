
import React, { useEffect,useState } from "react"
import axios from 'axios'


export const ElectronicsScreen=()=>{
const [data,setData]=useState([])


useEffect(()=>{fetchData()},[])
const fetchData=async()=>{

    try{
    const response=await axios.get("https://fakestoreapi.com/products/category/electronics")
if(response.status==200){
    setData(response.data)
}
    }catch(err){
console.error(err)

}}
    return(
    <div>
        Electronic items are 
        {data.map(each=><>
        <pre>{JSON.stringify(each)}</pre></>)}
        </div>
    )
}

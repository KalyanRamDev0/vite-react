





const CustomList=()=>{
    return(
       <ul>
        <ListItems></ListItems>
       </ul>
    )
}
export default CustomList;

 export const CustomOrderList=()=>{
    return(
      <ol>
      <ListItems></ListItems>
     
      </ol>
      )
}

 export const ListItems=()=>{
    const Fruits=["mango","banana","kiwi","orange","papaya"]
    return(
        <>
{Fruits.map((eachfruit)=>{
    return(<li>{eachfruit}</li>) })}
    
        
        </>
    
    )
       
 
}
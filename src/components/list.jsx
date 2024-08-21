





const CustomList=(prop)=>{
    const{List}=prop
    return(
       <ul>
   <>
{
List.map((eachfruit)=>{
    return <li>{eachfruit}</li>
     })
     }
    
        
        </>
    
       </ul>
    )
}
export default CustomList;

//  export const CustomOrderList=()=>{
//     return(
//       <ol>
//       <ListItems></ListItems>
     
//       </ol>
//       )
// }

//  export const ListItems=()=>{
//     const Fruits=["mango","banana","kiwi","orange","papaya"]
//     return(
//         <>
// {Fruits.map((eachfruit)=>{
//     return <li>{eachfruit}</li> })}
    
        
//         </>
    
//     )
       
 
// }



<<<<<<< HEAD
const CustomList=(prop)=>{
    const{list}=prop
    return(
        <ol>
        <>
        {
        list.map((eachFruit,index)=>{
            return <li key={index} >{eachFruit}</li>
        })
        }
            </>
        </ol>
=======



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
>>>>>>> fb41e283501ff636e959b3473913b61a6a1693f5
    )
}

<<<<<<< HEAD
export default CustomList


export const CustomOrderedList=()=>{
    return(
        <ol>
            <ListItems/>
        </ol>
    )
}


const ListItems=()=>{

    const Fruits=["Apple","Banana","Kiwi","Mango","Orange"]
    return(
        <>
        {
        Fruits.map((eachFruit)=>{
            return <li>{eachFruit}</li>
        })
        }
            </>




    )
}


// DRY : DONT REPEAT YOURSELF
=======
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
>>>>>>> fb41e283501ff636e959b3473913b61a6a1693f5

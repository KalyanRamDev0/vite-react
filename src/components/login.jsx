






const LoginComponent=(props)=>{
    const{isAdmin=false}=props
    return(
        <div>
            {
                // isAdmin ?<h3>welcome admin</h3>:<h3>welcome user</h3>
                //<h3>welcome {isAdmin?"Admin":"user"}</h3>
                isAdmin && <h3>welcome admin kalyan</h3>
            }
        </div>
    )
//    if(isAdmin){
//    return(
//     <h3>welcome admin</h3>
//    )
// }else{
//     return(
//         <h3>welcome user</h3>
//     )
//    }
   }
    

export  default LoginComponent;
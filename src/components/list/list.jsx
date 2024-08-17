






const CustomList=()=>{
    return(
        <ul>
        <Listitems></Listitems>
        </ul>
    )

}
export default CustomList

export const CustomOrderlist=()=>{
    return(
        <ol>
            <Listitems></Listitems>
        </ol>
    )
}
export const Listitems=()=>{
    return(
         <div>
             <li>apple</li>
             <li>papaya</li>
             <li>banana</li>
             <li>mango</li>
             <li>orange</li>
             <li>lemon</li>
             <li>papad</li>
             
         </div>
    )
}
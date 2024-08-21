






const CustomImage=(props)=>{
    console.log(props)
    const{source,height,width,alternatetext}=props
    return(
        <img  src={source}   height={height} width={width} alt={alternatetext}   />
    )
}
export default CustomImage
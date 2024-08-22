






const CoustomButton =(prop)=>{
    const {text="button",onPress=()=>{},}=prop
    const buttonText="Click me"
    const buttonStyles={backgroundColor:"green", color:"red"}
return(
    <button  style={buttonStyles} onClick={onPress}   >{text}</button>
    
)
}
export default CoustomButton
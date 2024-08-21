






const CustomButton =(prop)=>{
    const {text="button",onPress=()=>{},bgcolour="green"}=prop
    const buttonText="click me"
return(
    <button style={{backgroundColor:bgcolour}} onClick={onPress}>{text}</button>
    
)
}
export default CustomButton;
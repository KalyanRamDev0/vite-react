import { Component } from "react"
import Customcard from "../bootstrap/custom-card"
import { Button } from "react-bootstrap"







class CardAddition extends Component{
    state={
        employeData:[{name:"kalyan",salary:"1000000",role:"ang dev"},{name:"amna",salary:"300000",role:"react dev"}]
    }

      clickHandler=()=>{
        const newData={name:"ramana",salary:"2000000",role:"nextjs"}
        const updateData={...this.state.employeData,newData}
        this.setState({
            employedata:updateData
        })

// need to add cards
      }

    render(){
        return(
            <>
            <Button variant="primary" onClick={this.clickHandler}>addcards</Button>
            <div className="container mt-5">
            <div className="row">
            {
                this.state.employeData.map(eachEmploy=>{
return(
   
               
  
      <div className="col-sm-4"><Customcard title={eachEmploy.name} text={eachEmploy.role}/> </div>
    
)

                })
            }
            </div>
</div>

       </>
    )}
      
}
export default CardAddition
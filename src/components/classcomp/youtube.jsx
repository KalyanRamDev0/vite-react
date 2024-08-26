

import { Component } from "react"
import FirstComponent from "../bootstrap/first-component"
import Counters from "./counters"




class YouTubeButton extends Component{
    state={
        isSubcribe:false,
        text1:"subcribe",
        text2:"subcribed"

    }



    ClickHandler=()=>{
                     this.setState({ isSubcribe:
                        !this.state.isSubcribe
    // alert("hey kalyan")
        })
    }
        render(){
            return(
                <>
            <button onClick={this.ClickHandler}>{this.state.isSubcribe?this.state.text2:this.state.text1}</button>
            {this.state.isSubcribe ? <div>
              <FirstComponent/>
              <Counters/>
            </div>:
            <div> please subscribe</div>} 
            </>
        )
 } 
}
export default YouTubeButton
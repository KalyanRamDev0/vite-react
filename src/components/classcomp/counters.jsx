
import { Component } from "react"


class Counters extends Component{
    state={
        count:0
    }
    IncrementHandler=()=>{
this.setState({count:this.state.count+1})
    }

render(){
    return(
        <>
        <h1>counter{this.state.count}</h1>
        <button onClick={this.IncrementHandler}>increment</button>
        <button>decrement</button>
        <button>reset</button>
        </>
    )
}


} 
export default Counters
import { useReducer, useState } from "react"

const reducerFunction=(state,action)=>{ 



    switch(action.type){
        case "INCREMENT_AGE":
            return {...state,age:state.age+1}
            case "CHANGE_NAME":
            return {...state,username:action.payload}
            default:
                return age
    }

}



const UseReduserExample=()=>{


const initialState={
    username:"raju",
    age:33,
    todos:["woke up at 7am"],
    homeaddress:{}
}
const incrementAgeHandler=()=>{
    dispatchFunction({
        type:"INCREMENT_AGE",
        payload:1
    })
}

const[currentState,dispatchFunction]=useReducer(reducerFunction,initialState)

const[name,setName]=useState("")
const nameHandler=(event)=>{
    setName(event.target.value)
}

const onSubmit=()=>{
    dispatchFunction({
        type:"CHANGE_NAME",
        payload:name
    })

}


    return(
        <div>

            <input type='text' value={name} onClick={nameHandler}/>
            <button onClick={onSubmit}>submit</button>
<h1>{currentState.username}</h1>
<h3>{currentState.age}</h3>
<button onClick={incrementAgeHandler}>increment age</button>
{ initialState.todos.map(eachTodo=><>
<h5>{eachTodo}</h5>
</>)}
</div>
    )
}
export default UseReduserExample
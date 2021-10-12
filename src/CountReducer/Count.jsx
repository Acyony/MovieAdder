import React, { useContext ,useState} from "react"
import { myContext } from './ReducerContext'
export default function Count() {

    const { state, dispatch } = useContext(myContext)
    const [value,setValue]=useState("")
    return (

        <div>
            <h3>{state.count}</h3>
            <h2>{state.message}</h2>
            
            <h1>{ state.name}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: "Hello" })} >Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: "Zhino" })} >Decrement</button>

 
            <input type="text" placeholder="inter your name" onChange={(e)=>setValue(e.target.value)}  />
            <button onClick={(e)=>dispatch({type:"INPUT_DATA",payload:value})} type="submit">Add</button>
        </div>


    )

}


//? dispatch({type:""})
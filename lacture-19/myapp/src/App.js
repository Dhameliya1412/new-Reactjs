import React, { useReducer } from 'react'

let initialArg = 100;

const reducer = (state, action_) => {
console.log(state, action, "state, action,");

if (action.type == "increment"){
  return state + 1
}
if (action.type == "decrement"){
  return state - 1
}
return state;
}

function App() {
  const [state , dispatch] = useReducer(reducer, initialArg)
  return (
    <div className="App">
      {state}
      <br/>
      <button onClick={()=>dispatch({type:"increment"})}> increament </button>
      <button onClick={()=>dispatch({type:"decrement"})}> decreament </button>
    
    </div>
  );
}

export default App;


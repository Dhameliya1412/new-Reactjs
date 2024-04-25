import './ App.css';
import React,{useRef} from "react"

function App() {

const ref = useRef();
console.log(ref,"ref");

const handleRef = () => {

  ref.current.style.color="red";

}
return(
<div className="App">
  <input type='text' ref={ref}/>
<button onClick={handleRef}>click Me</button>  
</div>   
         
);
}

export default App;

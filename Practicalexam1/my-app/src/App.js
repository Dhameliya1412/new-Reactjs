import { BrowserRouter , Routes , Route } from "react-router-dom"
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Setting from "./Setting";
import Button1 from "./Button1";    

function App() {
    return (
      <div className="App"> 
        <BrowserRouter >
      
        <Navbar/>
        <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/> 
        <Route path='/About' element={<About/>}/>
        <Route path='/Setting' element={<Setting/>}/>
        <Route path='/Button1' element={<Button1/>}/>
        
        </Routes>
       </BrowserRouter>
      </div>
    )
  }

export default App;
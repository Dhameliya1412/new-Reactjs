import { BrowserRouter , Routes , Route } from "react-router-dom"
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Setting from "./Setting";
import Login from "./Login";
import Logout from "./Logout";
import Add from "./Add";

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
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Logout' element={<Logout/>}/>
        <Route path='/Add' element={<Add/>}/>

        
        </Routes>
       </BrowserRouter>
      </div>
    )
  }

export default App;
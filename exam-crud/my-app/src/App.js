import { BrowserRouter , Routes , Route } from "react-router-dom"
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";

function App() {
    return (
      <div className="App"> 
        <BrowserRouter >
      
        <Navbar/>
        <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Logout' element={<Logout/>}/>

        
        </Routes>
       </BrowserRouter>
      </div>
    )
  }

export default App;
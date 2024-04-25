import { BrowserRouter , Routes , Route } from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Setting from './Setting'
import Document from './Document'
import Help from './Help'


function App() {
    return (
      <div className="App" > 
        <BrowserRouter >
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/> 
        <Route path='/Setting' element={<Setting/>}/>
        <Route path='/Document' element={<Document/>}/>
        <Route path='/Help' element={<Help/>}/>
        
        </Routes>
       </BrowserRouter>
      </div>
    )
  }

export default App;
import React from 'react'
import { useContext } from 'react'
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom"
import NavBar from './components/Heder'
import Heder2 from './components/Heder2'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Footer from './components/Footer'
import Page404 from './components/Page404'
import Home from './components/Home/Home'
import Contact from './components/Contact'
import Log from './components/Log'
import Welcome from './components/Welcome'
import Card from './components/Card'
import Shope from './components/Shope'
import About from './components/About'
import List from './components/List'
import {Provider} from "react-redux"
import Store from './Store'
import Popular_p from './components/Popular_p'
import Carts from './components/Carts'

function App() {
  return (
    <>
    <div>  

     <Provider store={Store}> 
      <BrowserRouter>
      <Welcome/>
      <NavBar />
      <Heder2 />
        <Routes>
          <Route path='/' element={ <Home />} ></Route>
          <Route path='*' element={ <Shope />} ></Route>
          <Route path='Carts' element={ <Carts/>} ></Route>
          <Route path='log' element={ <Log />} ></Route>
          <Route path='Page404' element={ <Page404 />} ></Route>
          <Route path='Contact' element={ <Contact />} ></Route>
          {/* <Route path='page2' element={ <Page2 />} ></Route> */}
          <Route path='About' element={ <About />} ></Route>
          <Route path='List' element={ <List />} ></Route>
          <Route path='Popular_p' element={ <Popular_p />}></Route>
          <Route path='Card' element={ <Card/>} ></Route>

        </Routes>
      <Footer />
      <Card/>
      <About/>
      <List/>
    
      </BrowserRouter>
      </Provider>    
      

    </div>
      </>
  )
}

export default App;


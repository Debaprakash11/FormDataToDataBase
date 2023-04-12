import React from 'react'
import FirstPage from './FirstPage'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import Response from './Response'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div> 
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<FirstPage/>}></Route>
        <Route path='/second' element={<SecondPage/>}></Route>
        <Route path='/third' element={<ThirdPage/>}></Route>
        <Route path='/response' element={<Response/>}></Route>
       </Routes>
       </BrowserRouter>



    </div>
  )
}

export default App
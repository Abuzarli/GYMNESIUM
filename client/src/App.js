import React from 'react'
import NAVBAR from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import HOME from './pages/home'
import ADDPRODUCT from './pages/add product'



const App = () => {
  return (
    <>
      <NAVBAR/>
    <Routes>
  <Route path='/' element={<HOME/>}/>
  <Route path='/add-product' element= {<ADDPRODUCT/>}/>
  </Routes>
    </>
  )
}

export default App

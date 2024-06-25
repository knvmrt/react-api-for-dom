import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import ProductDetails from '../pages/ProductDetails'
import Error from "../pages/Error"

const MyRoots = () => {
  return (
    <>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='*' element={<Error />} />
        </Routes>

    </>
  )
}

export default MyRoots
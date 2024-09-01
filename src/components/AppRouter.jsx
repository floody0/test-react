import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductPage from '../pages/ProductPage'
import HomePage from '../pages/HomePage'
import Cart from './Cart/Cart'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products/:slug" element={<ProductPage/>}/>
        <Route path="/cart" element={<Cart/>}/> 
    </Routes>
  )
}

export default AppRouter
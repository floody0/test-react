import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductPage from '../pages/ProductPage'
import HomePage from '../pages/HomePage'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products/:slug" element={<ProductPage/>}/>
    </Routes>
  )
}

export default AppRouter
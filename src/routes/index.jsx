import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Products} from '../pages'

function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Products/>}/>
    </Routes>
  )
}

export default CustomRoutes
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { DetailPage } from '../pages/DetailPage'

export const DashboardRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

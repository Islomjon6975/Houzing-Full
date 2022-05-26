import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { NotFound } from '../components/NotFound'
import { navbar } from '../utils/navbar'

export const Root = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'} />} />
        <Route element={<Navbar />}>
            {navbar.map((item) => (
                <Route key={item.id} path={item.path} element={item.element} />
              )
            )}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
  
}

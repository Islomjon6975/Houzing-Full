import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { navbar } from '../utils/navbar'

export const Root = () => {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
            {navbar.map((item) => (
                <Route key={item.id} path={item.path} element={item.element} />
              )
            )}
        </Route>
      </Routes>
    </>
  )
}

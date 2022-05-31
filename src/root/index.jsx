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

        <Route>
          {
            navbar.map(({path, element, id, hidden, useParams}) => {
              return !useParams && hidden && <Route key={id} path={path} element={element} />;
            })
          }
        </Route>
        
        <Route element={<Navbar />}>
            {navbar.map(({id, hidden, path, element, useParams}) => {
                return (useParams || !hidden) &&  <Route key={id} path={path} element={element} />
            }
            )}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
  
}

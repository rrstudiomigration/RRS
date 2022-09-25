import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../Contacts/Contact'
import Layout from '../layout/Layout'
import Main from '../Main/Main'
import NotFound from '../NotFound/404'
import Portfolio from '../Portfolio/Portfolio'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRouter

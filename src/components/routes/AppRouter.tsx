import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from '../../hoc/AuthProvider'
import RequireAuth from '../../hoc/RequireAuth'
import Admin from '../../pages/admin/Admin'
import Login from '../../pages/login/Login'
import Contact from '../Contacts/Contact'
import Layout from '../layout/Layout'
import Main from '../Main/Main'
import NotFound from '../NotFound/404'
import Portfolio from '../Portfolio/Portfolio'

const AppRouter = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
            <Route path='login' element={<Login />} />
            <Route
              path='admin'
              element={
                <RequireAuth>
                  <Admin />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default AppRouter

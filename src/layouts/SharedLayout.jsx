import React from 'react'
// import { HeaderWithNavbar } from './HeaderWithNavbar'
import { HeaderUser } from './HeaderUser'
import Footer from './Footer'
import { Link, Outlet } from 'react-router-dom'
export const SharedLayout = () => {
  return (
    <>
        <HeaderUser user="Binderiya" />
        <Outlet />
        <Footer />
    </>
  )
}

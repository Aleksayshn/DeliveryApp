import React from 'react'
import { Suspense } from "react";
import { Outlet } from "react-router";
import AppBar from './AppBar/AppBar';
import { Footer } from './Footer/Footer';

const Layout = ({ children }) => {
    return (
      <>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
        <Footer />
      </>
  )
}

export default Layout
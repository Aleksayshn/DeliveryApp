import React from 'react'
import { Suspense } from "react";
import { Outlet } from "react-router";
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer } from "react-toastify";
import AppBar from './AppBar/AppBar';
import { Footer } from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <Box height="100vh" width="100%">
        <AppBar />
        <Suspense fallback={<CircularProgress color="primary" size={50} />}>
            <Outlet />
        </Suspense>
          <Footer />
        <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Box>
  )
}

export default Layout

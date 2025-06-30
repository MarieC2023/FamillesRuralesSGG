import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from './ScrollToTop'

const Layout = () => (
  <>
    <Header />
    <ScrollToTop />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
)

export default Layout

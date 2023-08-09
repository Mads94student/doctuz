
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './bases/header'
import Footer from './bases/footer'

function RootLayout() {
  return (
    <div>
        <div className='flex h-32 w-full bg-page-header justify-start items-center'>
            <Header />   
        </div>
        <main>
            <Outlet />
        </main>
    <div className='h-auto bg-slate'>
        <Footer />
      </div>
    </div>
  )
}

export default RootLayout

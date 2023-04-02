import React from 'react'
import DashSideBar from "./DashSideBar"
import { Outlet } from 'react-router-dom'
// import Footer from '../Layout/Footer'

const DashLayOut = () => {
  return (
    <div>
      <DashSideBar />
      <main className='ml-[200px] h-screen'>{<Outlet/>}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default DashLayOut


import React from 'react'
import { Link } from 'react-router-dom'

const DashSideBar = () => {
  return (
    <div className='flex flex-col fixed top-0 left-0 w-[200px] h-screen bg-slate-500'>
      <Link to="/dashboard/dashboardpage">Dashboard</Link>
      <Link to="/dashboard/analytics">Analytics</Link>
      <Link to="/dashboard/products">Products</Link>
      <Link to="/dashboard/comments">Comments</Link>
      <Link to="/dashboard/about">About</Link>
    </div>
  )
}

export default DashSideBar

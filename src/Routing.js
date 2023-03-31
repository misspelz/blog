import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./screens/Home"
import Blog from "./screens/Blog"
import Store from "./screens/Store"
import Layout from './components/Layout/Layout'
import Dashboard from "./screens/Dashboard"
import CartItem from './components/Store/CartItem'
import BlogTitle from './components/Home/PostDetail'

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout><Home /></Layout>} />
                <Route path='/blog' element={<Layout><Blog /></Layout>} />
                <Route path='/blog/:id' element={<Layout><BlogTitle /></Layout>} />
                <Route path='/store' element={<Layout><Store /></Layout>} />
                <Route path='/cart' element={<Layout><CartItem /></Layout>} />
                <Route path='/dashboard' element={<Layout><Dashboard /></Layout>} />
            </Routes>
        </div>
    )
}

export default Router

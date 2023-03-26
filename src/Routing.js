import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./screens/Home"
import Blog from "./screens/Home"
import Store from "./screens/Home"
import Layout from './components/Layout/Layout'
import Dashboard from "./components/Dashboard/Dashboard"

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout><Home /></Layout>} />
                <Route path='/blog' element={<Layout><Blog /></Layout>} />
                <Route path='/store' element={<Layout><Store /></Layout>} />
                <Route path='/dashboard' element={<Layout><Dashboard /></Layout>} />
            </Routes>
        </div>
    )
}

export default Router

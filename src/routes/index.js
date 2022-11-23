import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/home'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'
import Edit from '../pages/dashboard/[id]'
import NewReg from '../pages/create'
import Navbar from '../components/navbar'
import Menu from '../pages/menu'

function AppRoutes() {
  console.log(localStorage.getItem('token'))
  if (localStorage.getItem('token') === null) {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route exact path="/cadastro" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    )
  }

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/create" element={<NewReg />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/dashboard/:id" element={<Edit />} />
        </Routes>
      </Router>
    </>
  )
}

export default AppRoutes

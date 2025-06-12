

import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import React from 'react'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
     <HeaderComponent/>
     <Routes>
      <Route>
        <Route path="/" element={<ListEmployeeComponent/>}/>
        <Route path="/employees" element={<ListEmployeeComponent/>}/>
        {/* <Route path="/add-employee" element={<ListEmployeeComponent/>}/>
        <Route path="/edit-employee/:id" element={<ListEmployeeComponent/>}/>
        <Route path="/view-employee/:id" element={<ListEmployeeComponent/>}/> */}
      </Route>
     </Routes>
     <FooterComponent/>
     </BrowserRouter>
    
    </>
  )
}

export default App

import { Suspense, useState } from 'react'
import './App.css'
// s;
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Body from './components/Body'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import { AppRoutesConst } from './utilities/app-const';
import Homepage from './pages/HomePage/Homepage'

function App() {
  

  return (
    <>
    <BrowserRouter basename='/' >
    <Routes>
        <Route path={AppRoutesConst.login}element={<Suspense><LoginPage /></Suspense>}/>
        <Route path={"/"}element={<Suspense><Homepage /></Suspense>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

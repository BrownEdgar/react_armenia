import React from 'react'
import { About, ContactUs, Home, News, OurProducts } from './components/Pages';
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import ROUTES from './routes';


export default function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home/>}/>
          <Route path={ROUTES.ABOUT} element={<About/>}/>
          <Route path={ROUTES.OURPRODUCTS} element={<OurProducts/>}/>
          <Route path={ROUTES.NEWS} element={<News/>}/>
          <Route path={ROUTES.CONTACTUS} element={<ContactUs/>}/>
        </Routes>
      </main>
    </div>
  )
}

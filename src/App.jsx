


import React from 'react';
import { BrowserRouter as Router, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './Compoents/Layouts/Layouts'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='blog' element={<Blog />} />
      </Route>
    )
  )

  return (
    <div className='App'>
      <main>
        <RouterProvider router={routes} />
      </main>
    </div>
  );
}

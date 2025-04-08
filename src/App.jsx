import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Layout from './component/Layout';
import { MyinfoPorvider } from './context/MyinfoContext';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="/about" element={<About />}/>
    </Route>
)
);



function App() {
 

  return (
    <>
    <MyinfoPorvider>
        <RouterProvider router={router} />
    </MyinfoPorvider>
    </>
  )
}

export default App

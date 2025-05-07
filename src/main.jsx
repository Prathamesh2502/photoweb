import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/contact.jsx'
import Child from './typeofpainting/Child.jsx'
import Hotel from './typeofpainting/hotel.jsx'
import Homee from './typeofpainting/Homee.jsx'
import Mycard from './Mycard/Mycard.jsx'

// Setup router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'Mycard', element: <Mycard /> },
      { path: 'child', element: <Child /> },
      { path: 'hotel', element: <Hotel/> },
      { path: 'home', element: <Homee/>},
      // { path: 'contact', element: <Contact /> },
      // { path: 'contact', element: <Contact /> },
      // { path: 'contact', element: <Contact /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);

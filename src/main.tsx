import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Login from './pages/Login/index.jsx'
import Register from './pages/Register/index.tsx'
import Home from './pages/Home/index.tsx'

const router = createBrowserRouter([{
  path:"/react-ts_front/",
  element: <App/>,
  children: [
    {
      path:"/react-ts_front/",
      element: <Login/>
    },
    {
      path:"/react-ts_front/register",
      element: <Register/>
    },
    {
      path:"/react-ts_front/home",
      element: <Home/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)

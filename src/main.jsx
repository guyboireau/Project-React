import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header'
import { RouterProvider } from 'react-router5'
import router from "./components/AppRouter";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

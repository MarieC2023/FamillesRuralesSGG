import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import routes from '~react-pages'
import Layout from '@/components/layout/Layout'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

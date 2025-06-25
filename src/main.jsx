// --- Librairies React ---
import React from 'react'
import ReactDOM from 'react-dom/client'

// --- Styles globaux ---
import 'bootstrap/dist/css/bootstrap.min.css' 
import './main.css'                          

// --- JavaScript de Bootstrap (pour le menu burger, etc.) ---
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 

// --- React Router & Pages ---
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from '~react-pages'

// --- Composants globaux ---
import Layout from '@/components/layout/layout.jsx'
import NotFound from './pages/404'


// --- Configuration du routeur ---
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [...routes, { path: '*', element: <NotFound/> }],
  },
])

// --- Rendu ---
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

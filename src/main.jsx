import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import {Home, About, Project, Contact} from './Components'
import { HashRouter } from 'react-router'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/projects',
          element: <Project/>
        },
        {
          path: '/contact',
          element: <Contact/>
        }
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter router={router}>
      <App/>
    </HashRouter>
  </StrictMode>,
)

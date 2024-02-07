import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './routes/Home.jsx'
import Error from './components/Error.jsx'
import ContactUs from './routes/ContactUs.jsx'
import Root from './routes/Root.jsx'
import About from "./routes/About.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path:"/home",
    element: <Home />
  },      
  {
    path: "contact",
    element: <ContactUs />
  },
  {
    path: "/about",
    element: <About />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLeyOut from './leyout/MainLeyOut'
import Home from './components/home/Home'
import AddCoffee from './components/addCoffee/AddCoffee'
import UpdateCoffee from './components/updateCoffee/UpdateCoffee'
import AuthProvider from './providers/AuthProvider'
import Login from './components/login/Login'
import Register from './components/login/Register'


const router = createBrowserRouter([
  {
    path: '/' ,
    element: <MainLeyOut></MainLeyOut>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'add-coffee' ,
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/update-coffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)

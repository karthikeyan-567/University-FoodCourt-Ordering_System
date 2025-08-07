
import Home from './Home/home'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'
import './pageStyle/LoginSignup.css'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Cart" element={<Cart/>} />
    </>
  ))

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
    
  )

}

export default App;

import './App.css'
import Home from './Home/home'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import './pageStyle/LoginSignup.css'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
   
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
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

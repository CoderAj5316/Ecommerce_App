import React from 'react'
import "../src/App.css"
import {Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NavBar from './component/NavBar'
import Register from './pages/Register'
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword'


const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
      </Routes>
    </div>
  )
}

export default App
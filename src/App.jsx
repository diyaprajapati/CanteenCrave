import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './login-signup/Login'
import Signup from './login-signup/Signup'

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path= '/' element= {<Login/>}/>
          <Route path= '/signup' element= {<Signup/>}/>
        </Routes>
      </BrowserRouter>

  )
}

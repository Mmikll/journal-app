<<<<<<< HEAD
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';

=======
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204

export const AuthRoutes = () => {
  return (
    <Routes>
<<<<<<< HEAD
        <Route path="login" element={ <LoginPage /> } />
        <Route path="register" element={ <RegisterPage /> } />

        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
=======
      <Route path='login' element={ <LoginPage/>}/>
      <Route path='register' element={ <RegisterPage/>}/>
      <Route path='/*' element={ <Navigate to='/auth/login'/>}/>
    </Routes>
  )
}


>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204

<<<<<<< HEAD
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui/';
import { useCheckAuth } from '../hooks';
=======

import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JornalRoutes } from "../journal/routes/JornalRoutes"

import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui/components';
import { useCheckAuth } from '../hooks/useCheckAuth';

>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204


export const AppRouter = () => {

<<<<<<< HEAD
  const status = useCheckAuth();

  if ( status === 'checking' ) {
    return <CheckingAuth />
=======
  const status = useCheckAuth()

  if( status === 'checking'){
    return <CheckingAuth/>
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
  }

  return (
    <Routes>

<<<<<<< HEAD
        {
          (status === 'authenticated')
           ? <Route path="/*" element={ <JournalRoutes /> } />
           : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/login' />  } />

        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

        {/* JournalApp */}
        {/* <Route path="/*" element={ <JournalRoutes /> } /> */}
=======
        <Route path="/auth/*" element={<AuthRoutes/>} />

        <Route path="/*" element={<JornalRoutes/>}/>

      {
        (status === 'authenticated')
        ? <Route path="/*" element={ <JournalRoutes /> } />
        : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }

      <Route path ='/*' element = { <Navigate to='/auth/login' /> } />

>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204

    </Routes>
  )
}
<<<<<<< HEAD
=======

>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204

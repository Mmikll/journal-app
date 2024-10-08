
import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JornalRoutes } from "../journal/routes/JornalRoutes"

import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui/components';
import { useCheckAuth } from '../hooks/useCheckAuth';



export const AppRouter = () => {

  const status = useCheckAuth()

  if( status === 'checking'){
    return <CheckingAuth/>
  }

  return (
    <Routes>

        <Route path="/auth/*" element={<AuthRoutes/>} />

        <Route path="/*" element={<JornalRoutes/>}/>

      {
        (status === 'authenticated')
        ? <Route path="/*" element={ <JournalRoutes /> } />
        : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }

      <Route path ='/*' element = { <Navigate to='/auth/login' /> } />


    </Routes>
  )
}


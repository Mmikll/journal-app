import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JornalRoutes } from "../journal/routes/JornalRoutes"


export const AppRouter = () => {
  return (
    <Routes>

        <Route path="/auth/*" element={<AuthRoutes/>} />

        <Route path="/*" element={<JornalRoutes/>}/>

    </Routes>
  )
}


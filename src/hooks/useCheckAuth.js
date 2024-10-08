import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../store/auth"
import { FirebaseAuth } from "../firebase/config"

useSelector

export const useCheckAuth = () =>{

    const { status } = useSelector( state => state.auth)
    const disaptch = useDispatch()
  
    useEffect(() => {
      
        onAuthStateChanged( FirebaseAuth, async( user ) =>{
  
        if (!user) return disaptch( logout())
  
        disaptch( login( user ) )
        
        
      })
    }, [])

    return status
}
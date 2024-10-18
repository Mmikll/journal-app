<<<<<<< HEAD

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
import { startLoadingNotes } from '../store/journal';



export const useCheckAuth = () => {
  
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged( FirebaseAuth, async( user ) => {
            if ( !user ) return dispatch( logout() );

            const { uid, email, displayName, photoURL } = user;
            dispatch( login({ uid, email, displayName, photoURL }) );
            dispatch( startLoadingNotes() );
        })
    }, []);

    return status;
}
=======
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
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204

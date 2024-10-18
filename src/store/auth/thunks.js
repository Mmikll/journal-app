<<<<<<< HEAD
import { loginWithEmailPassword, registerUserWithEmailPassword, singInWithGoogle, logoutFirebase } from '../../firebase/providers';
import { clearNotesLogout } from '../journal/journalSlice';
import { checkingCredentials, logout, login } from './';

export const checkingAuthentication = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        
    }
}


export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await singInWithGoogle();
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ))

    }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await registerUserWithEmailPassword({ email, password, displayName });
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ))

    }

}


export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ));

    }
}


export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutFirebase();
        dispatch( clearNotesLogout())
        dispatch( logout() );

    }
}
=======
import { singInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, logoutFirebase} from "../../firebase/providers"
import { checkingCredentials, logout, login } from "./"

export const checkingAuthentication = ( email, password) =>{
    return async(dispatch) =>{
        dispatch(checkingCredentials())
    }
}

export const startGoogleSingIn = () => {

    return async(dispatch) =>{
        dispatch(checkingCredentials())

        const result = await singInWithGoogle()

        if (!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))
    }
}

export const startRegister = ({email, password, displayName}) => {

    return async(dispatch) =>{

        dispatch(checkingCredentials())

        const {ok, uid, photoURL} = await registerUserWithEmailPassword({email, password, displayName})

        if(!ok) return dispatch(logout({errorMessage}))

        dispatch(login(uid, displayName, email, photoURL ))
    }

}

export const startLoginWithEmailPassword = ({email, password}) =>{

    return async(dispatch) =>{
        dispatch(checkingCredentials())

        const result = await loginWithEmailPassword( {email, password})
        
        if(!result.ok) return dispatch(logout(result))

        dispatch(login(result))
    }
}

export const startLogout = () => {
    return async(dispatch) =>{
    
        await logoutFirebase()

        dispatch(logout({}))
    
    }
}
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204

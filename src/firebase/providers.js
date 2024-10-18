<<<<<<< HEAD
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {

    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;
        
        return {
            ok: true,
            // User info
            displayName, email, photoURL, uid
        }
        

    } catch (error) {
        
        const errorCode = error.code;
        const errorMessage = error.message;
    
        return {
            ok: false,
            errorMessage,
        }
    }

}


export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;

        await updateProfile( FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        console.log(error);
        return { ok: false, errorMessage: error.message }
    }

}


export const loginWithEmailPassword = async({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid, photoURL, displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}



=======

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    const {displayName, email, photoURL, uid} = result.user

    return {
        ok: true,
        uid,
        displayName,
        email,
        photoURL,
    }

  }
  catch (err) {
   const errorMessage = err.message

    return {
        ok: false,
        errorMessage,
    }
  }

};


export const registerUserWithEmailPassword = async ({email, password, displayName}) =>{

  try {

    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    const  {uid, photoURL} = resp.user
    await updateProfile(FirebaseAuth.currentUser, { displayName })

    return {
      ok: true,
      uid, photoURL, email, displayName,
    }

  }catch(err){

    return {
      ok: false,
      errorMessage: err.message,
    }

  }

}

export const loginWithEmailPassword = async({email, password}) =>{

  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)

    const { uid, photoURL, displayName} = resp.user

    return {
      ok: true,
      uid, photoURL, displayName,
    }

  } catch (error) {
    return {
      ok: false,
      errorMessage: err.message,
    }
  }
    
}

export const logoutFirebase = async () =>{
    return await FirebaseAuth.signOut()
}
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204

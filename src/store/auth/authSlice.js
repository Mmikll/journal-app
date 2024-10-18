import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
<<<<<<< HEAD
    initialState: {
        status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
=======

    initialState: { 
        status: 'checking', // '' 'not-authenticated' 'authenticated'
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
<<<<<<< HEAD
        errorMessage: null,
    },
    reducers: {
        login: ( state, { payload } ) => {
            state.status = 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: ( state, { payload } ) => {
            state.status = 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
=======
        errorMessage: null
    },

    reducers: { 
        login: (state, {payload}) =>{
            state.status = 'authenticated' 
            state.uid = payload.uid
            state.email = payload.email
            state.displayName= payload.displayName
            state.photoURL= payload.photoURL
            state.errorMessage= null
        },
        logout: (state, {payload}) =>{
            state.status = 'not-authenticated' 
            state.uid = null
            state.email = null
            state.displayName= null
            state.photoURL= null
            state.errorMessage= payload?.errorMessage
        },
        checkingCredentials: (state) =>{
            state.status = 'checking';
        }
    },
});

export const {login, logout, checkingCredentials } = authSlice.actions;
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204

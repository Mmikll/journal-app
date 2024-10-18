<<<<<<< HEAD
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid, 
  } = useForm( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword(formState) );
  }

  return (
    <AuthLayout title="Crear cuenta">

      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
=======
<<<<<<< HEAD
=======
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startRegister } from '../../store/auth';

>>>>>>> 2111d71 (authentication created)

export const RegisterPage = () => {
  
  const disaptch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState()
  const { status, errorMessage } = useSelector( state => state.auth)

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

  const formValidations = {
    email: [(value) => value.includes('@'), "emails should hava a @"],
    password: [(value) => value.length >=6 , "password should minimun be 6 digits" ],
    displayName: [(value) => value.length >= 1, "Name is Required" ]
  }

  const initialValues = {
    email: 'example@gmail.com',
    password: '123456',
    displayName: 'John Doe',
  }

  const {
    formState, displayName, email, password, onInputChange, isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(initialValues, formValidations)


  const onSubmit = (e) =>{
    e.preventDefault()
    
    setFormSubmitted(true)

    if(!isFormValid) return
  
    disaptch(startRegister(formState))
  }

  return (
<<<<<<< HEAD
    <div>
      Rigster page
    </div>
=======
    <AuthLayout title="Crear cuenta">

      <h1></h1>
      <form 
        onSubmit={onSubmit}
        className='animate__animated animate__fadeIn animate__faster'
      >
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
          <Grid container>
           
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
<<<<<<< HEAD
                label="Nombre completo" 
                type="text" 
                placeholder='Nombre completo' 
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmitted }
                helperText={ displayNameValid }
=======
                label="Full Name" 
                type="text" 
                placeholder='Full Name' 
                fullWidth
                name='displayName'
                value={displayName} 
                onChange={onInputChange}
                error={!!displayNameValid && formSubmitted}
                helperText='Name is required'
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
<<<<<<< HEAD
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
                error={ !!emailValid && formSubmitted }
                helperText={ emailValid }
=======
                label="Email" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name='email'
                value={email} 
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText='Email No Valid'
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
<<<<<<< HEAD
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
                error={ !!passwordValid && formSubmitted  }
                helperText={ passwordValid }
=======
                label="Password" 
                type="password" 
                placeholder='your password' 
                fullWidth
                name='password'
                error={!!passwordValid && formSubmitted}
                helperText='Password No Valid'
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
<<<<<<< HEAD
              
              <Grid 
                item 
                xs={ 12 }
                display={ !!errorMessage ? '': 'none' }
              >
                <Alert severity='error'>{ errorMessage }</Alert>
=======

              <Grid 
                item xs={ 12 }
                display={!!errorMessage ? '' : 'none'}
              >
                <Alert severity='error'>
                  {errorMessage}
                </Alert>
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
              </Grid>

              <Grid item xs={ 12 }>
                <Button 
<<<<<<< HEAD
                  disabled={ isCheckingAuthentication }
                  type="submit"
                  variant='contained' 
                  fullWidth>
                  Crear cuenta
=======
                  disabled={isCheckingAuthentication}
                  variant='contained' 
                  fullWidth
                  type='submit'
                >
                  Create Account
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
                </Button>
              </Grid>
            </Grid>

<<<<<<< HEAD

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                ingresar
=======
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>Do you have an account?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                Login
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
<<<<<<< HEAD
  )
}
=======
>>>>>>> 2111d71 (authentication created)
  )
}


>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204

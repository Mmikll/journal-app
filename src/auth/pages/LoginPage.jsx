<<<<<<< HEAD
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: ''
}
//formData is implement because when email and password is declared in the params, the useEffect rerender the state therefore it declared again and agin the params, and in each declare it is in a different memo space, so we fix this by passing just one reference.
export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();

    // console.log({ email, password })
    dispatch( startLoginWithEmailPassword({ email, password }) );
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch( startGoogleSignIn() );
  }


  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
              />
            </Grid>


            <Grid 
              container
              display={ !!errorMessage ? '': 'none' }
              sx={{ mt: 1 }}>
=======
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleSingIn, startLoginWithEmailPassword  } from '../../store/auth';
import { useMemo } from 'react';


export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth)

  const disaptch = useDispatch()

  const {email, password, onInputChange} = useForm({
    email: 'example@gmail.com',
    password: '123456'
  })

  const isAutenthicating = useMemo(() => status === 'checking', [status])

  const onSubmit = (e) => {
    e.preventDefault()

    //console.log(email, password)
    disaptch(startLoginWithEmailPassword({email, password}))
    
  }

  const onGoogleSingIn = () => {
    console.log("onGoogleSingIn")
    disaptch(startGoogleSingIn())
  }

  return (
    <AuthLayout title="Login">
      <form 
        onSubmit={onSubmit} 
        className='animate__animated animate__fadeIn animate__faster'
      >
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="email" 
                type="email" 
                placeholder='exmaple@gmail.com' 
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
              />
            </Grid>

            <Grid 
              container
              display={!!errorMessage ? '' : 'none'}
              sx={{mt : 1}}
            >
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
              <Grid 
                  item 
                  xs={ 12 }
                >
<<<<<<< HEAD
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>
=======
                  <Alert severity='error'>
                    {errorMessage}
                  </Alert>
                </Grid>
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="pasword" 
                type="password" 
                placeholder='your password'  
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
              />
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 }>
<<<<<<< HEAD
                <Button
                  disabled={ isAuthenticating }
                  type="submit" 
=======
                <Button 
                  disabled = {isAutenthicating}
                  type='submit' 
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
                  variant='contained' 
                  fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
<<<<<<< HEAD
                <Button
                   disabled={ isAuthenticating }
                   variant='contained' 
                   fullWidth
                   onClick={ onGoogleSignIn }>
=======
                <Button 
                  disabled = {isAutenthicating}
                  variant='contained' 
                  fullWidth
                  onClick={onGoogleSingIn}
                >
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

<<<<<<< HEAD

            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                Crear una cuenta
=======
            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                Create an Account
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}

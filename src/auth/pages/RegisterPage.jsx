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
          <Grid container>
           
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Full Name" 
                type="text" 
                placeholder='Full Name' 
                fullWidth
                name='displayName'
                value={displayName} 
                onChange={onInputChange}
                error={!!displayNameValid && formSubmitted}
                helperText='Name is required'
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Email" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name='email'
                value={email} 
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText='Email No Valid'
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Password" 
                type="password" 
                placeholder='your password' 
                fullWidth
                name='password'
                error={!!passwordValid && formSubmitted}
                helperText='Password No Valid'
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

              <Grid 
                item xs={ 12 }
                display={!!errorMessage ? '' : 'none'}
              >
                <Alert severity='error'>
                  {errorMessage}
                </Alert>
              </Grid>

              <Grid item xs={ 12 }>
                <Button 
                  disabled={isCheckingAuthentication}
                  variant='contained' 
                  fullWidth
                  type='submit'
                >
                  Create Account
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>Do you have an account?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                Login
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
>>>>>>> 2111d71 (authentication created)
  )
}



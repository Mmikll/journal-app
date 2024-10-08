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
              <Grid 
                  item 
                  xs={ 12 }
                >
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
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button 
                  disabled = {isAutenthicating}
                  type='submit' 
                  variant='contained' 
                  fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button 
                  disabled = {isAutenthicating}
                  variant='contained' 
                  fullWidth
                  onClick={onGoogleSingIn}
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                Create an Account
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}

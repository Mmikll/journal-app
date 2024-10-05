
import {Typography, TextField} from '@mui/material'
import Grid from '@mui/material/Grid2'

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignContent='center'
      justifyContent='center'
      sx={{minHeight: '100dvh', backgroundColor: 'primary.main', padding: 4 }}>
      
        <Grid item 
        className='box-shadow'
        xs = {3}
        sx={{backgroundColor: 'white', padding: 3, borderRadius: 2}}>

            <Typography varaint='h5' sx={{mb:1}}>Login</Typography>

            <form>

              <Grid container>

                <Grid item>
                  <TextField 
                    type='email' 
                    label='email' 
                    placeholder='example@example.com'
                    fullWidth/>
                </Grid>

                <Grid item>
                  <TextField 
                    type='password' 
                    label='password' 
                    placeholder='your password'
                    fullWidth/>
                </Grid>

              </Grid>

            </form>

        </Grid>

    </Grid>
  )
}

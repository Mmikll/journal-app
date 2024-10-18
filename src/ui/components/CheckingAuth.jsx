<<<<<<< HEAD
import { CircularProgress, Grid } from '@mui/material';

=======
import { CircularProgress, Grid } from "@mui/material"
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204

export const CheckingAuth = () => {
  return (
    <Grid
<<<<<<< HEAD
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >

        <Grid container
            direction='row'
            justifyContent='center'
            >
            <CircularProgress color='warning' />
        </Grid>
    </Grid>
  )
}
=======
        container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >

        <Grid 
            container
            direction='row'
            justifyContent='center'
        >
            <CircularProgress color="warning"/>
        </Grid>

    </Grid>
  )
}


>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204

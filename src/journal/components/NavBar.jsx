<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { startLogout } from '../../store/auth';


=======
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth';

>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
export const NavBar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch();

<<<<<<< HEAD
    const onLogout = () => {
        dispatch( startLogout() );
    }

return (
=======
    const onLogout = () =>{
        dispatch(startLogout())
    }

  return (
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
    <AppBar 
        position='fixed'
        sx={{ 
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }px` }
<<<<<<< HEAD
        }}
=======
         }}
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuOutlined />
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'> JournalApp </Typography>

                <IconButton 
                    color='error'
<<<<<<< HEAD
                    onClick={ onLogout }
=======
                    onClick={onLogout}
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204
                >
                    <LogoutOutlined />
                </IconButton>
            </Grid>

        </Toolbar>
    </AppBar>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204

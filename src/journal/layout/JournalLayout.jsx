<<<<<<< HEAD

import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import {NavBar, SideBar} from '../components'
=======
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import { NavBar, SideBar } from '../components';
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204


const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
<<<<<<< HEAD
    <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>
=======
    <Box 
      sx={{ display: 'flex' }}
      className='animate__animated animate__fadeIn animate__faster'
    >
>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204

        <NavBar drawerWidth={ drawerWidth } />

        <SideBar drawerWidth={ drawerWidth } />

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar />

            { children }
            
        </Box>
    </Box>
  )
}

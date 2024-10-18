<<<<<<< HEAD
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { purpleTheme } from './';


export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      
      { children }
    </ThemeProvider>
  )
}
=======
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { PurpleTheme } from "./"

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={PurpleTheme}>
        <CssBaseline/>

        {children}
    </ThemeProvider>
  )
}


>>>>>>> f3d70fe6aee5f01b4b55c56dd95c4dda7ee5f204

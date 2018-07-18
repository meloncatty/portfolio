import React from 'react'
import { createMuiTheme, withTheme, MuiThemeProvider } from '@material-ui/core'
import { SplashPage, Intro } from '../components'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6A2F5D'
    },
    secondary: {
      main: '#9E6083'
    }
  }
})

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <SplashPage />
      <Intro />
    </MuiThemeProvider>
  )
}

export default withTheme(theme)(App)

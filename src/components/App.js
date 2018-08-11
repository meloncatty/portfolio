import React from 'react'
import { createMuiTheme, withTheme, MuiThemeProvider } from '@material-ui/core'
import { SplashPage, Intro, Projects, Skills, Contact } from '../components'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D3AB9E'
    },
    secondary: {
      main: '#e6dcdc'
    }
  }
})

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <SplashPage />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
    </MuiThemeProvider>
  )
}

export default withTheme(theme)(App)

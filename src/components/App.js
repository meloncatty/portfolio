import React from 'react'
import { createMuiTheme, withTheme, MuiThemeProvider } from '@material-ui/core'
import { SplashPage, Intro, Projects, Skills, OpenSource } from '../components'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D3AB9E'
    },
    secondary: {
      main: '#e6dcdc'
    }
  },
  typography: {
    fontFamily: '"Roboto Mono", "IBM Plex Mono", monospace'
  }
})

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <SplashPage />
      <Intro />
      <Skills />
      <Projects />
      <OpenSource />
    </MuiThemeProvider>
  )
}

export default withTheme(theme)(App)

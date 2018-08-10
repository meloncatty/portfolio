import React from 'react'
import { Grid, Typography, withStyles, withTheme, MuiThemeProvider } from '@material-ui/core'

const Contact = (props) => {
  return (
    <MuiThemeProvider theme={props.theme}>
      <div></div>
    </MuiThemeProvider>
  )
}

export default withTheme()(Intro)

import React, { Fragment } from 'react'
import { Typography, MuiThemeProvider, withStyles, Grid, withTheme } from '@material-ui/core'

const SplashPage = (props) => {
  const { classes } = props
  console.log(props.theme)
  return (
    <MuiThemeProvider theme={props.theme}>
      <Fragment>
        <Grid
          container
          alignItems='center'
          className={classes.grid}>
          <Grid item>
            <Typography variant='subheading' style={{ color: '#000', fontSize: '1.5em', marginLeft: 200 }}>
            Greetings!
            </Typography>
            <Typography variant='display1' style={{ color: '#000', fontSize: '4em', marginLeft: 200 }}>
            I'm Krista Handel
            </Typography>
            <Typography variant='subheading' style={{ color: '#000', fontSize: '1.5em', marginLeft: 200 }}>
            Front-end Developer ~ Aspiring Technical Writer
            </Typography>
          </Grid>
        </Grid>
      </Fragment>
    </MuiThemeProvider>
  )
}

const styles = theme => ({
  grid: {
    height: '100vh',
    background: theme.palette.primary.main
  }
})

export default withTheme()(withStyles(styles)(SplashPage))

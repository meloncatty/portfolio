import React from 'react'
import { Typography, MuiThemeProvider, withStyles, Grid, withTheme } from '@material-ui/core'

const styles = {
  grid: {
    height: '100vh'
  }
}

const SplashPage = (props) => {
  const { classes } = props
  return (
    <MuiThemeProvider>
      <Grid
        container
        style={{ background: props.theme.palette.primary.main }}
        alignItems='center'
        align='center'
        justify='center'
        className={classes.grid}>
        <Grid item>
          <Typography variant='subheading' style={{ color: props.theme.palette.text.secondary }}>
            Greetings!
          </Typography>
          <Typography variant='display1' style ={{ color: props.theme.palette.text.primary}}>
            I'm Krista Handel
          </Typography>
          <Typography variant='subheading' style={{ color: props.theme.palette.text.secondary }}>
            Front-end Developer ~ Aspiring Technical Writer
          </Typography>
        </Grid>  
      </Grid>
    </MuiThemeProvider>
  )
}

export default withTheme()(withStyles(styles)(SplashPage))
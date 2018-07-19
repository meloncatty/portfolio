import React from 'react'
import { Grid, Avatar, Typography, withStyles, withTheme, MuiThemeProvider } from '@material-ui/core'
import avatar from '../assets/avatar.jpg'

const styles = {
  avatar: {
    width: 150,
    height: 150,
    margin: 20
  },
  paper: {
    width: 350,
    height: 250,
    padding: 10
  },
  grid: {
    height: '50vh',
  }
}

const Intro = (props) => {
  const { classes } = props

  return (
    <MuiThemeProvider theme={props.theme}>
      <Grid
        container
        className={classes.grid}
        alignItems='center'
        align='center'
        justify='center'
        style={{ background: props.theme.palette.secondary.main }}>
        <Grid 
          item
          align='center'>
            <Avatar 
              className={classes.avatar}
              src={avatar}
              alt='Profile image'/>
            <Typography>
              I am a Turing School of Software and Design graduate of the front-end program.
            </Typography>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}

export default withTheme()(withStyles(styles)(Intro))
import React from 'react'
import { Paper, Grid, Avatar, Typography, withStyles, withTheme, MuiThemeProvider } from '@material-ui/core'
import avatar from '../assets/avatar.jpg'

const styles = {
  avatar: {
    width: 150,
    height: 150,
    marginBottom: 10
  },
  paper: {
    width: 350,
    height: 250,
    padding: 10
  },
  grid: {
    height: '100vh',
    width: '100vw'
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
        justify='center'>
        <Grid item>
          <Paper 
            className={classes.grid}
            style={{ background: props.theme.palette.secondary.main }}>
            <Avatar 
              className={classes.avatar}
              src={avatar}
              alt='Profile image'/>
            <Typography>
              I am a Turing School of Software and Design graduate of the front-end program.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}

export default withTheme()(withStyles(styles)(Intro))
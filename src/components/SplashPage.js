import React, { Fragment } from 'react'
import { Typography, MuiThemeProvider, withStyles, Grid, withTheme } from '@material-ui/core'

const SplashPage = (props) => {
  const { classes } = props

  return (
    <MuiThemeProvider theme={props.theme}>
      <Fragment>
        <Grid
          container
          alignItems='center'
          className={classes.grid}>
          <Grid item className={classes.gridItem}>
            <Typography variant='subheading' className={classes.greeting}>
            Greetings!
            </Typography>
            <Typography variant='display1' className={classes.intro}>
            I'm <span style={{ color: '#D64550' }}>Krista Handel</span>,<br />a community-minded front-end software engineer.
            </Typography>
            <Typography variant='subheading' className={classes.subheading}>
            Sci-Fi Fanatic ~ House Music Enthusiast
            </Typography>
            <Typography variant='subheading' className={classes.iconLinks}>
              <a className={classes.icon} href='mailto:k.handel66@gmail.com'><i class="fas fa-envelope"></i></a>
              <a className={classes.icon} href='https://github.com/meloncatty' rel='noopener noreferrer' target='_blank'><i class="fab fa-github"></i></a>
              <a className={classes.icon} href='https://www.linkedin.com/in/krista-handel/' rel='noopener noreferrer' target='_blank'><i class="fab fa-linkedin"></i></a>
              <a className={classes.icon} href='https://open.spotify.com/user/_spooky_mulder' rel='noopener noreferrer' target='blank'><i class="fab fa-spotify"></i></a>
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
  },
  gridItem: {
    width: '65%'
  },
  greeting: {
    color: '#000',
    fontSize: 'calc(15px + (50 - 25) * ((100vw - 300px) / (2560 - 300)))',
    marginLeft: 200,
    marginBottom: 50
  },
  intro: {
    color: '#000',
    fontSize: 'calc(25px + (50 - 25) * ((100vw - 300px) / (2560 - 300)))',
    marginLeft: 200
  },
  subheading: {
    color: '#000',
    fontSize: 'calc(10px + (50 - 25) * ((100vw - 300px) / (2560 - 300)))',
    marginLeft: 200,
    marginTop: 30
  },
  iconLinks: {
    fontSize: 'calc(22px + (50 - 25) * ((100vw - 300px) / (2560 - 300)))',
    marginLeft: 183,
    marginTop: 50
  },
  icon: {
    color: '#000',
    marginLeft: 20
  }
})

export default withTheme()(withStyles(styles)(SplashPage))

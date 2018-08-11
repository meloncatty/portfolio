import React, { Fragment }from 'react'
import { Grid, Avatar, Paper, Typography, withStyles, withTheme, MuiThemeProvider } from '@material-ui/core'
import avatar from '../assets/avatar.jpg'

const Intro = props => {
  const { classes } = props

  return (
    <MuiThemeProvider theme={props.theme}>
      <Grid
        container
        className={classes.grid}
        alignItems='center'
        align='center'
        justify='center'
      >
        <Grid item>
          <section className={classes.paper}>
            <Avatar
              className={classes.avatar}
              src={avatar}
              alt='Profile image' />
            <Typography paragraph>
              I am a Turing School of Software and Design graduate. I enjoy working
              on new projects and learning everything I can in the process. While
              completing my front-end certification I was exposed to backend technologies,
              and am interested in a full-stack engagement.
            </Typography>
            <Typography paragraph>
              When I am not working on projects, you can find me <a className={classes.href} href='https://en.wikipedia.org/wiki/The_Culture_(series)' target='_blank' rel="noopener noreferrer">reading</a>, playing
              video games, going for a stroll or enjoying a craft IPA at one of the many local breweries
              in my neighborhood.
            </Typography>
          </section>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}

const styles = theme => ({
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
    padding: 10,
    background: theme.palette.secondary.main
  },
  paper: {
    width: '40vw',
    padding: 10
  },
  href: {
    color: theme.palette.primary.dark
  }
})

export default withTheme()(withStyles(styles)(Intro))

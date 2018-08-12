import React, { Fragment } from 'react'
import { Grid, Card, Typography, CardActions, CardContent, CardMedia, Button, withStyles } from '@material-ui/core'
import swapiBox from '../assets/swapiBox.png'
import monikers from '../assets/monikersSmall00.png'
import searchOpenSource from '../assets/searchOpenSource.png'

const Projects = props => {
  const { classes } = props

  return (
    <Fragment>
      <Typography
        className={classes.heading}
        align='center'
        variant='display1'>
        Top Projects
      </Typography>
      <Grid
        container
        className={classes.root}
        justify='space-around'
        alignItems='center'>
        <Grid item>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={swapiBox}
              title='SWAPI-Box'
            />
            <CardContent>
              <Typography variant='headline' component='h2'>
                SWAPI-Box
              </Typography>
              <Typography paragraph>
                A personal project which was focused on asynchronous Javascript, gaining
                some muscle memory with building out React components,
                using a modular file structure and proptype validation. Plus, we got to
                use a super cool Star Wars API!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' href='https://github.com/meloncatty/swapi-box' variant='raised' color='primary'>
                Github
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={searchOpenSource}
              title='Share Open Source'
            />
            <CardContent>
              <Typography variant='headline' component='h2'>
                Share Open Source
              </Typography>
              <Typography paragraph>
                This personal project offered many new challenges (and many new things to learn)!
                With this project I learned how to use redux thunks and fully test them.
                I also taught myself how to use Firebase for the backend. I would like to return
                to this project to fix up the styles and add a more secure login.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href='https://github.com/meloncatty/personal-project' size='small' variant='raised' color='primary'>
                Github
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={monikers}
              title='Monikers'
            />
            <CardContent>
              <Typography variant='headline' component='h2'>
                Monikers
              </Typography>
              <Typography paragraph>
                A group capstone project. My teammates and I built a mobile version
                of the card game Monikers. We decided to make this a progressive
                web application, learning all about service workers for usability
                while offline and IndexedDB, an API that makes storing data locally
                much easier than, say, localStorage.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href='https://github.com/meloncatty/monikers' size='small' variant='raised' color='primary'>
                Github
              </Button>
              <Button href='http://monikers.herokuapp.com/' size='small' variant='raised' color='primary'>
                Heroku
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  )
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: 30,
    background: theme.palette.secondary.main
  },
  card: {
    width: 345,
    marginTop: 20
  },
  media: {
    height: 0,
    paddingTop: '57.25%'
  },
  heading: {
    padding: 30,
    background: theme.palette.secondary.main
  }
})

export default withStyles(styles)(Projects)

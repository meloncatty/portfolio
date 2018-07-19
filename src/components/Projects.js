import React from 'react'
import { Grid, Card, Typography, CardActions, CardContent, CardMedia, Button, withStyles } from '@material-ui/core'
import movieTracker from '../assets/movieTracker.jpg'
import swapiBox from '../assets/swapiBox.png'
import searchOpenSource from '../assets/searchOpenSource.png'

const styles = {
  root: {
    flexGrow: 1,
    height: 800
  },
  card: {
    maxWidth: 345,
    marginTop: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
}

const Projects = (props) => {
  const { classes } = props
  return (
    <Grid 
      container
      className={classes.root}
      justify='space-around'
      alignItems='center'>
      <Grid item>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={movieTracker}
            title='Movie Tracker'
          />
          <CardContent>
            <Typography variant='headline' component='h2'>
              Movie Tracker
          </Typography>
            <Typography component='p'>
              This project presented a host of new challenges, from working with a backend through PostgreSQL to managing a Redux store. These challenges proved to be a great learning experience as we began to see the benefit of using the store to manage our users and to persist data without making constant API requests.
          </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary'>
              Github
          </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={swapiBox}
            title='SWAPI-Box'
          />
          <CardContent>
            <Typography gutterBottom variant='headline' component='h2'>
              SWAPI-Box
            </Typography>
            <Typography component='p'>
              This was a fun introduction to getting comfortable with using Redux's store and creating user functionality. This project made me realize where my skills were lacking with testing, and I based future project tests off of this knowledge.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary'>
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
            <Typography gutterBottom variant='headline' component='h2'>
              Share Open Source
          </Typography>
            <Typography component='p'>
              My plans for this application were simple, but the more the application grew the more difficult things became. Implementing Firebase proved to be a challenge. But at the end of it all I was happy with my MVP and my learning outcomes: setting up and using Firebase as well as finding an interest in integration testing versus unit testing.
          </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary'>
              Github
          </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Projects)
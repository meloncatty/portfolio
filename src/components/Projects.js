import React, { Fragment } from 'react'
import { Grid, Card, Typography, CardActions, CardContent, CardMedia, Button, withStyles } from '@material-ui/core'
import movieTracker from '../assets/movieTracker.jpg'
import swapiBox from '../assets/swapiBox.png'
import searchOpenSource from '../assets/searchOpenSource.png'

const styles = {
  root: {
    flexGrow: 1,
    paddingBottom: 40,
    height: 500
  },
  card: {
    width: 345,
    marginTop: 20,
    height: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  heading: {
    padding: 30,
    color: '#000000'
  }
}

const Projects = (props) => {
  const { classes } = props
  return (
    <Fragment>
      <Typography 
        className={classes.heading}
        align='center'
        variant='display1'>
        Projects
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
              image={movieTracker}
              title='Movie Tracker'
            />
            <CardContent>
              <Typography variant='headline' component='h2'>
                Movie Tracker
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
            </CardContent>
            <CardActions>
              <Button size='small' color='primary'>
                Github
            </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default withStyles(styles)(Projects)
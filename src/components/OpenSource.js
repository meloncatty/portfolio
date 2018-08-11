import React, { Component, Fragment } from 'react'
import { Avatar, Grid, Typography, Card, CardHeader, CardMedia, CardActions, Collapse, IconButton, CardContent, withStyles, withTheme, MuiThemeProvider } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import refinedGitHub from '../assets/refinedGithub.png'
import classnames from 'classnames';

class OpenSource extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false
    }
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }

  render () {
    const { classes, theme } = this.props
    return (
      <MuiThemeProvider theme={theme}>
        <Typography
        align='center'
        variant='display1'
        className={classes.heading}
        >
          Open Source
        </Typography>
        <Grid
          container
          className={classes.formContainer}
          justify='center'>
          <Grid item>
            <Card className={classes.card}>
              <CardHeader
                title="Refined GitHub"
                subheader="Simplifies GitHub interface/adds useful features"
                avatar={
                <Avatar aria-label="Squid Cat" src={refinedGitHub} className={classes.squidCat}/>
                }
                action={
                  <Fragment>
                  <CardActions className={classes.actions} disableActionSpring>
                    <IconButton
                      className={classnames(classes.expand, {
                        [classes.expandOpen]: this.state.expanded,
                      })}

                      onClick={this.handleExpandClick}
                      aria-expanded={this.state.expanded}
                      aria-label="Show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  </Fragment>
                }
              />
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    My very first OS contribution! My team and I worked on implementing
                    a feature that would allow the owner of a repository to delete certain
                    files from a pull request.
                  </Typography>
                  <Typography paragraph>
                    You can read more about my first experience with contributing to open
                    source <a href="https://medium.com/@petalhead/my-first-open-source-contribution-a9865801a3ca" target="_blank" rel="noopener noreferrer">
                    here</a>
                  </Typography>
                  <Typography>
                    Althought this feature was approved and merged into the master branch,
                    it has since been removed <span className={classes.emoji}>😭</span> but not without good reason! GitHub has since then
                    implemented the feature into their product. GitHub has also reached
                    out to this community and has offered to work with them in implementing
                    some of Refined GitHub's features into GitHub as a whole <span className={classes.emoji}>🎉</span> More info <a href="https://github.com/sindresorhus/refined-github/issues/1469" target="_blank" rel="noopener noreferrer">
                    here</a>
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    )
  }
}

const styles = theme => ({
  heading: {
    background: theme.palette.secondary.main,
    padding: 20
  },
  emoji: {
    fontSize: '1.5em'
  },
  formContainer: {
    height: 'auto',
    background: theme.palette.secondary.main,
    padding: 50
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light
    },
    marginBottom: 10
  },
  card: {
    width: 590,
    // marginTop: 20,
  },
  squidCat: {
    width: 50,
    height: 50,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  actions: {
    display: 'flex'
  }
})

export default withTheme()(withStyles(styles)(OpenSource))

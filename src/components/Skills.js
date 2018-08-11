import React from 'react'
import { Grid, withStyles, MuiThemeProvider, withTheme, Typography } from '@material-ui/core'
import '../styles/skillsAnimation.css'

const styles = {
  grid: {
    height: 500
  },
  heading: {
    color: '#000000',
    paddingTop: 40
  },
  green: {
    color: '#43a047'
  },
  closeButton: {
    height: '10px',
    width: '10px',
    borderRadius: '50%',
    border: '1px solid #000',
    position: 'relative',
    top: '6px',
    left: '6px',
    backgroundColor: '#ff3b47',
    borderColor: '#9d252b',
    display: 'inline-block'
  },
  minimizeButton: {
    height: '10px',
    width: '10px',
    borderRadius: '50%',
    border: '1px solid #000',
    position: 'relative',
    top: '6px',
    left: '11px',
    backgroundColor: '#ffc100',
    borderColor: '#9d802c',
    display: 'inline-block'
  },
  zoomButton: {
    height: '10px',
    width: '10px',
    borderRadius: '50%',
    border: '1px solid #000',
    position: 'relative',
    top: '6px',
    left: '16px',
    backgroundColor: '#00d742',
    borderColor: '#049931',
    display: 'inline-block'
  },
  menuBar: {
    width: '550px',
    boxSizing: 'border-box',
    height: '25px',
    backgroundColor: '#bbb',
    margin: '0 auto',
    borderTopRightRadius: '5px',
    borderTopLeftRadius: '5px'
  },
  terminalScreen: {
    backgroundColor: '#151515',
    boxSizing: 'border-box',
    width: '550px',
    margin: '0 auto',
    padding: '20px',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px'
  },
  p: {
    position: 'relative',
    left: '50%',
    marginLeft: '-8.5em',
    textAlign: 'left',
    fontSize: '1.25em',
    fontFamily: 'monospace',
    whiteSpace: 'normal',
    overflow: 'hidden'
  },
  span: {
    color: '#fff',
    fontWeight: 'bold'
  },
  text: {
    color: '#cdee69'
  },
  skills: {
    color: '#e09690',
    overflow: 'auto',
    letterSpacing: '1px',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    marginRight: 20
  },
  cursor: {
    color: '#fff'
  }
}

const Skills = (props) => {
  const { classes } = props
  return (
    <MuiThemeProvider theme={props.theme}>
      <Typography
        className={classes.heading}
        variant='display1'
        align='center'
        style={{ background: props.theme.palette.primary.main }}>
        Skills
      </Typography>
      <Grid
        className={classes.grid}
        container justify='center'
        direction='column'
        alignItems='center'
        style={{ background: props.theme.palette.primary.main }}>
        <Grid item>
          <div className={classes.menuBar}>
            <div className={classes.closeButton} />
            <div className={classes.minimizeButton} />
            <div className={classes.zoomButton} />
          </div>
          <div className={classes.terminalScreen}>
            <p><span className={classes.green}>(^‿^)b</span><span className={classes.span}> ~ always be coding</span> </p>
            <p className={classes.text}>desktop$ cd skills</p>
            <p className={classes.text}>skills$ ls</p>
            <Grid container>
              <Grid item>
                <ul className={classes.skills}>
                  <li>javascript</li>
                  <li>html5</li>
                  <li>css3</li>
                  <li>sass</li>
                  <li>git</li>
                </ul>
              </Grid>
              <Grid item>
                <ul className={classes.skills}>
                  <li>react</li>
                  <li>redux</li>
                  <li>node</li>
                  <li>express</li>
                  <li>knex</li>
                </ul>
              </Grid>
              <Grid item>
                <ul className={classes.skills}>
                  <li>postgresql</li>
                  <li>jest</li>
                  <li>enzyme</li>
                  <li>mocha</li>
                  <li>chai</li>
                </ul>
              </Grid>
            </Grid>
            <p className={classes.cursor}>><span className='cursorBlink'>_</span></p>
          </div>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}

export default withTheme()(withStyles(styles)(Skills))

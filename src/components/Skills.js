import React from 'react'
import { Grid, withStyles, MuiThemeProvider, withTheme, Typography } from '@material-ui/core'

const styles = {
  lineNumber: {
    counterIncrement: 'linecounter',
    width: '1.2em',
    display: 'inline-block',
    borderRight: '1px solid #444',
    textAlign: 'center',
    color: '#444'
  },
  pre: {
    border: '1px solid #444',
    width: 400,
    background: '#222',
    padding: 10,
    fontSize: '1.2em',
    color: '#dcdcdc',
    height: 335
  },
  code: {
    color: '#0072be',
  },
  forward: {
    color: '#676769',
  },
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  grid: {
    height: 600
  },
  heading: {
    color: '#000000',
    paddingTop: 40,
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
        style={{ background: props.theme.palette.primary.main}}>
        Skills
      </Typography>
      <Grid
      className={classes.grid}
      container justify='center'
      direction='column'
      alignItems='center'
      style={{ background: props.theme.palette.primary.main }}>
      <Grid item>
        <pre className={classes.pre}>
          <ul className={classes.ul}>
            <li><span className={classes.lineNumber}>1</span> <span className={classes.forward}><span className={classes.forward}>&lt;</span></span><span className={classes.code}>html</span><span className={classes.forward}>&gt;</span></li>
            <li><span className={classes.lineNumber}>2</span>  <span className={classes.forward}>&lt;</span><span className={classes.code}>head</span><span className={classes.forward}>&gt;</span><span className={classes.forward}>&lt;</span><span className={classes.code}><span className={classes.forward}>/</span>head</span><span className={classes.forward}><span className={classes.forward}>&gt;</span></span></li>
            <li><span className={classes.lineNumber}>3</span> <span className={classes.forward}>  &lt;</span><span className={classes.code}>body</span><span className={classes.forward}>&gt;</span></li>
            <li><span className={classes.lineNumber}>4</span>  <span className={classes.forward}> &lt;</span><span className={classes.code}>ul</span><span className={classes.forward}>&gt;</span></li>
            <li><span className={classes.lineNumber}>5</span>   <span className={classes.forward}> &lt;</span><span className={classes.code}>li</span><span className={classes.forward}>&gt;</span>Javascript<span className={classes.forward}>&lt;</span><span className={classes.code}><span className={classes.forward}>/</span>li</span><span className={classes.forward}>&gt;</span></li>
            <li><span className={classes.lineNumber}>6</span>   <span className={classes.forward}> &lt;</span><span className={classes.code}>li</span><span className={classes.forward}>&gt;</span>React<span className={classes.forward}>&lt;</span><span className={classes.code}><span className={classes.forward}>/</span>li</span><span className={classes.forward}>&gt;</span></li>
            <li><span className={classes.lineNumber}>7</span>   <span className={classes.forward}> &lt;</span><span className={classes.code}>li</span><span className={classes.forward}>&gt;</span>Redux<span className={classes.forward}>&lt;</span><span className={classes.code}><span className={classes.forward}>/</span>li</span><span className={classes.forward}>&gt;</span></li>
            <li><span className={classes.lineNumber}>8</span>   <span className={classes.forward}> &lt;</span><span className={classes.code}>li</span><span className={classes.forward}>&gt;</span>Pair Programming<span className={classes.forward}>&lt;</span><span className={classes.code}><span className={classes.forward}>/</span>li</span><span className={classes.forward}>&gt;</span></li>
            <li><span className={classes.lineNumber}>9</span>   <span className={classes.forward}> &lt;</span><span className={classes.code}>li</span><span className={classes.forward}>&gt;</span>Git+GitHub<span className={classes.forward}>&lt;</span><span className={classes.code}><span className={classes.forward}>/</span>li</span><span className={classes.forward}>&gt;</span></li>
            <li><span className={classes.lineNumber}>10</span>   <span className={classes.forward}> &lt;</span><span className={classes.code}>li</span><span className={classes.forward}>&gt;</span>Webpack<span className={classes.forward}>&lt;</span><span className={classes.code}><span className={classes.forward}>/</span>li</span><span className={classes.forward}>&gt;</span></li>
            <li><span className={classes.lineNumber}>11</span>   <span className={classes.forward}> &lt;</span><span className={classes.code}>li</span><span className={classes.forward}>&gt;</span>Mocha + Chai<span className={classes.forward}>&lt;</span><span className={classes.code}><span className={classes.forward}>/</span>li</span><span className={classes.forward}>&gt;</span></li>
            <li><span className={classes.lineNumber}>12</span>   <span className={classes.forward}> &lt;</span><span className={classes.code}>li</span><span className={classes.forward}>&gt;</span>Jest/Enzyme<span className={classes.forward}>&lt;</span><span className={classes.code}><span className={classes.forward}>/</span>li</span><span className={classes.forward}>&gt;</span></li>
            <li><span className={classes.lineNumber}>13</span>   <span className={classes.forward}> &lt;</span><span className={classes.code}>li</span><span className={classes.forward}>&gt;</span>SASS<span className={classes.forward}>&lt;</span><span className={classes.code}><span className={classes.forward}>/</span>li</span><span className={classes.forward}>&gt;</span></li>
            <li><span className={classes.lineNumber}>14</span>   <span className={classes.forward}> &lt;</span><span className={classes.code}>li</span><span className={classes.forward}>&gt;</span>PostgreSQL<span className={classes.forward}>&lt;</span><span className={classes.code}><span className={classes.forward}>/</span>li</span><span className={classes.forward}>&gt;</span></li>
            <li><span className={classes.lineNumber}>15</span>   <span className={classes.forward}> &lt;</span><span className={classes.code}>li</span><span className={classes.forward}>&gt;</span>Express + knex<span className={classes.forward}>&lt;</span><span className={classes.code}><span className={classes.forward}>/</span>li</span><span className={classes.forward}>&gt;</span></li>
            <li><span className={classes.lineNumber}>16</span>  <span className={classes.forward}>&lt;</span><span className={classes.code}><span className={classes.forward}>/</span>ul</span><span className={classes.forward}>&gt;</span></li>
            <li><span className={classes.lineNumber}>17</span> <span className={classes.forward}>&lt;</span><span className={classes.code}><span className={classes.forward}>/</span>body</span><span className={classes.forward}>&gt;</span></li>
            <li><span className={classes.lineNumber}>18</span><span className={classes.forward}>&lt;</span><span className={classes.code}><span className={classes.forward}>/</span>html</span><span className={classes.forward}>&gt;</span></li>
          </ul>
        </pre>
      </Grid>
    </Grid>
    </MuiThemeProvider>
  )
}

export default withTheme()(withStyles(styles)(Skills))
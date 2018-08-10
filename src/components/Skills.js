import React from 'react'
import { Grid, withStyles, MuiThemeProvider, withTheme, Typography } from '@material-ui/core'

const styles = {
  grid: {
    height: 500
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
        
      </Grid>
    </Grid>
    </MuiThemeProvider>
  )
}

export default withTheme()(withStyles(styles)(Skills))
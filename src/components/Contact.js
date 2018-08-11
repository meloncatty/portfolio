import React, { Component } from 'react'
import { Grid, Typography, TextField, withStyles, withTheme, MuiThemeProvider } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      email: '',
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
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
          Contact Me
        </Typography>
        <Grid
          container
          className={classes.formContainer}
          alignItems='center'
          align='center'
          justify='center'>
            <Grid item>
              <form className={classes.form} onSubmit={this.handleSubmit}>
                <Grid container direction="column">
                  <Grid item className={classes.form}>
                    <TextField
                      name="firstName"
                      label="First Name"
                      required={true}
                      fullWidth
                      className={classes.textField}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item className={classes.form}>
                    <TextField
                      name="email"
                      label="Email"
                      margin="normal"
                      required={true}
                      fullWidth
                      className={classes.textField}
                      onChange={this.handleChange}
                    />
                  </Grid>
                  <Grid item className={classes.form}>
                  <TextField
                    label="Message"
                    multiline
                    rows="4"
                    margin="normal"
                    fullWidth
                    required={true}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className={classes.multiLine}
                  />
                  </Grid>
                  <Grid item>
                    <Button type="submit" variant="contained" className={classes.button}>
                      Send
                      <Icon className={classes.sendIcon}>send</Icon>
                    </Button>
                  </Grid>
                </Grid>
            </form>
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
  formContainer: {
    height: '70vh',
    background: theme.palette.secondary.main
  },
  form: {
    width: 300,
    padding: 10,
    background: theme.palette.secondary.light
  },
  sendIcon: {
    marginLeft: 10
  },
  multiLine: {
    marginTop: 20,
    marginBottom: 10,
    error: false
  },
  textField: {
    marginTop: 10,
    error: false
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light
    },
    marginBottom: 10
  }
})

export default withTheme()(withStyles(styles)(Contact))

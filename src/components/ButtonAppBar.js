import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#3baf28' },
    secondary: { main: '#ffffff' },
  },
});

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 30,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="secondary" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="secondary" className={classes.grow}>
            Deadstock
          </Typography>
          <Button color="secondary">Logout</Button>
        </Toolbar>
      </AppBar>
      </MuiThemeProvider>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

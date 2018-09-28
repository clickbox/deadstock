import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Shoe from './Shoe';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FormRow(props) {
  const { classes, row } = props;

  return (
    <React.Fragment>
      <Grid item xs={2}>
        <Paper className={classes.paper}>
          <Shoe row={row} column={0} />
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classes.paper}>
          <Shoe row={row} column={1} />
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classes.paper}>
          <Shoe row={row} column={2} />
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classes.paper}>
          <Shoe row={row} column={3} />
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classes.paper}>
          <Shoe row={row} column={4} />
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

FormRow.propTypes = {
  classes: PropTypes.object.isRequired,
  row: PropTypes.number.isRequired,
};

function NestedGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12} container spacing={24}>
          <FormRow row={0} classes={classes} />
        </Grid>
        <Grid item xs={12} container spacing={24}>
          <FormRow row={1} classes={classes} />
        </Grid>
        <Grid item xs={12} container spacing={24}>
          <FormRow row={2} classes={classes} />
        </Grid>
        <Grid item xs={12} container spacing={24}>
          <FormRow row={3} classes={classes} />
        </Grid>
        <Grid item xs={12} container spacing={24}>
          <FormRow row={4} classes={classes} />
        </Grid>
      </Grid>
    </div>
  );
}

NestedGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedGrid);

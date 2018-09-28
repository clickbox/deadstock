import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#3baf28' },
    secondary: { main: '#ff5a5f' },
  },
});

export class DialogForm extends React.Component {

  constructor(props) {
    super(props);

    const { style, brand, size, upc } = this.props;
    this.state = { style, brand, size, upc };
  }

  handleStyleUpdate = (event) => {
    this.setState({
      style: event.target.value
    });
  }

  handleBrandUpdate = (event) => {
    this.setState({
      brand: event.target.value
    });
  }

  handleSizeUpdate = (event) => {
    this.setState({
      size: event.target.value
    });
  }

  handleUpcUpdate = (event) => {
    this.setState({
      upc: event.target.value
    });
  }

  handleForm = () => {
    const { handleClose, handleSubmit } = this.props;
    const { style, brand, size, upc } = this.state;
    handleSubmit({ style, brand, size, upc });
    handleClose();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Shoe Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Style"
            fullWidth
            value={this.state.style}
            onChange={this.handleStyleUpdate}
          />
          <TextField
            margin="dense"
            label="Brand"
            fullWidth
            value={this.state.brand}
            onChange={this.handleBrandUpdate}
          />
          <TextField
            margin="dense"
            label="Size"
            fullWidth
            value={this.state.size}
            onChange={this.handleSizeUpdate}
          />
          <TextField
            margin="dense"
            label="UPC"
            fullWidth
            value={this.state.upc}
            onChange={this.handleUpcUpdate}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleForm} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      </MuiThemeProvider>
    );
  }
}

DialogForm.propTypes = {
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func,
  style: PropTypes.string,
  brand: PropTypes.string,
  size: PropTypes.string,
  upc: PropTypes.string,
}

export default DialogForm;

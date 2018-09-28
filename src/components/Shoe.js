import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import DialogForm from './DialogForm';
import { updateShoe } from '../reducers/actions';
import { getShoeById } from '../reducers/selectors';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#3baf28' },
    secondary: { main: '#ff5a5f' },
  },
});

const Style = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-align: left;
  margin-bottom: 10px;
`;
const Brand = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-align: left;
  margin-bottom: 10px;
`;
 const Size = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-align: left;
  margin-bottom: 10px;
`;
const Upc = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-align: left;
  margin-bottom: 10px;
`;
const Detail = styled.span`
  font-weight: 700;
  font-size: 15px;
  margin-left: 5px;
`;
 export class Shoe extends React.Component {
   constructor(props) {
    super(props);
    this.state = { open: false };
  }
   handleOpen = () => {
    this.setState({ open: true });
  };
   handleClose = () => {
    this.setState({ open: false });
  };
   handleSubmit = ({ style, brand, size, upc }) => {
    const { row, column, handleSubmit } = this.props;
    handleSubmit({ row, column, style, brand, size, upc })
  }
   render() {
    const { style, brand, size, upc } = this.props;
     return (
      <div>

        <Style>Style: <Detail>{style}</Detail></Style>
        <Brand>Brand: <Detail>{brand}</Detail></Brand>
        <Size>Size: <Detail>{size}</Detail></Size>
        <Upc>Upc: <Detail>{upc}</Detail></Upc>
        <MuiThemeProvider theme={theme}>
        <Button color="primary" onClick={this.handleOpen}>Edit</Button>
        </MuiThemeProvider>
        <DialogForm
          style={style}
          brand={brand}
          size={size}
          upc={upc}
          open={this.state.open}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          handleSubmit={(...args) => this.handleSubmit(...args)}
        />
      </div>
    );
  }
}
 Shoe.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  style: PropTypes.string,
  brand: PropTypes.string,
  size: PropTypes.string,
  upc: PropTypes.string,
  handleSubmit: PropTypes.func
};
 function mapStateToProps(state, { row, column }) {
  const { style, brand, size, upc } = getShoeById(state, { row, column })
  return { style, brand, size, upc };
}
 function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (data) => dispatch(updateShoe(data)),
  };
}
 export default connect(mapStateToProps, mapDispatchToProps)(Shoe);

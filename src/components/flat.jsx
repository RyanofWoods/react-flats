import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Flat extends Component {
  handleClick = () => {
    const { selectFunction, lat, lng } = this.props;
    if (selectFunction) {
      selectFunction(lat, lng);
    }
  };

  render() {
    const { name, imageUrl, price, priceCurrency } = this.props;
    const flatStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url("${imageUrl}")`
    };
    return (
      <div className="card" style={flatStyle} alt="" onClick={this.handleClick}>
        <div className="card-category">{`${price} ${priceCurrency}`}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
      </div>
    );
  }
}

Flat.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
  priceCurrency: PropTypes.string.isRequired,
  selectFunction: PropTypes.func,
  lat: PropTypes.number,
  lng: PropTypes.number
};

Flat.defaultProps = {
  imageUrl: ''
};

export default Flat;

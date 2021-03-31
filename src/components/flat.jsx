import React, { Component } from 'react';

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
      <div className="card card-flat" style={flatStyle} alt="" onClick={this.handleClick}>
        <div className="card-category">{`${price} ${priceCurrency}`}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a class="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;

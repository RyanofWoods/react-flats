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
      backgroundImage: `url("${imageUrl}")`
    };

    return (
      <div className="flat" style={flatStyle} alt="" onClick={this.handleClick}>
        <p className="flat-price">{`${price} ${priceCurrency}`}</p>
        <p className="flat-name">{name}</p>
      </div>
    );
  }
}

export default Flat;

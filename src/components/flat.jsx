/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { selectFunction } = this.props;
    if (selectFunction) {
      selectFunction();
    }
  };

  render() {
    const { imageUrl } = this.props;
    const flatStyle = {
      backgroundImage: `url("${imageUrl}")`
    };

    return (
      <div className="flat" style={flatStyle} alt="" onClick={this.handleClick} />
    );
  }
}

export default Flat;

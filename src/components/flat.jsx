/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const { imageUrl } = this.props;
    const flatStyle = {
      backgroundImage: `url("${imageUrl}")`
    };

    return (
      <div className="flat" style={flatStyle} alt="" />
    );
  }
}

export default Flat;

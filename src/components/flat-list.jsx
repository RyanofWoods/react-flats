/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="row">
        {
          this.props.flats.map((flat) => {
            const { imageUrl } = flat;
            return <div className="col-12 col-sm-6"><Flat key={imageUrl} imageUrl={imageUrl} selectFunction={this.props.selectFunction} /></div>;
          })
        }
      </div>
    );
  }
}

export default FlatList;

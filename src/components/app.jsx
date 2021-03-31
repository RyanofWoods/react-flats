import React, { Component } from 'react';
import FlatList from './flat-list';
import Map from './map';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: {},
      flatsData: flats
    };
  }

  selectFlat = (lat, lng) => {
    this.setState({ selectedFlat: { lat, lng } });
  };

  render () {
    const { flatsData, selectedFlat } = this.state;
    return (
      <div className="row">
        <div className="col-12 col-md-6 p-0 m-0">
          <FlatList flats={flatsData} selectFunction={this.selectFlat} />
        </div>
        <div className="col-12 col-md-6 p-0 m-0">
          <Map coords={selectedFlat} />
        </div>
      </div>
    );
  }
}

export default App;

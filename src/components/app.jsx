import React, { Component } from 'react';
import FlatList from './flat-list';
import Map from './map';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: '',
      flatsData: flats
    };
  }

  selectFlat = () => {
    this.setState({ selectedFlat: 'hi'});
  };

  render () {
    return (
      <div className="row">
        <div className="col-12 col-md-6 p-0 m-0">
          <FlatList flats={this.state.flatsData} selectFunction={this.selectFlat} />
        </div>
        <div className="col-12 col-md-6 p-0 m-0">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;

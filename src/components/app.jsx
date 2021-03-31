import React, { Component } from 'react';
import FlatList from './flat-list';
// import Map from './map';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: '',
      flatsData: flats
    };
  }

  render () {
    return (
      <div className="container d-flex">
        <FlatList flats={this.state.flatsData} />
        {/* <Map /> */}
      </div>
    );
  }
}

export default App;

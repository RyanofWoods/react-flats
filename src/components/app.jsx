import React, { Component } from 'react';
import FlatList from './flat-list';
// import Map from './map';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedFlat: '',
      flats: []
    };
  }

  render () {
    return (
      <div className="container d-flex">
        <FlatList />
        {/* <Map /> */}
      </div>
    );
  }
}

export default App;

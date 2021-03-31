import React, { Component } from 'react';
import mapboxgl from '!mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: '',
      currentMarker: ''
    };
  }

  componentDidMount() {
    this.initMapbox();
  }


  shouldComponentUpdate(nextProps) {
    this.updateMapMarker(nextProps.coords);
    return false; // we never want to re-render the map
  }

  initMapbox = () => {
    const mapElement = document.getElementById('map');

    if (mapElement) { // only build a map if there's a div#map to inject into
      mapboxgl.accessToken = 'pk.eyJ1Ijoicnlhbm9md29vZHMiLCJhIjoiY2trc2Y5MWIzMGNybzJ3cGxlNWF2ZHJkaSJ9.SdPJFs9PoXyG8TewSgyVvQ';

      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/ryanofwoods/cklkxz9fy0ww017rz39sc6zrp', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
      });
      this.setState({ map });
    }
  };

  updateMapMarker(coords) {
    if (coords !== {} && this.state.map !== '') {
      const { lng, lat } = coords;
      new mapboxgl.Marker({ color: "#00755E" })
        .setLngLat([lng, lat])
        .addTo(this.state.map);

      // once all markers are added, fit all markers within map viewport
      const bounds = new mapboxgl.LngLatBounds();
      bounds.extend([lng, lat]);
      this.state.map.fitBounds(bounds, { padding: 70, maxZoom: 13, duration: 0 });
    }
  }

  render() {
    return (
      <div id="map" />
    );
  }
}

export default Map;

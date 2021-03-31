import React, { Component } from 'react';
import mapboxgl from '!mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    this.initMapbox();
  }

  initMapbox = () => {
    const mapElement = document.getElementById('map');

    // const fitMapToMarker = (map, marker) => {
    //   const bounds = new mapboxgl.LngLatBounds();
    //   bounds.extend([marker.lng, marker.lat]);
    //   map.fitBounds(bounds, { padding: 70, maxZoom: 13, duration: 0 });
    // };

    if (mapElement) { // only build a map if there's a div#map to inject into
      mapboxgl.accessToken = 'pk.eyJ1Ijoicnlhbm9md29vZHMiLCJhIjoiY2trc2Y5MWIzMGNybzJ3cGxlNWF2ZHJkaSJ9.SdPJFs9PoXyG8TewSgyVvQ';
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/ryanofwoods/cklkxz9fy0ww017rz39sc6zrp', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
      });

      // parse the html json dataset to actual markers
      // add them to the map
      // const marker = JSON.parse(mapElement.dataset.marker);

      // new mapboxgl.Marker({ color: "#00755E" })
      //   .setLngLat([marker.lng, marker.lat])
      //   .addTo(map);

      // once all markers are added, fit all markers within map viewport
      // fitMapToMarker(map, marker);
    }
  };

  render() {
    return (
      <div id="map" />
    );
  }
}

export default Map;

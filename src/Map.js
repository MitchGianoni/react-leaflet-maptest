import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';

class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: {lat: 42.3601, lng: 71.0589},
      zoom: 10,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ],
      viewport: ''
    });
  }
  render() {
    return <div id="map"></div>
  }
}
export default Map;
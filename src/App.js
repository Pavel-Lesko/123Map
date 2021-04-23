import React, {Component} from 'react';
import './App.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class App extends Component {
  
  state = {
    lat: 53.900000,
    lng: 27.566670,
    zoom: 10
  };

  render () {
    var position = [this.state.lat, this.state.lng];
    return (    
        <MapContainer center={position} zoom={this.state.zoom}>
          <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <Marker position={position}>
            <Popup>
          I am here
          </Popup>
            </Marker>
        </MapContainer>
      
    );
  }
}

export default App;

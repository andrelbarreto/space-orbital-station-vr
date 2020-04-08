
import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';

import App from './src/App';


export default class space_orbital_station extends React.Component {
  
  render() {
   
    return (
      
      <View>
        <App />
  
      </View>
      
    );
  }
};

AppRegistry.registerComponent('space_orbital_station', () => space_orbital_station);

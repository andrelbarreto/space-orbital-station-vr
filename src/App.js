
import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  NativeModules,
  Pano,
  Text,
  VrButton,
  Sound,
  Model,
  View,
} from 'react-vr';

import Control from './components/control-button';
import Safety from './components/space_safety';
import Astronaut from './components/astronaut';
import Wrench from './components/wrench';
import ControlTip from './components/Controltip';
import Door from './components/hatchet'


const DEFAULT_ANIMATION_BUTTON_RADIUS = 50;
const DEFAULT_ANIMATION_BUTTON_SIZE = 0.05;
const {AudioModule} = NativeModules;



export default class space_orbital_station extends React.Component {

   constructor(props){
       super(props);
       this.state = {
           background: 'space2.jpg',
           sound: 'spacesound.mp3',
           visible: true,
           componentsRender : [ <Control/>, <Safety />, <Astronaut/>, <Wrench/>, <ControlTip/> ]
       };
   }
  
   changeScene() {
       this.setState({
           background: 'space1.jpg',
           sound: 'escape_pod.mp3',
           visible: false,
           componentsRender : [ ]
       });
   }

   renderItems(){
       if (this.state.visible === true) {
           return  <Door />
       }
   }
  render() {
   
    return (
      
      <View>
        <Pano source={asset(this.state.background)}/>

        <Sound
            loop={true}
            volume={0.6}
            source={{ mp3: asset(this.state.sound) }}
        />
        
        <VrButton onClick={this.changeScene.bind(this)}>
            <Text
                 style={{
                  backgroundColor: '#FF0000',
                  fontSize: 10,
                  fontWeight: '500',
                  paddingLeft: 0.2,
                  paddingRight: 0.2,
                  textAlign: 'center',
                             transform: [
                            {translate: [-200, -200, -160]},
                            {rotateX: -90},
                            {rotateY: 15}
                                          ]}} 
            >Click right HERE!!!</Text>
            
            
            </VrButton>
            {this.renderItems()}
        {/* < Door/> */}
        {/* <Safety /> */}
        {/* <Astronaut />
        <Wrench />
        <ControlTip /> */}
        {/* <Control />   */}
         {this.state.componentsRender.map(component=>component)}
      </View>
      
    );
  }
};

AppRegistry.registerComponent('space_orbital_station', () => space_orbital_station);


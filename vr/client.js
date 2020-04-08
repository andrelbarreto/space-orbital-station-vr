// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';
// import Raycaster for cursor positioning
// import * as SimpleRaycaster from "simple-raycaster";
//const used to enable use of different input methods inside VR World

// const SimpleRaycaster = {
//   getType: () => "simple",
//   getRayOrigin: () => [0, 0, 0],
//   getRayDirection: () => [0, 0, -1],
//   drawsCursor: () => true
// };

function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, 'space_orbital_station', parent, {
    // Adding custom options here to create pointers in vr world when using different control methods
  //   raycasters: [
  //     SimpleRaycaster // Add SimpleRaycaster to the options
  // ],
  cursorVisibility: "auto", // Add cursorVisibility

    ...options,
  });
  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};

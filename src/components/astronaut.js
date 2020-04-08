import React, { Component } from 'react'
import {
    VrButton,
    View,
    Image,
    asset
} from 'react-vr'

export default class Astronaut extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayingControlText: true,
            image : 'astronaut.png',
               
        }
        this.toggleDisplayText = this.toggleDisplayText.bind(this)
    }

    toggleDisplayText() {
        if (!this.state.displayingControlText) {
            this.setState({ displayingControlText: true })

        } else {
            this.setState({ displayingControlText: false })
        }
    }

     changeimage(){
        this.setState({
             image : 'PathPuzzle.jpg' })
    }

    // onMouseMove(e) {
    //     this.setState({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY});
    // }

    // componentDidMount() {
    //     document.addEventListener('click', this.handleClick);
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('click', this.handleClick);
    // }

    // handleClick(e) {
    //     e.stopPropagation();
    //     console.log('INSIDE');
    //     this.setState({inside: 'inside'});
    // }

  

    render() {
      //  const {x, y, inside} = this.state.coords;
        return (
           // <View>
                <VrButton onClick={this.toggleDisplayText}>
                    {this.state.displayingControlText === true ?
                        (
                           <View>
                           <Image
                           source={asset(this.state.image)}
                           style={{
                               position: 'absolute',
                               width: 91.3,
                               height:116.3,
                               layoutOrigin: [ 0, 0],
                               transform: [
                                   { translate: [-20, 165, -1000]}, 
                                   { rotateY: 180},
                                   { rotateX: 45}
                                
                            ]
                           }}
                       />
                           </View>
                        )
                        : (
                             this.changeimage(),
                            <Image
                                source={asset(this.state.image)}
                            style={{
                                position: 'absolute',
                                width: 10.15,
                                height: 13.5,
                                layoutOrigin: [ 0, 0],
                                transform: [{ translate: [12, 10, 10] }, { rotateY: -120 }],
                            }}
                        />
                    )
                                   // <Image
                        //     <div className="previewComponent">
                        //     <div className="imgPreview">
                                                           
                        //       <img src={this.props.image} alt="" onMouseMove={this._onMouseMove.bind(this)}
                        //       style={{
                        //         position: 'absolute',
                        //         width: 10.15,
                        //         height: 13.5,
                        //         layoutOrigin: [ 0, 0],
                        //         transform: [{ translate: [12, 10, 10] }, { rotateY: -120 }],
                        //     }}
                        //     onEnter={() => this.setState({textColor: 'gold'})}
                        //     onExit={() => this.setState({textColor: 'white'})} 

                        //     onClick={this.handleClick.bind(this)} />
                        //     <h1>Mouse coordinates: {x} {y}</h1>
                        //     <h2>Inside?: {inside}</h2>
                
                        //  </div>
                        //  </div>
                            //  </Image>
                            
                         }
                        </VrButton>
                    

               
          //  </View>

        )
    }
}


module.exports = Astronaut
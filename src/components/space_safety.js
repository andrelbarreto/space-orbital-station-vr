import React, { Component } from 'react'
import {
    VrButton,
    View,
    Image,
    asset
} from 'react-vr'

export default class Safety extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayingControlText: true
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

    render() {
        return (
           // <View>
                <VrButton onClick={this.toggleDisplayText}>
                    {this.state.displayingControlText === true ?
                        (
                           // <View>
                           <Image
                           source={asset('space-safety.jpg')}
                           style={{
                               position: 'absolute',
                               width: 17.75,
                               height:83.125,
                               layoutOrigin: [ 0, 0],
                               transform: [
                                   { translate: [115, 30, -25]},
                                   { rotateY: 325},
                                   { rotateX: 5},
                               ]
                           }}
                       />
                           // </View>
                        )
                        : (
                            <Image
                                source={asset('MIR_tip2.jpg')}
                                style={{
                                    position: 'absolute',
                                    width: 5,
                                    height: 3,
                                    layoutOrigin: [ -1.5, 0],
                                    transform: [{ translate: [22, -10, 10] }, { rotateY: -120 }],
                                }}
                            />
                        )
                    }

                </VrButton>
          //  </View>

        )
    }
}
module.exports = Safety
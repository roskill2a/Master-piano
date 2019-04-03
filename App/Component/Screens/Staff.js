import React, {Component} from 'react'
import {View} from 'react-native'
import Cleff from './Cleff'

class Staff extends Component {
    render() {
        const {treble, bass, both, height, width, note} = this.props;
        if (both) {
            // space in between treble and clef should take up around
            // 50% of the total height
            let cleffHeight = height / 4;
            let notes = ['d','e', 'f', 'g', 'b'];

            return (
                <View
                    style={{height, width, display: 'flex', flexDirection: 'column'}}
                >
                    <Cleff height={cleffHeight} width={width} type="treble" notes={notes} />
                    <View style={{height: height / 2, width}} />
                    <Cleff height={cleffHeight} width={width} type="bass" />
                </View>
            )
        } else if (treble) {
            // space in between treble and clef should take up around
            // 50% of the total height
            let cleffHeight = height / 4;
            let notes = ["d","e", "f", "g", "b"];

                return (
                    <View
                        style={{height, width, display: 'flex', flexDirection: 'column'}}
                    >
                        <Cleff height={cleffHeight} width={width} type="treble" notes={notes} note_p={note[note.length - 1]}/>
                    </View>
                )
            }
        }
}

export default Staff

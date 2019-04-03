import React, {Component} from 'react'
import {View, TouchableHighlight} from 'react-native'

const keys = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
//            -30  -25  -20  -15  -10

function getHeightOffset(note) {
    if (!note) {
        // default to 0
        return 0
    } else {
        let index = keys.indexOf(note);
        return (-30 + (index * 13))
    }
}

class Note extends Component {
    state = {
        pressed: false
    };
    render() {
        const {height, width, note, color} = this.props;
        let bottom = getHeightOffset(note);
        let backgroundColor = color; //? '#32CD32' : 'black';
        return (
            <TouchableHighlight
                style={{height, width, bottom, borderRightWidth: 2,  display: 'flex', borderRightColor: backgroundColor,  alignItems: 'flex-end', justifyContent: 'flex-end'}}
                onPress={() => {}}
                onShowUnderlay={() => {
                    this.setState({pressed: true})
                }}
                onHideUnderlay={() => {
                    this.setState({pressed: false})
                }}
                underlayColor="rgba(255, 255, 255, 0.2)"
            >
                <View
                    style={{width: 30, height: 20, borderRadius: 20, backgroundColor}}
                     //transform={[{ skewX: '10deg' }, {rotateX: '45deg'}]}
                    transform={[{ rotate: '-30deg'}]}
                />
            </TouchableHighlight>
        )
    }
}

export default Note

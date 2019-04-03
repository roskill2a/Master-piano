import React, {Component} from 'react'
import {View, Image, StyleSheet, Text, Button} from 'react-native'
import Note from './Note'
const trebleImg = require('../../assets/219px-GClef.svg.png');
const bassImg = require('../../assets/FClef.svg.png');

var x = 0;
var completed = false;

class Cleff extends Component {

    renderNote = (key, index) => {
        const {notes, height, width, note_p} = this.props;

        if (note_p === key && index === x) {
            x++;
            if (x === notes.length - 1) {
                completed = true;
            }
            return (
                <View key={`_${index}_${key}`}
                    style={{flex: 1 / notes.length}}>
                    <Note height={height} width={40} note={key} color={'#32CD32'}/>
                </View>
            )
        } if (index === x) {
            return(
                <View key={`_${index}_${key}`}
                      style={{flex: 1 / notes.length}}>
                    <Note height={height} width={40} note={key} color={'blue'}/>
                </View>
            )
        }
        else {
            return(
                <View key={`_${index}_${key}`}
                      style={{flex: 1 / notes.length}}>
                    <Note height={height} width={40} note={key} color={'black'}/>
                </View>
            )
        }
    };

    renderNote_finished = (key, index) => {
        const {notes, height, width, note_p} = this.props;

            return (
                <View key={`_${index}_${key}`}
                      style={{flex: 1 / notes.length}}>
                    <Note height={height} width={40} note={key} color={'#32CD32'}/>
                </View>
            )
    };

    renderNotes = (imageWidth) => {
        const {notes, height, width} = this.props;
        if (notes) {
                return (
                    <View style={{
                        position: 'absolute',
                        left: (imageWidth + 30),
                        width: width - (imageWidth + 30),
                        top: 0,
                        bottom: 0,
                        height,
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        {notes.map(this.renderNote)}
                    </View>
                )
            }
    };

    renderNotes_finished = (imageWidth) => {
        const {notes, height, width} = this.props;
        if (notes) {
            return (
                <View style={{
                    position: 'absolute',
                    left: (imageWidth + 30),
                    width: width - (imageWidth + 30),
                    top: 0,
                    bottom: 0,
                    height,
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    {notes.map(this.renderNote_finished)}
                </View>
            )
        }
    };

    render() {
        const {height, width, type} = this.props;
        let spaces = [0,1,2,3];
        const image = type === 'treble' ? trebleImg : bassImg;
        const imageHeight = type === 'treble' ? height + 30 : height - 10;
        const imageWidth = type === 'treble' ? 40 : 50;
        const top = type === 'treble' ? -15 : 0;
        const imageStyle = {
            position: 'absolute',
            left: 10,
            top,
            height: imageHeight,
            width: imageWidth,
            resizeMode: 'contain',
        };
        if (!completed) {
            return (
                <View
                    style={{height, width, borderWidth: 1, display: 'flex', flexDirection: 'column', marginBottom: 50}}
                >
                    {
                        spaces.map(space =>
                            <View key={space} style={{
                                flex: (1 / spaces.length),
                                width,
                                borderTopWidth: 0.5,
                                borderBottomWidth: 0.5
                            }}/>
                        )
                    }
                    {this.renderNotes(imageWidth)}
                    <Image style={imageStyle} source={image}/>
                </View>
            )
        } else {
            return (
                <View
                    style={{height, width, borderWidth: 1, display: 'flex', flexDirection: 'column', marginBottom: 50}}
                >
                    {
                        spaces.map(space =>
                            <View key={space} style={{
                                flex: (1 / spaces.length),
                                width,
                                borderTopWidth: 0.5,
                                borderBottomWidth: 0.5
                            }}/>
                        )
                    }
                    {this.renderNotes_finished(imageWidth)}
                    <Image style={imageStyle} source={image}/>
                </View>
            )
        }
    }
}

export default Cleff

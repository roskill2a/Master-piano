import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Icon, Right, Title, Left, Body } from 'native-base';
import {CardMistralGagnant, CardBellaCiao, CardHallelujah, CardImagine } from './Music'

export class PartitionsScreen extends Component {
    render() {
        return (
        <Container style={styles.container}>
            <Header style={{backgroundColor:'#7e1d31'}}>
                <Left>
                    <Icon style={{color: '#fff'}} name='menu' onPress={() => this.props.navigation.openDrawer()}/>
                </Left>
                <Body>
                    <Title style={{color: '#fff'}}>Master Piano</Title>
                </Body>
                <Right/>
            </Header>
            <Content>
                <CardMistralGagnant imageUri={require('../../assets/partitions/pochette-mistral-gagnant-renaud.jpg')} nameArtist='RENAUD' nameSingle='MISTRAL GAGNANT' navigation={this.props.navigation}/>
                <CardBellaCiao imageUri={require('../../assets/partitions/pochette-bella-ciao-la-casa-de-papel.jpg')} nameArtist='CHANSON TRADITIONNELLE' nameSingle='BELLA CIAO' navigation={this.props.navigation}/>
                <CardHallelujah imageUri={require('../../assets/partitions/pochette-hallelujah-rufus-wainwright.jpg')} nameArtist='RUFUS WAINWRIGHT' nameSingle='HALLELUJAH' navigation={this.props.navigation}/>
                <CardImagine imageUri={require('../../assets/partitions/pochette-imagine-john-lennon.jpg')} nameArtist='JOHN LENNON' nameSingle='IMAGINE' navigation={this.props.navigation}/>
            </Content>
        </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b24d5a'
    }
})

export default PartitionsScreen

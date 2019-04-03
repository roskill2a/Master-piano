import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View, Dimensions } from 'react-native'
import { Container, Header, Icon, Right, Title, Left, Body, Content } from 'native-base';
import '../../shim';
import Staff from "./Staff";

var net = require('net');

var serverPort = 8080;
const {width, height} = Dimensions.get('window');

export class PianoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: "No conected",
        }

        this.updateChatter = this.updateChatter.bind(this);
        this.state = { chatter: [] };
    }

    updateChatter(msg) {
        this.setState({
            chatter: this.state.chatter.concat([msg])
        });
    }

    componentDidMount() {
        let client = net.createConnection(serverPort, () => {
            //this.updateChatter('opened client on ' + JSON.stringify(client.address()));
            client.write('Hello, server! Love, Client.');
            this.setState({isConnected: "Connected"})
        });

        client.on('data', (data) => {
            this.updateChatter('' + data);
        });

        client.on('error', (error) => {
            this.updateChatter('client error ' + error);
        });

        client.on('close', () => {
            this.updateChatter('client close');
        });

        this.client = client;
    }

    componentWillUnmount() {
        this.client = null;
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={{backgroundColor:'#7e1d31'}}>
                    <Left>
                        <Icon type="FontAwesome" style={{color: '#fff'}} name='angle-left' onPress={() => this.props.navigation.navigate("Partitions")}/>
                    </Left>
                    <Body>
                    <Title style={{color: '#fff'}}>Master Piano</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content style={styles.partitions}>
                    <Text style={{color:"#00FF00", textAlign:'center', fontSize: 20, marginBottom: 50}}> {this.state.isConnected} </Text>
                    <View style={{alignItems:'center'}}>
                        <Staff height={height * 0.6} width={width * 0.8} note={this.state.chatter} treble />
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b24d5a',
    },
    partitions: {

    }
});

export default PianoScreen

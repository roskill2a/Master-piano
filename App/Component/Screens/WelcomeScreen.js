import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Container, Content, Thumbnail, Tabs, Tab, TabHeading } from 'native-base';
import { SignUpScreen, LoginScreen} from './index'

export class WelcomeScreen extends Component {
    render() {
        return (
            <Container>
                <Content style={styles.container}>
                    <Thumbnail source={require('../../assets/Logo.png')} style={{alignSelf:'center', marginTop: 100, width: 150, height:150, marginBottom:50}}/>
                    <Tabs>
                        <Tab heading={ <TabHeading style={{backgroundColor:'#b24d5a'}}><Text style={{color:'#fff'}}>Inscription</Text></TabHeading>}>
                            <SignUpScreen/>
                        </Tab>
                        <Tab heading={ <TabHeading style={{backgroundColor:'#b24d5a'}}><Text style={{color:'#fff'}}>Connexion</Text></TabHeading>}>
                            <LoginScreen/>
                        </Tab>
                    </Tabs>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b24d5a'
    },
    buttonSignIn: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    }
});

export default WelcomeScreen

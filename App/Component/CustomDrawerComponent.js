import React, {Component} from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import { Container, Footer, Left, Body, Right, Content, ListItem, Icon, Button, FooterTab} from 'native-base';
import firebase from 'react-native-firebase'

class CustomDrawerComponent extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    signOutUser = async () => {
        try {
            await firebase.auth().signOut();
        } catch (e) {
            console.log(e);
        }
    }
    render () {
        return (
            <Container style={{flex: 1}}>
                <View style={{height:120, backgroundColor: '#b24d5a', alignItems: 'center', justifyContent:'center'}}>
                    <Image source={require('../assets/Logo.png')} style={{height:80, width: 80}}/>
                </View>
                <Content>
                    <View>
                        <ListItem icon onPress={this.navigateToScreen('Dashboard')}>
                            <Left>
                                <Icon type="MaterialCommunityIcons" size={30} name='view-dashboard' style={{color:'#7e1d31'}}/>
                            </Left>
                            <Body>
                                <Text>Dashboard</Text>
                            </Body>
                            <Right>
                                <Icon active name='arrow-forward' style={{color:'#7e1d31'}}/>
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={this.navigateToScreen('Partitions')}>
                            <Left>
                                <Icon type="MaterialCommunityIcons" size={30} name='music-note' style={{color:'#7e1d31'}}/>
                            </Left>
                            <Body>
                                <Text>Partitions</Text>
                            </Body>
                            <Right>
                                <Icon active name='arrow-forward' style={{color:'#7e1d31'}}/>
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={this.navigateToScreen('Cours')}>
                            <Left>
                                <Icon type="MaterialCommunityIcons" size={30} name='audiobook' style={{color:'#7e1d31'}}/>
                            </Left>
                            <Body>
                                <Text>Cours</Text>
                            </Body>
                            <Right>
                                <Icon active name='arrow-forward' style={{color:'#7e1d31'}}/>
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={this.navigateToScreen('Parametres')}>
                            <Left>
                                <Icon size={30} name='settings' style={{color:'#7e1d31'}}/>
                            </Left>
                            <Body>
                                <Text>Parametres</Text>
                            </Body>
                            <Right>
                                <Icon active name='arrow-forward' style={{color:'#7e1d31'}}/>
                            </Right>
                        </ListItem>
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full onPress={() => this.signOutUser()}>
                            <Icon type="MaterialCommunityIcons" size={20} name='logout'/>
                            <Text>Deconnexion</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
};

const styles = StyleSheet.create({
    navSectionStyle: {
        flex: 1,
        alignItems: 'center',
        height: 50,
    },
    navItemStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

CustomDrawerComponent.propTypes = {
    navigation: PropTypes.object
};

export default CustomDrawerComponent;

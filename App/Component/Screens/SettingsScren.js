import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {Header, Left, Right, Icon, Body, Title, Container, Content, Picker, ListItem, Text, Switch} from 'native-base';
import PhotoUpload from 'react-native-photo-upload'
import firebase from 'react-native-firebase'

export class ParameterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            username: null,
            lvl: 'Novice',
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: []
            }
        }
    }
    onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }
	componentDidMount() {
		const { currentUser } = firebase.auth()
		this.setState({ currentUser })
	}
    render() {
        const { currentUser } = this.state
        return (
        <View style={styles.container}>
            <Header style={{backgroundColor:'#7e1d31'}}>
                <Left>
                    <Icon style={{color: '#fff'}} name='menu' onPress={() => this.props.navigation.openDrawer()}/>
                </Left>
                <Body>
                    <Title style={{color: '#fff'}}>Parametres</Title>
                </Body>
                <Right/>
            </Header>
            <Container>
                <Content>
                    <View style={{backgroundColor:'#7e1d31', height:300, alignItems: 'center', flex: 1}}>
                        <PhotoUpload
                            onPhotoSelect={avatar => {
                                if (avatar) {
                                console.log('Image base64 string: ', avatar)
                                }
                            }}
                            >
                                <Image
                                    style={{
                                    paddingVertical: 30,
                                    width: 150,
                                    height: 150,
                                    borderRadius: 75
                                    }}
                                    resizeMode='cover'
                                    source={{
                                    uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                                    }}
                                />
                        </PhotoUpload>
                        <Text></Text>
                    </View>
                    <View>
                        <ListItem itemDivider>
                            <Text>Account</Text>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon type="MaterialIcons" name='notifications' style={{color:'#7e1d31'}}/>
                            </Left>
                            <Body>
                                <Text>Notifications</Text>
                            </Body>
                            <Right>
                                <Switch value={true} />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon type="MaterialIcons" name='email' style={{color:'#7e1d31'}}/>
                            </Left>
                            <Body>
                                <Text>Email</Text>
                            </Body>
                            <Right>
                                <Text>{currentUser && currentUser.email}</Text>
                                <Icon type="Entypo" name='chevron-right' style={{color:'#7e1d31'}}/>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon type="MaterialIcons" name='person' style={{color:'#7e1d31'}}/>
                            </Left>
                            <Body>
                                <Text>Nom</Text>
                            </Body>
                            <Right>
                                <Text>{this.state.username}</Text>
                                <Icon type="Entypo" name='chevron-right' style={{color:'#7e1d31'}}/>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon type="FontAwesome" name='certificate' style={{color:'#7e1d31'}}/>
                            </Left>
                            <Body>
                                <Text>Level</Text>
                            </Body>
                            <Right>
                                <Picker
                                    iosHeader="Select one"
                                    mode="dropdown"
                                    selectedValue={this.state.selected1}
                                    onValueChange={this.onValueChange.bind(this)}>
                                    <Picker.Item label="Novice" value="key0" />
                                    <Picker.Item label="Intermediare" value="key1" />
                                    <Picker.Item label="Master" value="key2" />
                                </Picker>
                                <Icon type="Entypo" name='chevron-right' style={{color:'#7e1d31'}}/>
                            </Right>
                        </ListItem>
                    </View>
                </Content>
            </Container>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b24d5a'
    }
})

export default ParameterScreen

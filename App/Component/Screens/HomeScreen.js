import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import firebase from 'react-native-firebase'
import {Header, Left, Right, Icon, Body, Title} from 'native-base';

export default class Main extends React.Component {
	state = { currentUser: null }
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
				<Title style={{color: '#fff'}}>Master Piano</Title>
			</Body>
			<Right/>
			</Header>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<View style={styles.containerScroll}>
						<TouchableOpacity style={styles.menuButton} onPress={() => this.props.navigation.navigate("Piano")}>
							<Image source={require('../../assets/partitionsPic.png')} style={styles.image}/>
						</TouchableOpacity>
					</View>
                    <View style={styles.containerScroll}>
                        <TouchableOpacity style={styles.menuButton} onPress={() => this.props.navigation.navigate("Cours")}>
                            <Image source={require('../../assets/coursesPic.png')} style={styles.image}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerScroll}>
                        <TouchableOpacity style={styles.menuButton} onPress={() => this.props.navigation.navigate("Partitions")}>
                            <Image source={require('../../assets/partitionsPic.png')} style={styles.image}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerScroll}>
                        <TouchableOpacity style={styles.menuButton} onPress={() => this.props.navigation.navigate("Parametres")}>
                            <Image source={require('../../assets/settingsPic.png')} style={styles.image}/>
                        </TouchableOpacity>
                    </View>
				</ScrollView>
				<Text style={styles.user}> Hi {currentUser && currentUser.email}! </Text>
			</View>
		</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#b24d5a'
	},
	user: {
		color: '#fff',
		fontSize: 20,
		marginBottom: 15,
    },
    containerScroll: {
        flex: 1,
        height: 250,
        width: 250,
        marginLeft:20,
        alignSelf: 'center',
	},
	menuButton: {
		flex:2,
		marginLeft: 20,
		backgroundColor: '#fff',
		borderRadius: 64,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 120,
		height: 120,
	}
})

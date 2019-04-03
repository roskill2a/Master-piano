import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
	Container,
	Content,
	Form,
	Item,
	Input,
	Label,
	Button,
	Text
} from "native-base";
import firebase from "react-native-firebase";

class SignUpScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lvl: "Debutant",
			username: "",
			email: "",
			password: "",
			errorMessage: null
		};
	}

	componentWillMount() {
		var config = {
			apiKey: "AIzaSyBgWslivkjeUwzkDL5iyQEeQ9t47GtdTOs",
			authDomain: "master-piano.firebaseapp.com",
			databaseURL: "https://master-piano.firebaseio.com",
			projectId: "master-piano",
			storageBucket: "master-piano.appspot.com",
			messagingSenderId: "965669097547"
		};
		//firebase.initializeApp(config);
	}

	writeUserData(username, email, lvl) {
		firebase
			.database()
			.ref("UsersList/")
			.set({
				username,
				email,
				lvl
			})
			.then(data => {
				//success callback
				console.log("data ", data);
			})
			.catch(error => {
				//error callback
				console.log("error ", error);
			});
	}

	handleSignUp = () => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => this.props.navigation.navigate("Home"))
			.catch(error => this.setState({ errorMessage: error.message }));
		console.log("handleSignUp");
	};

	render() {
		this.writeUserData(this.state.username, this.state.email, this.state.lvl);
		return (
			<Container>
				<Content style={styles.container}>
					<Form>
						<Item floatingLabel>
							<Label style={{ color: "#fff" }}>Username</Label>
							<Input
								autoCapitalize="none"
								style={{ color: "#fff" }}
								onChangeText={username => this.setState({ username })}
								value={this.state.username}
							/>
						</Item>
						<Item floatingLabel>
							<Label style={{ color: "#fff" }}>Email</Label>
							<Input
								style={{ color: "#fff" }}
								onChangeText={email => this.setState({ email })}
								value={this.state.email}
								autoCapitalize="none"
							/>
						</Item>
						<Item floatingLabel last>
							<Label style={{ color: "#fff" }}>Password</Label>
							<Input
								secureTextEntry
								style={{ color: "#fff" }}
								onChangeText={password => this.setState({ password })}
								value={this.state.password}
								autoCapitalize="none"
							/>
						</Item>
						<Button
							full
							rounded
							style={{
								marginTop: 40,
								alignSelf: "center",
								width: 250,
								backgroundColor: "#7e1d31",
								height: 50
							}}
							onPress={this.handleSignUp}
						>
							<Text style={{ color: "#fff" }}>Inscription</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}
/*
<View style={styles.container}>
								<Text>Sign Up</Text>
								{this.state.errorMessage &&
								<Text style={{ color: 'red' }}>
										{this.state.errorMessage}
								</Text>}
								<TextInput
										placeholder="Email"
										autoCapitalize="none"
										style={styles.textInput}
										onChangeText={email => this.setState({ email })}
										value={this.state.email}
								/>
								<TextInput
										secureTextEntry
										placeholder="Password"
										autoCapitalize="none"
										style={styles.textInput}
										onChangeText={password => this.setState({ password })}
										value={this.state.password}
								/>
								<Button title="Sign Up" onPress={this.handleSignUp} />
								<Button
										title="Already have an account? Login"
										onPress={() => this.props.navigation.navigate('LogIn')}
								/>
						</View>*/
const styles = StyleSheet.create({
	container: {
		flex: 1,
		//alignItems: 'center',
		//justifyContent: 'center',
		backgroundColor: "#b24d5a"
	},
	textInput: {
		height: 40,
		width: "90%",
		borderColor: "gray",
		borderWidth: 1,
		marginTop: 8
	}
});

export default SignUpScreen;

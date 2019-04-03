import React from "react";
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

export default class Login extends React.Component {
  state = { email: "", password: "", errorMessage: null };
  handleLogin = () => {
  const { email, password } = this.state;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => this.props.navigation.navigate("Main"))
    .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
  return (
    <Container>
    <Content style={styles.container}>
      <Form>
      <Item floatingLabel>
        <Label style={{ color: "#fff" }}>Email</Label>
        <Input
        autoCapitalize="none"
        style={{ color: "#fff" }}
        onChangeText={email => this.setState({ email })}
        value={this.state.email}
        />
      </Item>
      <Item floatingLabel last>
        <Label style={{ color: "#fff" }}>Password</Label>
        <Input
        autoCapitalize="none"
        secureTextEntry
        style={{ color: "#fff" }}
        onChangeText={password => this.setState({ password })}
        value={this.state.password}
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
        onPress={this.handleLogin}
      >
        <Text style={{ color: "#fff" }}>Connexion</Text>
      </Button>
      </Form>
    </Content>
    </Container>
  );
  }
}
/*
  <View style={styles.container}>
      <Text>Login</Text>
      {this.state.errorMessage &&
      <Text style={{ color: 'red' }}>
        {this.state.errorMessage}
      </Text>}
      <TextInput
      style={styles.textInput}
      autoCapitalize="none"
      placeholder="Email"
      onChangeText={email => this.setState({ email })}
      value={this.state.email}
      />
      <TextInput
      secureTextEntry
      style={styles.textInput}
      autoCapitalize="none"
      placeholder="Password"
      onChangeText={password => this.setState({ password })}
      value={this.state.password}
      />
      <Button title="Login" onPress={this.handleLogin} />
      <Button
      title="Don't have an account? Sign Up"
      onPress={() => this.props.navigation.navigate('SignUp')}
      />
    </View>*/
const styles = StyleSheet.create({
  container: {
  flex: 1,
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

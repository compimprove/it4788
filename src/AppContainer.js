import React from 'react';
import Login from './components/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterThamgia from './components/Register/RegisterThamgia';
import Register from './components/Register/Register';
import MainPage from './components/MainPage/MainPage';
const Stack = createStackNavigator();

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logIn: false,
      token: ''
    }
  }

  login(data) {
    console.log("Login Data: " + JSON.stringify(data));
    this.setState({
      logIn: true
    })
  }

  register(data) {
    console.log("Register Data: " + JSON.stringify(data));
    this.setState({
      logIn: true
    })
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {this.state.logIn &&
            <Stack.Screen name="MainPage" component={MainPage} />
          }
          {!this.state.logIn &&
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                initialParams={{ login: this.login.bind(this) }} />
              <Stack.Screen
                name="Register"
                component={Register}
                initialParams={{ register: this.register.bind(this) }} />
            </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

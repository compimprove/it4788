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

  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="MainPage" component={MainPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

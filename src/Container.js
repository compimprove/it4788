import React from 'react';
import Login from './components/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterThamgia from './components/Register/RegisterThamgia';
const Stack = createStackNavigator();

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="RegisterThamGia" component={RegisterThamgia} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

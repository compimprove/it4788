import React from 'react';
import { AppLoading } from 'expo';
import { Container } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import CreatePost from './CreatePost';
import Setting from './src/components/InterfaceUser/Setting';
import Login from './src/components/Login/Login';
import Login_Pass from './src/components/Login/Login_Pass';
import Logout from './src/components/Logout/Logout';
import Phone from './src/components/Register/Phone';
import Pass from './src/components/Register/Pass';
import RegisterThamgia from './src/components/Register/RegisterThamgia';
import RegisterHoten from './src/components/Register/RegisterHoten';
import ChoseDate from './src/components/Register/ChoseDate';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    else {
      return (
        <Container>
          <Phone />
        </Container>
      );
    }
  }
}

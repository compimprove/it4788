import React from 'react';
import { AppLoading } from 'expo';
import { Container} from 'native-base';
import * as Font from 'expo-font';

import { Ionicons } from '@expo/vector-icons';
import CreatePost from './CreatePost';




import Login from './src/components/Login/Login';
import Invited from './src/components/InterfaceUser/Invited';
import SettingFriend from './src/components/InterfaceUser/SettingFriend';
import InterfaceUser from './src/components/InterfaceUser/InterfaceUser';
import EditPage from './src/components/InterfaceUser/EditPage';
import AfterAddFri from './src/components/InterfaceUser/AfterAddFri';
import RegisterThamgia from './src/components/Register/RegisterThamgia';
import RegisterHoten from './src/components/Register/RegisterHoten';
import Login_Pass from './src/components/Login/Login_Pass';
import Phone from './src/components/Register/Phone';



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
          <Invited/>
        </Container>
      );
    }
  }
}

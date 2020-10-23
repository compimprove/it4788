import React from 'react';
import { AppLoading } from 'expo';
import { Container } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import CreatePost from './CreatePost';
import Invited from './src/components/InterfaceUser/Invited';
import RegisterThamgia from './src/components/Register/RegisterThamgia';
import AddFriend from './src/components/InterfaceUser/AddFriend';
import Phone from './src/components/Register/Phone';
import InterfaceUser from './src/components/InterfaceUser/InterfaceUser';
import Friends from './src/components/InterfaceUser/Friends';
import Pop from './src/components/Popup/Pop';
import RememberInfo from './src/components/Register/RememberInfo';
import ErrorPass from './src/components/Login/ErrorPass';
import NotInternet from './src/components/Login/NotInternet';
import Login from './src/components/Login/Login';
import Login_Pass from './src/components/Login/Login_Pass';
import LoginInterface from './src/components/Login/LoginInterface';
import Interface from './src/components/Register/Interface';
import RegisterHoten from './src/components/Register/RegisterHoten';
import Email from './src/components/Register/Email';
import ChoseGioiTinh from './src/components/Register/ChoseGioiTinh';
import ChoseDate from './src/components/Register/ChoseDate';
import EditPage from './src/components/InterfaceUser/EditPage';
import Setting from './src/components/InterfaceUser/Setting';
import Logout from './src/components/Logout/Logout';
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
          <Login/>
        </Container>
      );
    }
  }
}

import axios from 'axios';
import Login from './components/Login/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './components/Register/Register';
import MainPage from './components/MainPage/MainPage';
import Comment from '../Comment';
import RegisterThamgia from "./components/Register/RegisterThamgia";
import React from "react";
import UserRegisterData from "./models/UserRegisterData";
import {Alert} from "react-native";
import Utility from "../Utility";

const config = require("../config.json");
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
    axios.post(config.host + "/it4895/login", null, {
      params: {
        phonenumber: data.userIdentity,
        password: data.password,
        uuid: UserRegisterData.getInstance().uuid
      }
    }).then(function (response) {
      if (Utility.isSuccessResponse(response)) {
        this.setState({
          token: response.data.data.token,
          logIn: true,
        });
        console.log("Login Succeed, token: ", this.state.token);
      } else {
        Alert.alert("Sai thông tin");
        console.log(JSON.stringify(response.data));
      }
    }.bind(this));
  }

  getToken() {
    return this.state.token;
  }

  logout() {
    this.setState({
      logIn: false
    })
  }

  register(data) {
    console.log("Register Data: " + JSON.stringify(data));
    axios.post(config.host + '/it4895/signup', null, {
      params: {
        phonenumber: data.phoneNumber,
        password: data.passWord,
        uuid: data.uuid
      }
    }).then(response => {
      if (response.data.code) {
        Alert.alert("Register Succeed");
      }
    })
  }

  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            {this.state.logIn &&
            <>
              <Stack.Screen
                  name="MainPage"
                  component={MainPage}
                  initialParams={{getToken: this.getToken.bind((this))}}
              />
              <Stack.Screen
                  name="Comment"
                  component={Comment}
                  initialParams={{getToken: this.getToken.bind((this))}}/>
            </>
            }
            {!this.state.logIn &&
            <>
              <Stack.Screen
                  name="Login"
                  component={Login}
                  initialParams={{login: this.login.bind(this)}}/>
              <Stack.Screen
                  name="Register"
                  component={Register}
                  initialParams={{register: this.register.bind(this)}}/>
            </>
            }
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

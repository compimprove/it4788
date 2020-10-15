
import React, { Component } from 'react';
import { StyleSheet, View, TextInput, } from 'react-native';
import { Appbar } from 'react-native-paper';
import Footer from '../Footer/Footer';
import { Text, Content, Container } from 'native-base';
import UserRegisterData from '../../models/UserRegisterData';
export default class RegisterHoten extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  setFirstName(firstName) {
    this.setState({ firstName });
  }

  setLastName(lastName) {
    this.setState({ lastName });
  }

  onSubmit() {
    if (this.state.firstName != '' && this.state.lastName != '') {
      console.log("Submit FN " + this.state.firstName + " LS " + this.state.lastName);
      let userData = UserRegisterData.getInstance();
      userData.firstName = this.state.firstName;
      userData.lastName = this.state.lastName;
      userData.log();
      this.props.navigation.navigate("Email");
    }
  }

  _onPressButton2() {
    alert("Bạn đã có tài khoản");
  }
  _onPressButton1() {
    alert("Back");
  }
  _onPressButton3() {
    alert("Back");
  }
  render() {
    let _this = this;
    return (
      <Container>
        <Appbar.Header style={{ backgroundColor: 'white' }}>
          <Appbar.BackAction icon="back" onPress={this._onPressButton3} />
          <Appbar.Content title="Tham gia" />
        </Appbar.Header>
        <Content style={{ margin: 10, }}>
          <Text style={styles.name}>Bạn tên gì?</Text>
          <View
            style={styles.view}>
            <TextInput
              style={styles.input1}
              placeholder="Họ"
              value={this.state.lastName}
              onChangeText={this.setLastName.bind(this)}
            />
            <TextInput style={styles.input2}
              placeholder="Tên"
              value={this.state.firstName}
              onChangeText={this.setFirstName.bind(this)}
            />

          </View>
          <Text style={styles.text}>
            Dùng tên thật giúp bạn bè dễ dàng nhận ra bạn hơn</Text>
        </Content>
        <Footer
          onClick={this.onSubmit.bind(this)} />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  iconHeader: {
    fontSize: 20,
    color: 'black'
  },
  text: {
    textAlign: 'center',
    color: 'grey'
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 15,
    color: 'grey',
  },
  input1: {
    borderColor: 'grey',
    borderWidth: 1,
    width: 150,
    borderRadius: 5,
    height: 40
  },
  input2: {
    borderColor: 'grey',
    borderWidth: 1,
    width: 150,
    borderRadius: 5,
    height: 40
  },
  name: {
    color: '#1877F2',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 200,
    textAlign: 'center'
  },

});



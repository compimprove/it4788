
import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';
import Footer from '../Footer/Footer';
import { Container, Button, Content, Text } from 'native-base';
import UserRegisterData from '../../models/UserRegisterData';
export default class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: -1
    }
  }
  goUsePhone() {
    this.props.navigation.navigate("Phone");
  }
  _onPressButton1() {
    alert("Email")
  }
  _onPressButton2() {
    alert("Bạn đã có tài khoản")
  }
  _onPressButton3() {
    alert("Back")
  }
  setEmail(email) {
    this.setState({ email });
  }

  onSubmit() {
    if (this.state.email == -1) {
      return;
    } else {
      console.log("Submit email " + this.state.email);
      UserRegisterData.getInstance().email = this.state.email;
      UserRegisterData.getInstance().log();
      this.props.navigation.navigate("Phone");
    }
  }

  render() {
    return (
      <Container>
        <Appbar.Header style={{ backgroundColor: 'white' }}>
          <Appbar.BackAction icon="back" onPress={this._onPressButton3} />
          <Appbar.Content title="Email" />
        </Appbar.Header>
        <Content style={{ margin: 10 }}>
          <Text
            style={styles.text}
          >Email của bạn là gì ?</Text>
          <TextInput
            keyboardType="email-address"
            style={styles.address}
            placeholder="Nhập địa chỉ email của bạn"
            onChangeText={this.setEmail.bind(this)}
            value={this.state.email}
          />
          <Text style={styles.text1}
          >Bạn sẽ dùng email này khi đăng nhập và khi cần đặt lại mật khẩu</Text>
          <Button style={styles.button} onPress={this.goUsePhone.bind(this)} block primary>
            <Text>Dùng số điện thoại</Text>
          </Button>
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
  text1: {
    color: 'grey',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  address: {
    borderWidth:1,  
    borderColor:'grey',
    borderRadius:5,
    height:40,
    paddingLeft:10
  },
  button: {
    height: 35,
    borderRadius: 5
  },
  text: {
    color: '#1877F2',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 150,
    textAlign: 'center',
    paddingBottom: 15,
  },

});



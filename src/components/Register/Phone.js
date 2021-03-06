
import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';
import Footer from '../Footer/Footer';
import { Container, Button, Content, Text } from 'native-base';
import UserRegisterData from '../../models/UserRegisterData';
export default class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: ''
    }
  }

  setPhone(phone) {
    this.setState({ phone });
  }

  onSubmit() {
    if (this.state.phone == '') {
      return;
    } else {
      console.log("Submit phone " + this.state.phone);
      UserRegisterData.getInstance().phoneNumber = this.state.phone;
      UserRegisterData.getInstance().log();
      this.props.navigation.navigate("ChoseGioiTinh");
    }
  }

  goUseEmail() {
    this.props.navigation.navigate("Email");
  }
  _onPressButton1() {
    alert("Back")
  }
  _onPressButton2() {
    alert("Bạn đã có tài khoản")
  }
  render() {
    return (
      <Container>
        <Appbar.Header style={{ backgroundColor: 'white' }}>
          <Appbar.BackAction icon="back" onPress={this._onPressButton3} />
          <Appbar.Content title="Nhập số điện thoại" />
        </Appbar.Header>
        <Content style={{ margin: 10 }}>
          <Text style={styles.text}>Số di động của bạn là gì ?</Text>
          <TextInput
            autoFocus={true}
            keyboardType="number-pad"
            style={styles.input}
            placeholder="Nhập số di động của bạn"
            value={this.state.phone}
            onChangeText={this.setPhone.bind(this)}
          />
          <Text style={styles.text1}
          >Bạn sẽ dùng số này khi đăng nhập và khi cần đặt lại mật khẩu</Text>
          <Button style={styles.button} onPress={this.goUseEmail.bind(this)} block primary>
            <Text>Dùng địa chỉ email của bạn</Text>
          </Button>
        </Content>
        <Footer
          onClick={this.onSubmit.bind(this)} />
      </Container>
    );

  }
}
const styles = StyleSheet.create({
  text1: {
    color: 'grey',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  input: {
    borderWidth:1,  
    borderColor:'grey',
    borderRadius:5,
    height:40,
    paddingLeft:10
  },
  text: {
    color: '#1877F2',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 150,
    textAlign: 'center',
    paddingBottom: 15,
  },
  button: {
    textAlign: 'center',
    borderWidth: 1,
    height: 35,
    borderRadius: 5
  },
  iconHeader: {
    fontSize: 20,
    color: 'black'
  },

});



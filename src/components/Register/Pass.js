
import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';
import Footer from '../Footer/Footer';
import { Container, Button, Content, Text } from 'native-base';
import UserRegisterData from '../../models/UserRegisterData';
export default class Pass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: -1
    }
  }

  setPassword(password) {
    this.setState({ password });
  }

  onSubmit() {
    if (this.state.password == -1) {
      return;
    } else {
      console.log("Submit password " + this.state.password);
      UserRegisterData.getInstance().password = this.state.password;
      UserRegisterData.getInstance().log();
      this.props.navigation.navigate("XacnhanTK");
    }
  }

  _onPressButton() {
    alert("Tiếp")
  }
  _onPressButton2() {
    alert("Bạn đã có tài khoản")
  }

  _onPressButton3() {
    alert("Back")
  }
  render() {
    return (
      <Container>
        <Appbar.Header style={{ backgroundColor: 'white' }}>
          <Appbar.BackAction icon="back" onPress={this._onPressButton3} />
          <Appbar.Content title="Mật khẩu" />
        </Appbar.Header>
        <Content style={{ margin: 10 }}>
          <Text
            style={styles.text}
          >Tạo mật khẩu ?</Text>
          <TextInput
            value={this.state.password}
            onChangeText={this.setPassword.bind(this)}
            autoFocus={true}
            style={styles.input}
            placeholder="Mật khẩu"
            secureTextEntry={true}
          />
          <Text style={styles.text1}
          >Nhập mật khẩu có tối thiểu 6 ký tự bao gồm số, chữ cái và dấu chấm câu (như! và &)</Text>
          <Button style={styles.button} onPress={this.onSubmit.bind(this)} block primary>
            <Text>Tiếp</Text>
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
  button: {
    height: 35,
    borderRadius: 5
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    height: 40
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



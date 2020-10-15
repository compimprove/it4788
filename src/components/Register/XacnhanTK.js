
import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Container, Button, Content, Text } from 'native-base';
import { Item } from 'native-base';

export default class XacnhanTK extends Component {
  constructor(props) {
    super(props);

  }

  onConfirm() {
    this.props.navigation.navigate("SaveInfo");
  }

  _onPressButton() {
    alert("Xác nhận")
  }
  _onPressButton1() {
    alert("Tôi không nhận được mã")
  }
  _onPressButton2() {
    alert("Back")
  }
  render() {
    return (
      <Container>
        <Appbar.Header style={{ backgroundColor: 'white' }}>
          <Appbar.BackAction icon="back" onPress={this._onPressButton2} />
          <Appbar.Content title="Xác nhận tài khoản" />
        </Appbar.Header>
        <Content style={{ margin: 10 }}>
          <Text style={styles.text1}> Chúng tôi đã gửi SMS kèm mã tới xxxx
              </Text>
          <Text style={styles.text0}>Nhập mã gồm 5 chữ số từ SMS của bạn</Text>
          <Item>
            <Text
              style={styles.text}>
              FB- </Text>
            <TextInput
              style={styles.input}
            />
          </Item>
          <Button style={styles.xacnhan} onPress={this.onConfirm.bind(this)} block primary>
            <Text>Xác nhận</Text>
          </Button>
          <Text></Text>
          <Button style={styles.button} onPress={this._onPressButton1} block light>
            <Text>Tôi không nhận được mã</Text>
          </Button>
          <Text onPress={this.onConfirm.bind(this)} style={styles.logout}>Đăng xuất</Text>
        </Content>
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
    paddingTop: 100,
    textAlign: 'center',
  },
  text0:
  {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 20
  },

  text: {
    fontWeight: 'bold',
    marginLeft: '35%'
  },
  logout: {
    paddingTop: 20,
    textAlign: 'center',
    color: 'grey',
  },
  button: {
    borderRadius: 5,
    borderWidth: 1,
    height: 35,
  },
  xacnhan: {
    borderRadius: 5,
    borderWidth: 1,
    height: 35
  },
  input: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'grey',
    height: 30,
    width: 70,
    borderRadius: 5
  },

});



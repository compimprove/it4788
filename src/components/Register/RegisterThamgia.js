
import React, { Component } from 'react';
import { StyleSheet, Image, } from 'react-native';
import Footer from '../Footer/Footer';
import { Appbar } from 'react-native-paper';
import { Button, Text, Content, Container } from 'native-base';
export default class RegisterThamgia extends Component {
  constructor(props) {
    super(props);
  }
  _onPressButton1() {
    alert("Bắt đầu");
  }
  _onPressButton2() {
    alert("Bạn đã có tài khoản");
  }
  _onPressButton3() {
    alert("Back");
  }
  render() {
    return (
      <Container>
        <Appbar.Header style={{ backgroundColor: 'white' }}>
          <Appbar.BackAction icon="back" onPress={() => {
            this.props.navigation.goBack()
          }} />
          <Appbar.Content title="Tạo tài khoản" />
        </Appbar.Header>
        <Content style={{ margin: 10, }}>
          <Image
            style={styles.image}
            source={require('../Login/image/face.jpg')} />
          <Text style={styles.tham_gia}> Tham gia Facebook</Text>
          <Text
            style={styles.text}>
            Chúng tôi giúp bạn tạo tài khoản sau vài bước dễ dàng
          </Text>
          <Button onPress={() => {
            this.props.navigation.navigate("RegisterHoten")
          }} block primary>
            <Text>Bắt đầu</Text>
          </Button>
        </Content>
        <Footer />
      </Container>
    );

  }
}
const styles = StyleSheet.create({
  image: {
    maxHeight: 200,
    width: '100%',
    marginBottom: 20,
    borderRadius: 5
  },
  tham_gia: {
    color: '#1877F2',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  text: {
    textAlign: 'center',
    color: 'grey',
    paddingTop: 10,
    paddingBottom: 20
  },
  iconHeader: {
    fontSize: 20,
    color: 'black'
  },
});



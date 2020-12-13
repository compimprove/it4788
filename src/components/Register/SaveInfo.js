
import React, { Component } from 'react';
import { Avatar, Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Icon, Title, Right, Body, Item, Thumbnail, Content, Footer, FooterTab, Button, Text } from 'native-base';
import UserRegisterData from '../../models/UserRegisterData';
export default class SaveInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  onOtherPressed() {
    this.register();
  }
  onSavePressed() {
    this.register();
  }

  register() {
    this.props.route.params.register(UserRegisterData.getInstance())
    setTimeout(function () {
      this.props.navigation.navigate("Login");
    }.bind(this),200);
  }


  render() {
    const uri = "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png";
    return (
      <Container>
        <Appbar.Header style={{ backgroundColor: 'white' }}>
          <Appbar.BackAction icon="back" onPress={this.props.navigation.goBack} />
          <Appbar.Content title="Lưu thông tin" />
        </Appbar.Header>
        <Content style={{
          margin: 10,
          paddingTop: '40%',
        }}>
          <Thumbnail
            style={{
              marginLeft: '45%'
            }}
            source={{ uri: uri }} />
          <Item style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Avatar.Image size={100} source={require('../Login/image/dog.jpg')} />
            <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Cỏ đắng</Text>

          </Item>
        </Content>
        <Footer >
          <FooterTab style={{backgroundColor:'#FFFFFF'}}>
            <Button onPress={this.onOtherPressed.bind(this)}>
              <Text style={{color:"#1877F2" }}>Lúc khác</Text>
            </Button>
            <Button onPress={this.onSavePressed.bind(this)}>
              <Text  style={{color:"#1877F2" }}>Lưu</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  iconHeader: {
    fontSize: 20,
    color: 'black'
  }

});




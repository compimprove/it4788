
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Avatar } from 'react-native-paper';
import { Container, Content,Form,Item,Label,Input, Button, Text } from 'native-base';
export default class Login_Pass extends Component {
  _onPressButton(){
    alert("Đăng nhập")
}
_onPressButton1(){
    alert("Quên mật khẩu")
}
    render(){ 
    
    return (
      <Container>
        
        <Content style={{margin:10}}>
        <Avatar.Image  style={{
                      marginLeft:'37%',
                      marginTop:'30%'
                  }}  size={100} source={require('../Login/image/dog.jpg')} />

                  <Text 
                  style={styles.text1}>
                      Cỏ đắng</Text>
                  <Form style={{margin:10}}>
                      <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input />
                      </Item>
                  </Form>
                  <Button style={styles.button} onPress={this._onPressButton} block primary>
                                            <Text>Đăng nhập</Text>
                  </Button>
                    <Text onPress={this._onPressButton1}
                    style={styles.text}>
                        Quên mật khẩu?</Text>
            </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  text1: {
    textAlign:'center',
    fontWeight:'bold',
    paddingTop:10
  },
  text: {
          color:"blue",
          textAlign:"center",
          fontWeight:'bold',
          
  },
    button: {
      marginTop:10,
      marginBottom:40,
      height:35,
      borderRadius:5
    }
   });

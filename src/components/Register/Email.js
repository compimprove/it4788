
import React, {Component} from 'react';
import {StyleSheet,TextInput} from 'react-native';
import {Appbar} from 'react-native-paper';
import Footer from '../Footer/Footer';
import { Container,Button, Content, Text} from 'native-base';
export default class Email extends Component{
    _onPressButton(){
        alert("Đi tới nhập số điện thoại")
    }
    _onPressButton1(){
      alert("Email")
  }
  _onPressButton2(){
    alert("Bạn đã có tài khoản")
}
_onPressButton3(){
  alert("Back")
}
    render(){      
  return(
    <Container>
      <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction icon="back" onPress={this._onPressButton3} />
      <Appbar.Content title="Email"/>
      </Appbar.Header>
        <Content style={{margin:10}}>
                    <Text 
                    style={styles.text}
                    >Email của bạn là gì ?</Text>
                    <TextInput 
                    style={styles.address}
                    placeholder="Nhập địa chỉ email của bạn"
                    />
                    <Text style={styles.text1}
                    >Bạn sẽ dùng email này khi đăng nhập và khi cần đặt lại mật khẩu</Text>
                      <Button style={styles.button} onPress={this._onPressButton} block primary>
                                  <Text>Dùng số điện thoại</Text>
                    </Button>
        </Content>
        <Footer />
</Container>
  );
}}
const styles = StyleSheet.create({
  iconHeader: {
    fontSize:20,
    color:'black'
  },
  text1: {
    color:'grey',
    textAlign:'center',
    paddingTop:15,
    paddingBottom:15
},
  address: {
    borderWidth:1,  
    borderColor:'grey',
    borderRadius:5,
    height:40
  },
  button: {
    height:35,
    borderRadius:5
},
  text: {
    color:'#1877F2',
    fontWeight:'bold',
    fontSize:20,
    paddingTop:150,
    textAlign:'center',
    paddingBottom:15,
  },

});



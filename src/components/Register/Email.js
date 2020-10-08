
import React, {Component} from 'react';
import {StyleSheet,TextInput} from 'react-native';
import { Container,Body,Icon,Title,Footer,FooterTab, Header,Button, Content, Text, Right, Left } from 'native-base';
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
    render(){      
  return(
    <Container>
      <Header>
                   <Left>
                      <Button transparent>
                      <Icon type="Ionicons" name='md-arrow-back'style={styles.iconHeader} onPress={()=>{}} />
                      </Button>
                    </Left>
                    <Body>
                      <Title>Email</Title>
                    </Body>
                    <Right />
      </Header>
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
        <Footer>
                          <FooterTab>
                            <Button full>
                              <Text onPress={this._onPressButton2}>Bạn đã có tài khoản?</Text>
                            </Button>
                          </FooterTab>
            </Footer>
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
    color:'blue',
    fontWeight:'bold',
    fontSize:20,
    paddingTop:150,
    textAlign:'center',
    paddingBottom:15,
  },

});



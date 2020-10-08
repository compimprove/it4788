
import React, {Component} from 'react';
import {StyleSheet,TextInput,Image,View} from 'react-native';
import { Container,Footer,FooterTab,Button, Content, Text} from 'native-base';

export default class Login extends Component{
    _onPressButton(){
        alert("Đăng nhập")
    }
    _onPressButton1(){
      alert("Đã có tài khoản")
  }
    render(){      
  return(
<Container>
                <Content style={{margin:10}}>
                            <Image 
                          style={styles.image}
                          source={require('./image/face.jpg')} />  
                          <View>
                          <TextInput 
                            style={styles.textinput}
                            placeholder="Nhập số điện thoại hoặc email"
                              />
                          <TextInput 
                              style={styles.textinput}
                              placeholder="Mật khẩu"
                              />
                          </View>   
                          <Button style={styles.button} onPress={this._onPressButton} block light>
                                  <Text>Đăng nhập</Text>
                          </Button>
                          <Text onPress={()=>{}}
                              style={styles.text}
                              >Quên mật khẩu ?</Text>
                          <Text onPress={()=>{}}
                              style={styles.text}
                              >Quay lại</Text>
                </Content>

               <Footer>
                          <FooterTab>
                            <Button full>
                              <Text onPress={this._onPressButton1}>Bạn đã có tài khoản?</Text>
                            </Button>
                          </FooterTab>
              </Footer>
</Container>
  );

}}
const styles = StyleSheet.create({
 image: {
  maxHeight:200,
  width:'100%',
  marginBottom:20,
  borderRadius:5
},
  text: {
    color:'blue',
    fontWeight:'bold',
    fontSize:20,
    paddingTop:15,
    textAlign:'center',
    
   
  },
  textinput: {
    borderWidth:1,  
    borderColor:'grey',
   borderRadius:5,
    marginBottom:15,
    height:40
  },
  button: {
    height:35,
    borderRadius:5,

  },

});



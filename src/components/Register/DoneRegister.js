
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import Footer from '../Footer/Footer';
import { Container,Button, Content, Text} from 'native-base';

export default class InterfaceLogin extends Component{
    _onPressButton(){
        alert("Đăng ký")
    }
    _onPressButton1(){
      alert("Back")
  }
  _onPressButton2(){
    alert("Đã có tài khoản")
}
    render(){      
  return(
    <Container>
       <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction icon="back" onPress={this._onPressButton1} />
      <Appbar.Content title="Hoàn thành đăng ký"/>
      </Appbar.Header>
      <Content style={{margin:10}}>
                      <Text 
                    style={styles.text}
                    >Hoàn tất đăng ký</Text>
                  
                    <Text style={styles.text1}
                    >Bằng cách nhấn vào Đăng ký, 
                    bạn đồng ý với <Text 
                    style={{
                        color:'blue'
                    }}>Điều khoản, 
                    chính sách dữ liệu</Text> và <Text 
                    style={{
                        color:'blue'
                    }}>Chính sách cookie </Text>
                    của chúng tôi. Bạn có thể nhận được thông báo 
                    của chúng tôi qua SMS và chọn không nhận bất cứ 
                    lúc nào</Text>
                    <Button style={styles.button} onPress={this._onPressButton} block primary>
                                  <Text>Đăng ký</Text>
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



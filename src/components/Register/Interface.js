
import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import { Container,Icon,Thumbnail, Content, Text } from 'native-base';
import { Entypo } from '@expo/vector-icons';


export default class Interface extends Component {
    _onPressButton(){
        alert("Tạo tài khoản mới")
    }
    _onPressButton1(){
      alert("Đăng nhập bằng tài khoản khác")
  }
  _onPressButton2(){
    alert("Tìm tài khoản")
}
_onPressButton3(){
  alert("Gỡ tài khoản khỏi thiết bị")
} 
_onPressButton5(){
  alert("Đi đến trang Login")
} 
_onPressButton6(){
  alert("Đi đến trang Register Tham gia")
} 
_onPressButton8(){
  alert("Đi đến trang Login_Pass")
} 
_onPressButton7(){
  alert("Cài đặt")
} 
    render(){ 

    return (
      <Container>
        
        <Content style={{margin:20}}>
        <Entypo style={{
         textAlign:'center',
         marginTop:'10%',
         color:'#1877F2',
        }} name="facebook-with-circle" size={50} color="black" />
         
        <View style={styles.image1}>
          <View style={{maxWidth:'30%'}} onPress={this._onPressButton8}>
        <Thumbnail style={{width:100, height:100}} source={require('../Login/image/dog.jpg')} />  
        <Text  onPress={this._onPressButton8} style={{textAlign:'center',paddingTop:5,fontWeight:'bold'}}>Thành Nam</Text>
       </View>
       <View style={{maxWidth:'30%'}} onPress={this._onPressButton8}>
        <Thumbnail style={{width:100, height:100}} source={require('../Login/image/dog.jpg')} />  
        <Text  onPress={this._onPressButton8} style={{textAlign:'center',paddingTop:5,fontWeight:'bold'}}>Tuệ Minh</Text>
       </View>
       <View style={{maxWidth:'30%'}} onPress={this._onPressButton8}>
        <Thumbnail style={{width:100, height:100}} source={require('../Login/image/dog.jpg')} />  
        <Text  onPress={this._onPressButton8} style={{textAlign:'center',paddingTop:5,fontWeight:'bold'}}>Tôi yêu Việt Nam</Text>
       </View>
        </View>
        <View style={{marginTop:'15%'}}>
          <Icon style={styles.text} type="Ionicons" name="md-settings" onPress={this._onPressButton7}/>
            
         
          <Text style={styles.text} onPress={this._onPressButton5}>
            Đăng nhập bằng tài khoản khác
          </Text>
          <Text style={styles.text} onPress={this._onPressButton6}>
            Đăng ký Facebook
            </Text>
          </View>
            </Content>
        
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  image1: {
              marginTop:'40%',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom:'30%',
  },
  text: {
    textAlign:'center',
    color:'#1877F2',
    paddingBottom:25
  }
})

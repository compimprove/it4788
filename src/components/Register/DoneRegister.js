
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  Button,
} from 'react-native';

import {
  Colors, 
} from 'react-native/Libraries/NewAppScreen';
import LinkList from 'react-native/Libraries/NewAppScreen/components/LearnMoreLinks';


export default class InterfaceLogin extends Component{
    _onPressButton(){
        alert("Đăng ký")
    }
    render(){      
  return(
<View style={{margin:10}}>
    <Text 
    style={styles.text}
    >Hoàn tất đăng ký</Text>
   
    <Text style={{
        color:'grey',
        textAlign:'center',
        paddingTop:15,
        paddingBottom:15
    }}
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
    <Button
style={styles.button}
onPress={this._onPressButton}
title="Đăng ký"
/>
</View>
  );

}}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  text: {
    color:'blue',
    fontWeight:'bold',
    fontSize:20,
    paddingTop:150,
    textAlign:'center',
    paddingBottom:15,
  },
  bottom: {
      textAlign:'center',
  },
  button: {
    backgroundColor:'lightblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign:'center',
    color:'white',
  },
  body: {
    backgroundColor: Colors.white,
  },
  
});



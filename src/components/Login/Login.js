
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
} from 'react-native';

import {
  Colors, 
} from 'react-native/Libraries/NewAppScreen';
import LinkList from 'react-native/Libraries/NewAppScreen/components/LearnMoreLinks';


export default class Login extends Component{
    _onPressButton(){
        alert("Đăng nhập")
    }
    render(){      
  return(
<View style={{
    margin:10,
    }}>
    
<Image 
style={{
    maxHeight:200,
    width:'100%',
    marginBottom:20
}}
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
<Button
style={styles.button}
onPress={this._onPressButton}
title="Đăng nhập"
/>
<Text 
    style={styles.text}
    >Quên mật khẩu ?</Text>
<Text 
    style={styles.text}
    >Quay lại</Text>
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
    paddingTop:15,
    textAlign:'center',
   
  },
  bottom: {
      textAlign:'center',
  },
  textinput: {
    borderWidth:1,  
    borderColor:'grey',
   
    marginBottom:15
  },
  button: {
    backgroundColor:'lightgrey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign:'center',
    color:'grey', 
  },
  body: {
    backgroundColor: Colors.white,
  },
  
});



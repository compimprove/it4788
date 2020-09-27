
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

import {
  Colors, 
} from 'react-native/Libraries/NewAppScreen';
import LinkList from 'react-native/Libraries/NewAppScreen/components/LearnMoreLinks';


export default class Register1 extends Component{
    _onPressButton(){
        alert("Bắt đầu");
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
source={require('./Login/image/face.jpg')} />  
<Text style={styles.tham_gia}> Tham gia Facebook</Text>
<Text 
      style={{
        textAlign:'center',
        color:'grey',
        paddingTop:10,
        paddingBottom:20
      }}>
        Chúng tôi giúp bạn tạo tài khoản sau vài bước dễ dàng
  </Text>
<Button
style={styles.button}
onPress={this._onPressButton}
title="Bắt đầu"
/>
<Text style={styles.bottom}>Bạn đã có tài khoản?</Text>
</View>
  );

}}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  tham_gia: {
    color:'blue',
    fontWeight:'bold',
    fontSize:20,
  
    textAlign:'center'
  },
  button: {
    backgroundColor:'lightblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign:'center',
    color:'white',
  },
  bottom: {
      textAlign:'center',
      
      paddingTop:10,
      
      color:'blue',
      fontWeight:'bold'
  },
 
  body: {
    backgroundColor: Colors.white,
  },
  
});



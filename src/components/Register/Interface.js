
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
  
} from 'react-native';
import {Icon } from 'native-base';
import {
  Colors, 
} from 'react-native/Libraries/NewAppScreen';
import LinkList from 'react-native/Libraries/NewAppScreen/components/LearnMoreLinks';


export default class Interface extends Component{
    
    render(){      
  return(
<View style={{margin:10}}>
<Icon
style={{
  height:100,
  width:100,
  flexDirection: 'column',
  alignItems:'center'
}}
 name='facebook-square' />
<Image 
style={{
    height:100,
    width:100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
   
}}
source={require('../Login/image/face.jpg')} /> 
<Icon
style={{
  height:100,
  width:100,
  flexDirection: 'column',
  alignItems:'center'
}}
 name='setting'/>
<Text>Tên facebook</Text>
<Text style={{color:'blue'}}>Đăng nhập bằng tài khoản khác</Text>
<Text style={{color:'blue'}}>Đăng ký facebook</Text>
</View>
  );

}}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  
});



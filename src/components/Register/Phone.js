
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

import {
  Colors, 
} from 'react-native/Libraries/NewAppScreen';
import LinkList from 'react-native/Libraries/NewAppScreen/components/LearnMoreLinks';


export default class Phone extends Component{
   
    render(){      
  return(
<View style={{margin:10}}>
    <Text 
    style={styles.text}
    >Số di động của bạn là gì ?</Text>
    <TextInput 
    style={{
      borderWidth:1,  
      borderColor:'grey' 
    }}
    placeholder="Nhập số di động của bạn"
    />
    <Text style={{
        color:'grey',
        textAlign:'center',
        paddingTop:15,
        paddingBottom:15
    }}
    >Bạn sẽ dùng số này khi đăng nhập và khi cần đặt lại mật khẩu</Text>
     <TextInput value='Dùng địa chỉ email của bạn'
     style=
     {{textAlign:'center',
     borderWidth:1,
     height:35
     }}/>
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
 
  body: {
    backgroundColor: Colors.white,
  },
  
});



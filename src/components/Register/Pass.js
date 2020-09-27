
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


export default class Pass extends Component{
    _onPressButton(){
        alert("Tiếp")
    }
    render(){      
  return(
<View style={{margin:10}}>
    <Text 
    style={styles.text}
    >Tạo mật khẩu ?</Text>
    <TextInput 
    style={{
      borderWidth:1,
      borderColor:'grey'  
    }}
    placeholder="Mật khẩu"
    />
    <Text style={{
        color:'grey',
        textAlign:'center',
        paddingTop:15,
        paddingBottom:15
    }}
    >Nhập mật khẩu có tối thiểu 6 ký tự bao gồm số, chữ cái và dấu chấm câu (như! và &)</Text>
     <Button
style={styles.button}
onPress={this._onPressButton}
title="Tiếp"
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
  button: {
    backgroundColor:'lightblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign:'center',
    color:'white',
  },
  bottom: {
      textAlign:'center',
  },
 
  body: {
    backgroundColor: Colors.white,
  },
  
});



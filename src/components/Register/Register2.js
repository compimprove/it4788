
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


export default class Register2 extends Component{
    
    render(){      
  return(
<ScrollView>
    <View>
        <Text style={styles.name}>Bạn tên gì?</Text>
        <View 
        style={{
            flex: 1, 
            flexDirection: 'row', 
            justifyContent: 'space-around',
            paddingTop:15,
            paddingBottom:15,
            color:'grey',
            
            }}>
        <TextInput 
        style={styles.input1}
        placeholder="Họ"
        />
        
        <TextInput style={styles.input2}
        placeholder="Tên"/>
        </View>
        <Text 
        style={{
            textAlign:'center',
            color:'grey'
        }}
        >
            Dùng tên thật giúp bạn bè dễ dàng nhận ra bạn hơn</Text>
            <Text style={styles.bottom}>Bạn đã có tài khoản?</Text>

    </View>
</ScrollView>
  );

}}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  input1: {
borderColor:'grey',
borderWidth:1,
width:150,


  },
  input2: {
      borderColor:'grey',
      borderWidth:1,
      width:150,
      
  },
  bottom: {
    textAlign:'center',
    
    paddingTop:10, 
    color:'blue',
    fontWeight:'bold'
},
  name: {
    color:'blue',
    fontWeight:'bold',
    fontSize:20,
    paddingTop:200,
    textAlign:'center'
  },
  body: {
    backgroundColor: Colors.white,
  },
  
});



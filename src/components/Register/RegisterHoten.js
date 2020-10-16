
import React, {Component} from 'react';
import {StyleSheet, View,TextInput,} from 'react-native';
import {Appbar} from 'react-native-paper';
import Footer from '../Footer/Footer';
import {Text,Content,Container} from 'native-base';
export default class RegisterHoten extends Component{  
  _onPressButton2(){
    alert("Bạn đã có tài khoản");
}
_onPressButton1(){
  alert("Back");
}
_onPressButton3(){
  alert("Back");
}
    render(){      
  return(
<Container>
<Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction icon="back" onPress={this._onPressButton3} />
      <Appbar.Content title="Họ và tên" />
     
    </Appbar.Header>
      <Content style={{margin:10,}}>
              <Text style={styles.name}>Bạn tên gì?</Text>
              <View 
              style={styles.view}>
              <TextInput 
              style={styles.input1}
              placeholder="Họ"
              /> 
              <TextInput style={styles.input2}
              placeholder="Tên"/>
              </View>
              <Text style={styles.text}>
                  Dùng tên thật giúp bạn bè dễ dàng nhận ra bạn hơn</Text>
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
  text: {
           textAlign:'center',
            color:'grey'
  },
  view: {
            flex: 1, 
            flexDirection: 'row', 
            justifyContent: 'space-around',
            paddingTop:15,
            paddingBottom:15,
            color:'grey',
  },
  input1: {
            borderColor:'grey',
            borderWidth:1,
            width:150,
            borderRadius:5,
            height:40,
            paddingLeft:10
  },
  input2: {
            borderColor:'grey',
            borderWidth:1,
            width:150,  
            borderRadius:5 ,
            height:40,
            paddingLeft:10
  },
  name: {
            color:'#1877F2',
            fontWeight:'bold',
            fontSize:20,
            paddingTop:200,
            textAlign:'center'
  },

});



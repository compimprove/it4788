import React, { useState } from "react";
import {StyleSheet,Alert} from 'react-native';
import { Avatar } from 'react-native-paper';
import { Container, Content,Form,Item,Label,Input, Button, Text } from 'native-base';
const ErrorPass = () => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Sai thông tin đăng nhập",
      "Tên người dùng hoặc mật khẩu không hợp lệ",
      [
       
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

 
const _onPress1 = () =>
    Alert.alert(
        "Quên mật khẩu",
        "Nhập gmail để lấy lại mật khẩu",
        [
            { text: "OK", onPress: () => console.log("OK Pressed") } 
        ]
    );

  return (
    <Container>
        
    <Content style={{margin:10}}>
    <Avatar.Image  style={{
                  marginLeft:'37%',
                  marginTop:'30%'
              }}  size={100} source={require('../Login/image/dog.jpg')} />

              <Text 
              style={styles.text1}>
                  Cỏ đắng</Text>
              <Form style={{margin:10}}>
                  <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input />
                  </Item>
              </Form>
              <Button style={styles.button} onPress={createTwoButtonAlert}  block primary>
                                        <Text>Đăng nhập</Text>
              </Button>
                <Text onPress={_onPress1}
                style={styles.text}>
                    Quên mật khẩu?</Text>
        </Content>
  </Container>
 );
}

const styles = StyleSheet.create({
 container: {
   marginTop:50,
   marginLeft:30,
   flexDirection:'row',
   marginBottom:10
 },

 text1: {
   textAlign:'center',
   fontWeight:'bold',
   paddingTop:10
 },
 text: {
         color:"#1877F2",
         textAlign:"center",
         fontWeight:'bold',
         
 },
   button: {
     marginTop:10,
     marginBottom:40,
     height:35,
     borderRadius:5
   }
});

export default ErrorPass;

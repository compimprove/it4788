import React from "react";
import { ActivityIndicator, StyleSheet, Text, TextInput, View,TouchableOpacity, Alert } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const Login = () => (
  <View style={styles.container}>
      
        <FontAwesome5 name="tachometer-alt" size={100} color="#dd6161" />

       <Text style={styles.text_login}>Đăng nhập tài khoản</Text> 
       <TextInput
       style={styles.input} 
       placeholder="Nhập địa chỉ email"
       ></TextInput>
       <TextInput
       style={styles.input} 
       placeholder="Nhập mật khẩu"
       ></TextInput>
       <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => {
                alert('Đến trang Đăng nhập')
            }}
       >
              <Text style={styles.loginButtonTitle}> LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.or}>
            <View style={styles.line}></View>
            <Text style={styles.text_or}>OR</Text>
            <View style={styles.line}></View>
        </View>
        <TouchableOpacity 
        style={[styles.loginButton,styles.loginButtonFacebook]}
        onPress={() => {
            alert('Đăng nhập bằng Facebook')
        }}
        >
            <EvilIcons name="sc-facebook" size={24} color="white" />
            <Text style={[styles.loginButtonTitle,styles.loginButtonFacebookTitle]}>Đăng nhập với Facebook</Text>
        </TouchableOpacity>
      

      
    
  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: "center",
        
        
      },
    text_login: {
        color:"#ffa065",
        fontSize: 25,
    },
    input: {
        height: 50,
        width: 300,
        backgroundColor: '#ffe4d2',
        marginTop: 20,
        borderRadius: 7
        


    },
    loginButton:{
        backgroundColor: "#dd6161",
        paddingTop: 10,
        paddingBottom: 10,
        width: 300,
        borderRadius: 7,
        marginTop: 20
        
        
    },
    loginButtonTitle:{
        color: 'white',
        textAlign: "center",
        fontSize: 20

    },
    or:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    line:{
        height: 1, 
        width: 125,
        backgroundColor: 'gray'
    },
    text_or:{
        fontSize: 15,
        marginRight: 10,
        marginLeft: 10,
    },
    loginButtonFacebook: {
        backgroundColor: "#3b5998",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"

    },
    loginButtonFacebookTitle:{
        fontSize: 18
    }
  
});

export default Login;
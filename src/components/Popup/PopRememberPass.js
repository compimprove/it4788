import React, { useState } from "react";
import { StyleSheet, Text, View,TouchableOpacity, ScrollView, Modal,Alert} from "react-native";
import {Button} from "native-base";
import { Entypo } from '@expo/vector-icons';

function PopRememberPass({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const _onPress1 = () => {
      Alert.alert("Nhắn tin");
    }
    const _onPress2 = () => {
      Alert.alert("Bỏ theo dõi");
    }
    const _onPress3 = () => {
      Alert.alert("Chặn");
    }
    const _onPress4 = () => {
      Alert.alert("hủy kết bạn");
    }
    const _onPress5 = () => {
      Alert.alert("Đi đến trang cá nhân");
    }
  

    return (
        <View>   
        <ScrollView>
        <View style={styles.list}>
          
                
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                        setModalVisible(true);
                      }}
                > 
                     <Text style={{fontWeight:'bold',fontSize:20}}>Đang đăng nhập...</Text>

                </TouchableOpacity>
            </View>
           
        </View>
        </ScrollView>
           <View style={{backgroundColor:'grey'}}>
        <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <View style={styles.userModal}>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                >
                    <Entypo name="chevron-thin-down" style={{marginLeft:'66%'}} size={20} color="black" />

                </TouchableOpacity>
                
                </View>
                

            </View>
            <Text style={{fontWeight:'bold',textAlign:'center',paddingBottom:20}}>Nhớ số điện thoại và mật khẩu của bạn</Text>
            <Text  style={{color:'grey',textAlign:'center',paddingBottom:10}}>Bạn cần nhập thông tin này vào lần sau đăng nhập</Text>
            
            <Text  style={{color:'grey',textAlign:'center',paddingBottom:10}}>Số điện thoại</Text>
            <Button light style={{marginLeft:'35%',width:110,height:40,marginBottom:10,backgroundColor:'#F0F2F5'}}><Text> 1234567899 </Text></Button>
          
            <Text  style={{color:'grey',textAlign:'center',paddingBottom:20}}>Mật khẩu</Text>
            <Button light style={{marginLeft:'35%',width:110,height:40,marginBottom:10,backgroundColor:'#F0F2F5'}}><Text> 987654321 </Text></Button>
      <Button primary style={{marginLeft:'42%',width:60,height:40,marginBottom:10}} onPress={() => Alert.alert('Vào trang cá nhân')}>
        <Text style={{color:'#FBFDFF',marginLeft:'29%'}}> OK </Text></Button>
     
      
            </View>
          </View>
        </Modal>
  
       
      </View>
      </View>
     </View>
    );
  };

const styles = StyleSheet.create({
    container1:{
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        justifyContent: "space-between",
        


    },
    list:{
        width: "94%",
        marginLeft: "3%"

    },
    user:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20

    },
    userModal:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10

    },
    left:{
        flexDirection: "row",
        alignItems: "center"

    },
    right:{
        marginRight: 5,
        width:300

    },
    imgUser:{
        width: 55,
        height: 55,
        borderRadius: 50
    },
    //
    centeredView: {
      flex:1,
      justifyContent:'flex-end',
      backgroundColor: 'rgba(52, 52, 52, 0.5)'
      },
      modalView: {
          
        //margin: 20,
        //marginBottom: 0,
        width: "100%",
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        //padding: 65,
        paddingTop: 10,
        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
         backgroundColor: "#F194FF",
         borderRadius: 20,
         padding: 10,
         elevation: 2
      },
      textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});

export default PopRememberPass ;
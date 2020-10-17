import React, { useState } from "react";

import { ActivityIndicator, StyleSheet, Text, View,TouchableOpacity, Image, ScrollView, Modal, ImageBackground } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
function MessengerUser({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (

        <View  >
            <View style={{padding:10, flexDirection: "row", justifyContent: "space-between", alignItems: "center",}}>
                <TouchableOpacity
                    onPress={() =>  navigation.navigate('MessengerMain')}
                    >
                <Ionicons name="ios-arrow-round-back" size={30} color="black" />

                </TouchableOpacity>
                <TouchableOpacity
                >
                <MaterialIcons name="more-vert" size={24} color="black" />


                </TouchableOpacity>

            </View>

            <View style={{justifyContent: "center", alignItems: "center",  marginTop: "20%"}}>
            <Image
                style={{width:150, height:150, borderRadius: 150, }}
                source={require('./../Images/user.jpg')}
            />
            <Text style={{fontSize: 25, paddingTop:10, fontWeight: '600' }}>Hàn Trung Kiên</Text>
            
            
            </View>

            <View style={{flexDirection: "row", justifyContent:"center"}}>
                 <TouchableOpacity 
                            style={{ marginTop:10, backgroundColor: "#d6d7db", paddingTop: 6, paddingBottom: 6, paddingLeft: 10, paddingRight: 10, borderRadius: 5}}
                
                
                onPress={() => {
                        setModalVisible(true);
                      }}>
                        <Text style={{padding: 5}}>Trang cá nhân</Text>

                </TouchableOpacity>
                <TouchableOpacity 
                            style={{ marginLeft: 10, marginTop:10, backgroundColor: "#d6d7db", paddingTop: 6, paddingBottom: 6, paddingLeft: 10, paddingRight: 10, borderRadius: 5}}
                >
                        <Text style={{padding: 5}}>Chặn</Text>

                </TouchableOpacity>

            </View>

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
                <Image
                                style={{width: "100%", height:120, position: "relative" ,borderTopLeftRadius:20, borderTopRightRadius:20}}
                             source={require('./../Images/cover.jpg')}
                                    />
            
                <View style={{ width: "100%",position:  "absolute",flexDirection: "row", justifyContent: "space-between", padding: 10, height:110, borderTopLeftRadius:20, borderTopRightRadius:20 }}>
                

                    <Text ></Text>
                    <TouchableOpacity
                
                onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                    <AntDesign name="closecircle" size={25} color="white" />

                </TouchableOpacity>
                    

                </View>
                <View style={{alignItems: "center", marginTop: -50}}>
                            <Image
                                style={{width:100, height:100, borderRadius: 150, borderColor:"white", borderWidth:3 }}
                             source={require('./../Images/user.jpg')}
                                    />
            <Text style={{fontSize: 20, paddingTop:10, fontWeight: '600' }}>Hàn Trung Kiên</Text>


                </View>
                <View style={{flexDirection: "row", justifyContent:"center"}}>
                 <TouchableOpacity 
                            style={{ marginTop:10, backgroundColor: "#1c88ff", paddingTop: 6, paddingBottom: 6, paddingLeft: 10, paddingRight: 10, borderRadius: 5}}
                
                
                >
                        <Text style={{padding: 5, color: 'white', fontWeight:'600'}}>Nhắn tin</Text>

                </TouchableOpacity>
                <TouchableOpacity 
                            style={{ marginLeft: 10, marginTop:10, backgroundColor: "#d6d7db", paddingTop: 6, paddingBottom: 6, paddingLeft: 10, paddingRight: 10, borderRadius: 5}}
                >
                        <Text style={{padding: 5}}>Xem trang cá nhân</Text>

                </TouchableOpacity>

            </View>
            <Text style={{height: 1, backgroundColor: 'gray', marginTop: 15, width: '96%', marginLeft: "2%"}}></Text>
                
                


                <View style={{padding: 15}}>
                    <Text style={{color: "gray", marginBottom: 20}}>Điểm chung</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                    <FontAwesome5 name="user-alt" size={24} color="gray" />
                    <Text style={{color: "gray", marginLeft: 20}}>25 bạn chung</Text>



                    </View>

                </View>
                
            
              
            
            
            
              
            </View>
          </View>
        </Modal>
  
        
      </View>
            
            

        
      

      

        </View>

      
    );
  }


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        //alignItems: "center",
        marginTop: 20,
        height: 600,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
        
      },
      modalView: {
          
        //margin: 20,
        //marginBottom: 0,
        width: "100%",
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        //padding: 65,
        
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

export default MessengerUser;
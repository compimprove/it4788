import React, { useState } from "react";
import { StyleSheet, Text, View,TouchableOpacity,ScrollView, Modal,Alert} from "react-native";

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {Avatar} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
function PopupImage({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
   
    const _onPress2 = () => {
      Alert.alert("Chọn ảnh");
    }
    const _onPress3 = () => {
      Alert.alert("Thêm khung");
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
                  <Avatar.Icon style={styles.camera2} size={35} icon="camera" /> 
                   
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
                    <Entypo style={{marginLeft:'66%'}} name="chevron-thin-down" size={20} color="black" />

                </TouchableOpacity>
                
                </View>
                

            </View>
            <Text style={{width: "100%", height: 1, backgroundColor: "gray"}}></Text>
           
            <View style={{flexDirection: "row", padding: 15, alignItems: "center"}}>
            <Entypo onPress={_onPress2} name="images" size={24} color="black" />
                <View>
                    <Text onPress={_onPress2} style={{fontWeight: "bold", marginLeft: 20}}>Chọn ảnh</Text>
                  

                </View>
                
            </View>
            <View style={{flexDirection: "row", padding: 15, alignItems: "center"}}>
            <AntDesign  onPress={_onPress3} name="plussquare" size={24} color="black" />
                <View>
                    <Text onPress={_onPress3} style={{fontWeight: "bold", marginLeft: 20}}>Thêm khung</Text>
                    

                </View>
                
            </View>  
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
        marginRight: 5

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
      },
      
      camera2: {
        marginLeft:'58%',
        marginRight:'27%',
        backgroundColor:'#E4E6EB',
        color:'black',
        
      },
});

export default PopupImage ;
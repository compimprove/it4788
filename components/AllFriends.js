import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View,TouchableOpacity, Image, ScrollView, Modal, TouchableHighlight } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


// const AllFriends = () => (
    
//     <View>
        

//     </View>
  
// );
function AllFriends({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <View style={styles.container1}>
            <View style={{flexDirection: "row"}}>
            <TouchableOpacity 
            
            onPress={() => navigation.navigate('Friend')}
            >
                <MaterialIcons name="keyboard-backspace" size={24} color="black" />

            </TouchableOpacity>
            <Text style={{marginLeft: 10}}> Tất cả bạn bè</Text>

            </View>
            <Text style={{marginRight: 10}}>
                <FontAwesome5  name="search" size={20} color="black" />

            </Text>


        </View>
        <Text style={{backgroundColor: "gray", height: 1}}></Text>
        <ScrollView>
        <View style={{flexDirection: "row",justifyContent: "space-between",padding: 10}}>
              <Text style={{fontWeight: "bold"}}>53 bạn bè</Text>
              <Text style={{color: "#1776f5"}}>Sắp xếp</Text>
        </View>
        <View style={styles.list}>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                        setModalVisible(true);
                      }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                            alert('Đến trang Đăng nhập')
                        }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                            alert('Đến trang Đăng nhập')
                        }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                            alert('Đến trang Đăng nhập')
                        }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                            alert('Đến trang Đăng nhập')
                        }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                            alert('Đến trang Đăng nhập')
                        }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                            alert('Đến trang Đăng nhập')
                        }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                            alert('Đến trang Đăng nhập')
                        }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                            alert('Đến trang Đăng nhập')
                        }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>

        </View>
        </ScrollView>
            
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
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <View>
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên  </Text>
                <Text style={{marginLeft: 10, fontSize: 12, color: "gray"}}>Là bạn bè kể từ tháng 1 năm 2020</Text>

                </View>

                
                

                </View>
                
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                >
                    <Entypo name="chevron-thin-down" size={20} color="black" />

                </TouchableOpacity>
                
                </View>
                

            </View>
            <Text style={{width: "100%", height: 1, backgroundColor: "gray"}}></Text>
            <View style={{flexDirection: "row", padding: 15, alignItems: "center"}}>
                <Fontisto name="messenger" size={24} color="black" />
                <Text style={{fontWeight: "bold", marginLeft: 20}}>Nhắn tin cho Kiên</Text>
            </View>
            <View style={{flexDirection: "row", padding: 15, alignItems: "center"}}>
                <SimpleLineIcons name="user-unfollow" size={24} color="black" />
                <View>
                    <Text style={{fontWeight: "bold", marginLeft: 20}}>Bỏ theo dõi Kiên</Text>
                    <Text style={{marginLeft: 20, fontSize: 12, color: "gray"}}>Không nhìn thấy bài viết của nhau nữa nhưng vẫn là bạn bè</Text>

                </View>
                
            </View>
            <View style={{flexDirection: "row", padding: 15, alignItems: "center"}}>
                <MaterialIcons name="block" size={24} color="black" />
                <View>
                    <Text style={{fontWeight: "bold", marginLeft: 20}}>Chặn Kiên</Text>
                    <Text style={{paddingRight: 20,marginLeft: 20, fontSize: 12, color: "gray"}}>Kiên sẽ không nhìn thấy bạn hoặc liên hệ với bạn trên Facebook</Text>

                </View>
                
            </View>
            <View style={{flexDirection: "row", padding: 15, alignItems: "center"}}>
                <Feather name="user-x" size={24} color="#ff6e6e" />
                <View>
                    <Text style={{fontWeight: "bold", marginLeft: 20, color: "#ff6e6e"}}>Hủy kết bạn với Kiên</Text>
                    <Text style={{paddingRight: 20,marginLeft: 20, fontSize: 12, color: "gray"}}>Kiên sẽ không nhìn thấy bạn hoặc liên hệ với bạn trên Facebook</Text>

                </View>
                
            </View>
            
            
            
              
            </View>
          </View>
        </Modal>
  
        
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

export default AllFriends ;
import React, { Component ,useState } from "react";

import { ActivityIndicator, StyleSheet, Text, View,TouchableOpacity, Image, ScrollView, Modal } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { Foundation } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

class VideoTab extends Component {
    
    state = {
        modalVisible: false,
        playVideo : true,
        iconVideo: "pause",
        muteVideo: false,
        iconMute: "unmute",
        colorLike: "black",


      };
      setColorLike =(a)=>{
          this.setState({colorLike: a})
      }
    
      setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }
      setStatusVideo=(a)=>{
          this.setState({playVideo: a})
      }
      setNameIconVideo=(a)=>{
          this.setState({iconVideo: a})
      }
      setMuteVideo = (a)=>{
          this.setState({muteVideo: a})
      }
      setNameIconMute = (a)=>{
          this.setState({iconMute: a})
      }
  

  render() {
    const { modalVisible } = this.state;
    const { navigation } = this.props;
    return (
        
        
        <View>
            <View style={styles.containerHeader}>
            <TouchableOpacity
                    onPress={() =>  navigation.navigate('Home')}
                    >
                    <MaterialIcons name="home" size={25} color="#575757" />

                </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Friend')}
                    >
                    <FontAwesome5 name="user-friends" size={25} color="#575757"  />

                    </TouchableOpacity>
                    <FontAwesome name="group" size={25} color="#575757" />
                    <TouchableOpacity
                    
                    >
                            <MaterialCommunityIcons name="television-play" size={25} color="#1776f5" />
                    </TouchableOpacity>
                    <Ionicons name="ios-notifications-outline" size={25} color="#575757" />
                    <Feather name="menu" size={25} color="#575757" />
            </View>
           
            
        <ScrollView>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10}}>
            <Text style={{fontWeight: "bold", fontSize: 20}}>Watch</Text>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                
                
                <TouchableOpacity 
                            style={{backgroundColor: "#d6d7db", paddingTop: 5, paddingBottom: 5, paddingLeft: 8, paddingRight: 8, borderRadius: 30}}
                         onPress={() => {
                             alert('Đến trang Đăng nhập')
                             }}
                >
                               <FontAwesome name="user" size={22} color="black" />
                </TouchableOpacity>
                <TouchableOpacity 
                            style={{ marginLeft: 10,backgroundColor: "#d6d7db", paddingTop: 6, paddingBottom: 6, paddingLeft: 5, paddingRight: 8, borderRadius: 30}}
                            onPress={() => navigation.navigate('SearchVideo')}
                >
                                <FontAwesome name="search" size={20} color="black" />
                </TouchableOpacity>
                
            </View> 
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                <TouchableOpacity 
                            style={{ alignItems:"center", flexDirection :"row", marginLeft: 10,backgroundColor: "#d6d7db", paddingTop: 1, paddingBottom: 1, paddingLeft: 5, paddingRight: 8, borderRadius: 30}}
                         onPress={() => {
                             alert("Phát trực tiếp")
                             
                             }}
                >
                                <AntDesign style={{paddingLeft: 5, marginRight: 5}} name="videocamera" size={18} color="black" />
                                <Text style={{fontWeight:"bold", fontSize: 12}}>Trực tiếp</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                            style={{ alignItems:"center", flexDirection :"row", marginLeft: 10,backgroundColor: "#d6d7db", paddingTop: 1, paddingBottom: 1, paddingLeft: 5, paddingRight: 8, borderRadius: 30}}
                         onPress={() => {
                             alert('Đến trang Đăng nhập')
                             }}
                >
                                <FontAwesome style={{paddingLeft: 5, marginRight: 5}} name="spoon" size={18} color="black" />
                                <Text style={{fontWeight:"bold", fontSize: 12}}>Ẩm thực</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                            style={{ marginRight: 10, alignItems:"center", flexDirection :"row", marginLeft: 10,backgroundColor: "#d6d7db", paddingTop: 1, paddingBottom: 1, paddingLeft: 5, paddingRight: 8, borderRadius: 30}}
                         onPress={() => {
                             alert('Đến trang Đăng nhập')
                             }}
                >
                                <MaterialCommunityIcons style={{paddingLeft: 5, marginRight: 5}} name="gamepad-variant-outline" size={24} color="black" />
                                <Text style={{fontWeight:"bold", fontSize: 12}}>Game</Text>
                </TouchableOpacity>
                

        </View>
        <Text style={{backgroundColor: "#d6d7db",width: "100%", height: 8, marginTop: 8}}></Text>
        <View style={styles.video}>
            <View style={styles.head}>
                <View style={{flexDirection: "row", alignItems: "center"}} >
                        <Image
                                 style={styles.imgUser}
                                source={require('./../Images/vtvgiaitri.png')}
                         />
                         <View style={{marginLeft: 5}}>
                             <View style={{flexDirection: "row"}}>
                                 <Text style={{fontWeight: "bold", fontSize: 13}}>VTV Giải trí </Text>
                                <TouchableOpacity
                                onPress={() => {
                                    alert('Theo dõi')
                                    }}>
                                    <Text style={{color: "#1776f5", fontSize: 13, marginLeft: 5}}>Theo dõi</Text>
                                </TouchableOpacity>
                             </View>
                             <Text style={{color: "gray", fontSize: 12}}>8 thg 7</Text>

                         </View>

                </View>
                <View>
                    <TouchableOpacity
                    onPress={() => {
                        this.setModalVisible(true);
                      }}>
                        <Feather name="more-horizontal" size={24} color="gray" />
                        

                    </TouchableOpacity>
                </View>
                
            </View>
            <Text style={styles.title}>Dù Tình Phôi Pha | Hà Anh Tuấn - Hồ Ngọc Hà</Text>
            <View>
                <TouchableOpacity
               onPress={() => {
                             if(this.state.playVideo==true){
                                this.setStatusVideo(false);
                                this.setNameIconVideo("play");

 
                             }else{
                                this.setStatusVideo(true);
                                this.setNameIconVideo("pause");

                             }
                             
                             }}
                >
                <Video
                    source={require('./../Images/video.mp4')}

                    rate={1.0}
                    volume={1.0}
                    isMuted={this.state.muteVideo}
                    resizeMode="cover"
                    shouldPlay={this.state.playVideo}
                    isLooping
                    style={{ width: "100%", height: 185 }}
                    
       
            />

                </TouchableOpacity>
            
            <TouchableOpacity 
                            style={styles.pauseVideo}
                         onPress={() => {
                             if(this.state.playVideo==true){
                                this.setStatusVideo(false);
                                this.setNameIconVideo("play");

 
                             }else{
                                this.setStatusVideo(true);
                                this.setNameIconVideo("pause");

                             }
                             
                             }}
                >
                    <Foundation style={{paddingLeft: 8}} name={this.state.iconVideo} size={26} color="white" />
                                
                </TouchableOpacity>
                <TouchableOpacity style={styles.muteVideo}
                onPress={() => {
                    if(this.state.muteVideo==false){
                        this.setMuteVideo(true);
                        this.setNameIconMute("mute");
                      
                       

                    }else{
                        this.setMuteVideo(false);
                        this.setNameIconMute("unmute");
                       

                    }
                    
                    }}>
                        <Octicons name={this.state.iconMute} size={24} color="white" />


                </TouchableOpacity>
            
            </View>
            
            
            
            <Text style={{backgroundColor: "#d6d7db", width: "100%", height: 1}}></Text>
            <View style={{paddingTop: 3, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     
                     <Text style={{marginLeft: 5, marginTop: 5, fontSize:11, color: "gray"}}>1.005 thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     <Text style={{marginLeft: 5, marginTop: 5, fontSize:11, color: "gray"}}>315 bình luận</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     <Text style={{marginLeft: 5, marginTop: 5, fontSize:11, color: "gray"}}>138 chia sẻ</Text>
                </TouchableOpacity>
            </View>
            <Text style={{backgroundColor: "#d6d7db", width: "100%", height: 1}}></Text>

            <View style={{ paddingTop: 5, paddingLeft: 10, paddingRight: 10, flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}
                onPress={() => {
                    if(this.state.colorLike=="black"){
                        this.setColorLike("#1776f5");
                      
                       

                    }else{
                        this.setColorLike("black");

                       

                    }
                    
                    }}>
                     <AntDesign name="like2" size={24} color={this.state.colorLike} />
                     <Text  style={{marginLeft: 5, marginTop: 5 }}>Thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                <FontAwesome name="comment-o" size={24} color="black" />
                     <Text style={{marginLeft: 5, marginTop: 5}}>Bình luận</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     <MaterialCommunityIcons name="share-outline" size={24} color="black" />
                     <Text style={{marginLeft: 5, marginTop: 5}}>Chia sẻ</Text>
                </TouchableOpacity>
            </View>

            
            

        </View>
        <Text style={{backgroundColor: "#d6d7db",width: "100%", height: 8, marginTop: 8}}></Text>
        <View style={styles.video}>
            <View style={styles.head}>
                <View style={{flexDirection: "row", alignItems: "center"}} >
                        <Image
                                 style={styles.imgUser}
                                    source={require('./../Images/vtvgiaitri.png')}
                         />
                         <View style={{marginLeft: 5}}>
                             <View style={{flexDirection: "row"}}>
                                 <Text style={{fontWeight: "bold", fontSize: 13}}>VTV Giải trí </Text>
                                <TouchableOpacity
                                onPress={() => {
                                    alert('Theo dõi')
                                    }}>
                                    <Text style={{color: "#1776f5", fontSize: 13, marginLeft: 5}}>Theo dõi</Text>
                                </TouchableOpacity>
                             </View>
                             <Text style={{color: "gray", fontSize: 12}}>8 thg 7</Text>

                         </View>

                </View>
                <View>
                    <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true);
                      }}>
                        <Feather name="more-horizontal" size={24} color="gray" />
                        

                    </TouchableOpacity>
                </View>
                
            </View>
            <Text style={styles.title}>Dù Tình Phôi Pha | Hà Anh Tuấn - Hồ Ngọc Hà</Text>
            <Video
                    source={require('./../Images/video.mp4')}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay = {false}
                    isLooping
                    style={{ width: "100%", height: 185 }}
       
            />
            <Text style={{backgroundColor: "#d6d7db", width: "100%", height: 1}}></Text>
            <View style={{paddingTop: 3, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     
                     <Text style={{marginLeft: 5, marginTop: 5, fontSize:11, color: "gray"}}>1.005 thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     <Text style={{marginLeft: 5, marginTop: 5, fontSize:11, color: "gray"}}>315 bình luận</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     <Text style={{marginLeft: 5, marginTop: 5, fontSize:11, color: "gray"}}>138 chia sẻ</Text>
                </TouchableOpacity>
            </View>
            <Text style={{backgroundColor: "#d6d7db", width: "100%", height: 1}}></Text>

            <View style={{ paddingTop: 5, paddingLeft: 10, paddingRight: 10, flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     <AntDesign name="like2" size={24} color="black" />
                     <Text style={{marginLeft: 5, marginTop: 5}}>Thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                <FontAwesome name="comment-o" size={24} color="black" />
                     <Text style={{marginLeft: 5, marginTop: 5}}>Bình luận</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     <MaterialCommunityIcons name="share-outline" size={24} color="black" />
                     <Text style={{marginLeft: 5, marginTop: 5}}>Chia sẻ</Text>
                </TouchableOpacity>
            </View>

            
            

        </View>
        <Text style={{backgroundColor: "#d6d7db",width: "100%", height: 8, marginTop: 8}}></Text>
        <View style={styles.video}>
            <View style={styles.head}>
                <View style={{flexDirection: "row", alignItems: "center"}} >
                        <Image
                                 style={styles.imgUser}
                                    source={require('./../Images/vtvgiaitri.png')}
                         />
                         <View style={{marginLeft: 5}}>
                             <View style={{flexDirection: "row"}}>
                                 <Text style={{fontWeight: "bold", fontSize: 13}}>VTV Giải trí </Text>
                                <TouchableOpacity
                                onPress={() => {
                                    alert('Theo dõi')
                                    }}>
                                    <Text style={{color: "#1776f5", fontSize: 13, marginLeft: 5}}>Theo dõi</Text>
                                </TouchableOpacity>
                             </View>
                             <Text style={{color: "gray", fontSize: 12}}>8 thg 7</Text>

                         </View>

                </View>
                <View>
                    <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true);
                      }}>
                        <Feather name="more-horizontal" size={24} color="gray" />
                        

                    </TouchableOpacity>
                </View>
                
            </View>
            <Text style={styles.title}>Dù Tình Phôi Pha | Hà Anh Tuấn - Hồ Ngọc Hà</Text>
            <Image
                    style={styles.content}
                    source={require('./../Images/vtvgiaitri.png')}
            />
            <Text style={{backgroundColor: "#d6d7db", width: "100%", height: 1}}></Text>
            <View style={{paddingTop: 3, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     
                     <Text style={{marginLeft: 5, marginTop: 5, fontSize:11, color: "gray"}}>1.005 thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     <Text style={{marginLeft: 5, marginTop: 5, fontSize:11, color: "gray"}}>315 bình luận</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     <Text style={{marginLeft: 5, marginTop: 5, fontSize:11, color: "gray"}}>138 chia sẻ</Text>
                </TouchableOpacity>
            </View>
            <Text style={{backgroundColor: "#d6d7db", width: "100%", height: 1}}></Text>

            <View style={{ paddingTop: 5, paddingLeft: 10, paddingRight: 10, flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     <AntDesign name="like2" size={24} color="black" />
                     <Text style={{marginLeft: 5, marginTop: 5}}>Thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                <FontAwesome name="comment-o" size={24} color="black" />
                     <Text style={{marginLeft: 5, marginTop: 5}}>Bình luận</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     <MaterialCommunityIcons name="share-outline" size={24} color="black" />
                     <Text style={{marginLeft: 5, marginTop: 5}}>Chia sẻ</Text>
                </TouchableOpacity>
            </View>

            
            

        </View>
        <Text style={{backgroundColor: "#d6d7db",width: "100%", height: 8, marginTop: 8}}></Text>
        <View style={styles.video}>
            <View style={styles.head}>
                <View style={{flexDirection: "row", alignItems: "center"}} >
                        <Image
                                 style={styles.imgUser}
                                    source={require('./../Images/vtvgiaitri.png')}
                         />
                         <View style={{marginLeft: 5}}>
                             <View style={{flexDirection: "row"}}>
                                 <Text style={{fontWeight: "bold", fontSize: 13}}>VTV Giải trí </Text>
                                <TouchableOpacity
                                onPress={() => {
                                    alert('Theo dõi')
                                    }}>
                                    <Text style={{color: "#1776f5", fontSize: 13, marginLeft: 5}}>Theo dõi</Text>
                                </TouchableOpacity>
                             </View>
                             <Text style={{color: "gray", fontSize: 12}}>8 thg 7</Text>

                         </View>

                </View>
                <View>
                    <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true);
                      }}>
                        <Feather name="more-horizontal" size={24} color="gray" />
                        

                    </TouchableOpacity>
                </View>
                
            </View>
            <Text style={styles.title}>Dù Tình Phôi Pha | Hà Anh Tuấn - Hồ Ngọc Hà</Text>
            <Image
                    style={styles.content}
                    source={require('./../Images/vtvgiaitri.png')}
            />
            <Text style={{backgroundColor: "#d6d7db", width: "100%", height: 1}}></Text>
            <View style={{paddingTop: 3, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     
                     <Text style={{marginLeft: 5, marginTop: 5, fontSize:11, color: "gray"}}>1.005 thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     <Text style={{marginLeft: 5, marginTop: 5, fontSize:11, color: "gray"}}>315 bình luận</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     <Text style={{marginLeft: 5, marginTop: 5, fontSize:11, color: "gray"}}>138 chia sẻ</Text>
                </TouchableOpacity>
            </View>
            <Text style={{backgroundColor: "#d6d7db", width: "100%", height: 1}}></Text>

            <View style={{ paddingTop: 5, paddingLeft: 10, paddingRight: 10, flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     <AntDesign name="like2" size={24} color="black" />
                     <Text style={{marginLeft: 5, marginTop: 5}}>Thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                <FontAwesome name="comment-o" size={24} color="black" />
                     <Text style={{marginLeft: 5, marginTop: 5}}>Bình luận</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: "row",alignItems: "center"}}>
                     <MaterialCommunityIcons name="share-outline" size={24} color="black" />
                     <Text style={{marginLeft: 5, marginTop: 5}}>Chia sẻ</Text>
                </TouchableOpacity>
            </View>

            
            

        </View>
        <Text style={{backgroundColor: "#d6d7db",width: "100%", height: 8, marginTop: 8}}></Text>
        <Text style={{height:200}}></Text>

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
              
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                        this.setModalVisible(!modalVisible);
                      }}
                >
                    <Entypo name="chevron-thin-down" size={20} color="black" />

                </TouchableOpacity>
               

            </View>
            
            
            <View style={{flexDirection: "row", padding: 10, alignItems: "center"}}>
                <AntDesign name="save" size={26} color="black" />
                <View>
                    <Text style={{ marginLeft: 20}}>Lưu video</Text>
                    <Text style={{marginLeft: 20, fontSize: 12, color: "gray"}}>Thêm vào danh sách video đã lưu</Text>

                </View>
                
            </View>
            <View style={{flexDirection: "row", padding: 10, alignItems: "center"}}>
                <AntDesign name="closesquareo" size={24} color="black" />
                <View>
                    <Text style={{ marginLeft: 20}}>Ẩn bài viết</Text>
                    <Text style={{marginLeft: 20, fontSize: 12, color: "gray"}}>Ẩn bớt các bài viết tương tự</Text>

                </View>
                
            </View>
            <View style={{flexDirection: "row", padding: 10, alignItems: "center"}}>
             <Entypo name="squared-cross" size={26} color="black" />     
                <View>
                    <Text style={{ marginLeft: 20}}>Ẩn tất cả từ VTV Giải trí</Text>
                    <Text style={{marginLeft: 20, fontSize: 12, color: "gray"}}>Không xem bài viết của Trang này nữa</Text>

                </View>
                
            </View>
            <View style={{flexDirection: "row", padding: 10, alignItems: "center"}}>
            <Octicons name="report" size={24} color="black" />   
                <View>
                    <Text style={{ marginLeft: 20}}>Tìm hỗ trợ hoặc báo cáo video</Text>
                    <Text style={{marginLeft: 20, fontSize: 12, color: "gray"}}>Tôi lo ngại về bài viết này </Text>

                </View>
                
            </View>
            <View style={{flexDirection: "row", padding: 10, alignItems: "center"}}>
                <MaterialIcons name="add-to-queue" size={26} color="black" />
                <View>
                    <Text style={{ marginLeft: 20}}>Theo dõi VTV Giải trí</Text>
                    <Text style={{marginLeft: 20, fontSize: 12, color: "gray"}}>Xem video và bài viết từ VTV Giải trí</Text>

                </View>
                
            </View>
            <View style={{flexDirection: "row", padding: 10, alignItems: "center"}}>
            <MaterialCommunityIcons name="link-variant" size={24} color="black" />
                <View>
                    <Text style={{ marginLeft: 20}}>Sao chép liên kết</Text>

                </View>
                
            </View>
            <View style={{flexDirection: "row", padding: 10, alignItems: "center"}}>
            <FontAwesome name="bug" size={24} color="black" />
                <View>
                    <Text style={{ marginLeft: 20}}>Đã xảy ra lỗi   </Text>

                </View>
                
            </View>
            
            
            
            
              
            </View>
          </View>
        </Modal>
  
        
      </View>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
    video:{


    },
    head:{
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    imgUser:{
        width: 50,
        height: 50,
        borderRadius: 50

    },
    title:{
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        fontSize: 13
    },
    content:{
        width: "100%",
        height: 300
        

    },
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
      },
      userModal:{
       
        justifyContent: "space-between",
        alignItems: "center",

    },
    left:{
        flexDirection: "row",
        alignItems: "center"

    },
    right:{
        marginRight: 5

    },
    containerHeader:{
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 7,
        paddingBottom: 7,
        borderBottomColor: "gray",
        borderBottomWidth: 1,


    },
    pauseVideo:{
        position: "absolute",
        marginTop: 155,

    },
    muteVideo:{
        position: "absolute",
        marginLeft: "91%",
        marginTop: "48%"


    },
  
});

export default VideoTab;
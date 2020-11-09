import React, { useState } from "react";

import { ActivityIndicator, StyleSheet, Text, View,TouchableOpacity, Image, ScrollView, Modal, ImageBackground } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
function MessengerMain({navigation}) {

    return (

        <View  >
            <View style={{flexDirection: "row", justifyContent: "space-between", paddingTop: 5, paddingLeft: 10, paddingRight: 10}}>
                <View style={{ flexDirection: "row", alignItems: "center"}}>
                    <TouchableOpacity style={{paddingRight: 10}}
                    onPress={() =>  navigation.navigate('Home')}
                    >
                            <Ionicons name="md-arrow-back" size={24} color="black" />


                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() =>  navigation.navigate('MessengerMe')}

                    >
                             <Image
                                    style={{width:35, height:35, borderRadius: 150, }}
                                source={require('./../Images/user.jpg')}
                                />

                    </TouchableOpacity>
                             
                                <Text style={{marginLeft: 10, fontWeight: "bold", fontSize :20}}>Chat</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center"}}>
                    <TouchableOpacity style={{backgroundColor: "#e2e2e2", padding: 7, borderRadius: 20, marginRight: 10}}>
                    <Entypo name="camera" size={24} color="black" />

                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: "#e2e2e2", paddingTop: 7, paddingLeft: 8, paddingRight: 8, paddingBottom: 7, borderRadius: 20}}>
                    <FontAwesome name="pencil" size={24} color="black" />

                    </TouchableOpacity>
                </View>

            </View>
            <Text style={{height: 1, backgroundColor: '#e2e2e2', marginTop: 10, }}></Text>
            
            <ScrollView>
                <Text height="20"></Text>

            <View style={{padding: 10}}>
            <TouchableOpacity
                    onPress={() =>  navigation.navigate('Messening')}
                    >
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            
                            <Image
                                    style={{width:65, height:65, borderRadius: 150, }}
                                source={require('./../Images/user.jpg')}
                                />

                            

                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 15, padding: 5}}>Nguyen Tien Thanh</Text>
                                <Text style={{paddingLeft: 5, fontSize: 13, color: "gray"}}>Dạ được thầy ạ...</Text>
                            </View>



                        </View>
                        </TouchableOpacity>


            </View>
            <View style={{padding: 10}}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Image
                                    style={{width:65, height:65, borderRadius: 150, }}
                                source={require('./../Images/user.jpg')}
                                />

                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 15, padding: 5}}>Nguyen Tien Thanh</Text>
                                <Text style={{paddingLeft: 5, fontSize: 13, color: "gray"}}>Dạ được thầy ạ...</Text>
                            </View>


                        </View>

            </View>
            <View style={{padding: 10}}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Image
                                    style={{width:65, height:65, borderRadius: 150, }}
                                source={require('./../Images/user.jpg')}
                                />

                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 15, padding: 5}}>Nguyen Tien Thanh</Text>
                                <Text style={{paddingLeft: 5, fontSize: 13, color: "gray"}}>Dạ được thầy ạ...</Text>
                            </View>


                        </View>

            </View>
            <View style={{padding: 10}}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Image
                                    style={{width:65, height:65, borderRadius: 150, }}
                                source={require('./../Images/user.jpg')}
                                />

                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 15, padding: 5}}>Nguyen Tien Thanh</Text>
                                <Text style={{paddingLeft: 5, fontSize: 13, color: "gray"}}>Dạ được thầy ạ...</Text>
                            </View>


                        </View>

            </View>
            <View style={{padding: 10}}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Image
                                    style={{width:65, height:65, borderRadius: 150, }}
                                source={require('./../Images/user.jpg')}
                                />

                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 15, padding: 5}}>Nguyen Tien Thanh</Text>
                                <Text style={{paddingLeft: 5, fontSize: 13, color: "gray"}}>Dạ được thầy ạ...</Text>
                            </View>


                        </View>

            </View>
            <View style={{padding: 10}}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Image
                                    style={{width:65, height:65, borderRadius: 150, }}
                                source={require('./../Images/user.jpg')}
                                />

                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 15, padding: 5}}>Nguyen Tien Thanh</Text>
                                <Text style={{paddingLeft: 5, fontSize: 13, color: "gray"}}>Dạ được thầy ạ...</Text>
                            </View>


                        </View>

            </View>
            <View style={{padding: 10}}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Image
                                    style={{width:65, height:65, borderRadius: 150, }}
                                source={require('./../Images/user.jpg')}
                                />

                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 15, padding: 5}}>Nguyen Tien Thanh</Text>
                                <Text style={{paddingLeft: 5, fontSize: 13, color: "gray"}}>Dạ được thầy ạ...</Text>
                            </View>


                        </View>

            </View>
            <View style={{padding: 10}}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Image
                                    style={{width:65, height:65, borderRadius: 150, }}
                                source={require('./../Images/user.jpg')}
                                />

                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 15, padding: 5}}>Nguyen Tien Thanh</Text>
                                <Text style={{paddingLeft: 5, fontSize: 13, color: "gray"}}>Dạ được thầy ạ...</Text>
                            </View>


                        </View>

            </View>
            <View style={{padding: 10}}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Image
                                    style={{width:65, height:65, borderRadius: 150, }}
                                source={require('./../Images/user.jpg')}
                                />

                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 15, padding: 5}}>Nguyen Tien Thanh</Text>
                                <Text style={{paddingLeft: 5, fontSize: 13, color: "gray"}}>Dạ được thầy ạ...</Text>
                            </View>


                        </View>

            </View>
            <View style={{padding: 10}}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Image
                                    style={{width:65, height:65, borderRadius: 150, }}
                                source={require('./../Images/user.jpg')}
                                />

                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 15, padding: 5}}>Nguyen Tien Thanh</Text>
                                <Text style={{paddingLeft: 5, fontSize: 13, color: "gray"}}>Dạ được thầy ạ...</Text>
                            </View>


                        </View>

            </View>
            <View style={{padding: 10}}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Image
                                    style={{width:65, height:65, borderRadius: 150, }}
                                source={require('./../Images/user.jpg')}
                                />

                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 15, padding: 5}}>Nguyen Tien Thanh</Text>
                                <Text style={{paddingLeft: 5, fontSize: 13, color: "gray"}}>Dạ được thầy ạ...</Text>
                            </View>


                        </View>

            </View>
            <View style={{padding: 10}}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Image
                                    style={{width:65, height:65, borderRadius: 150, }}
                                source={require('./../Images/user.jpg')}
                                />

                            <View>
                                <Text style={{fontWeight: "bold", fontSize: 15, padding: 5}}>Nguyen Tien Thanh</Text>
                                <Text style={{paddingLeft: 5, fontSize: 13, color: "gray"}}>Dạ được thầy ạ...</Text>
                            </View>


                        </View>

            </View>
            </ScrollView>

            

            
            
            

        
      

      

        </View>

      
    );
  }


const styles = StyleSheet.create({
   
        
     
       
    
  
});

export default MessengerMain;
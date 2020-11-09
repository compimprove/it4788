import React from "react";
import { ActivityIndicator, StyleSheet, Text, View,TouchableOpacity, Image, ScrollView } from "react-native";



import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

function Home({navigation}) {
    return (
        <View>
            <View style={styles.containerHeader}>
                <TouchableOpacity
                    onPress={() =>  navigation.navigate('Home')}
                    >
                    <MaterialIcons name="home" size={25} color="#1776f5" />

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>  navigation.navigate('Friend')}
                    >
                <FontAwesome5 name="user-friends" size={25} color="#575757"  />

                    
                </TouchableOpacity>
                    <FontAwesome name="group" size={25} color="#575757" />
                    <TouchableOpacity
                    onPress={() =>  navigation.navigate('Video')}
                    >
                            <MaterialCommunityIcons name="television-play" size={25} color="#575757" />
                    </TouchableOpacity>
                    <Ionicons name="ios-notifications-outline" size={25} color="#575757" />
                    <Feather name="menu" size={25} color="#575757" />
            </View>
            <View style={{ marginTop: "50%"}} >
            <View style={{justifyContent: "center", alignItems: "center"}}>
                     <Text style={{padding: 20}}>Chào mừng bạn đến với Facebook</Text>
                     <TouchableOpacity
                    onPress={() =>  navigation.navigate('MessengerMain')}
                    >
                     <FontAwesome5 name="facebook-messenger" size={50} color="#1886ff" />

                     </TouchableOpacity>

            </View>
            
         
      

      

        </View>
        </View>
        
  
      
    );
  }

const styles = StyleSheet.create({
    containerHeader:{
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 7,
        paddingBottom: 7,
        borderBottomColor: "gray",
        borderBottomWidth: 1


    }
   


  
});

export default Home;
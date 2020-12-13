import React, {useState} from "react";

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  ImageBackground
} from "react-native";
import {Entypo} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';

function Messengering({navigation}) {

  return (
    <View>
      <View style={{
        marginTop: 35,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#0079ff"/>
        </TouchableOpacity>
        <AntDesign name="infocirlce" size={24} color="#0079ff"/>
      </View>
      <Text style={{height: 1, backgroundColor: '#0079ff'}}>

      </Text>

      <ScrollView>


        <View style={{justifyContent: "center", alignItems: "center", marginTop: 5}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MessengerUser')}
          >
            <Image
              style={{width: 120, height: 120, borderRadius: 150, marginTop: 20}}
              source={require('./../Images/user.jpg')}
            />

          </TouchableOpacity>

          <Text style={{fontSize: 25, paddingTop: 10, fontWeight: '600'}}>Hàn Trung Kiên</Text>
          <Text style={{padding: 10}}>
            Các bạn là bạn bè trên Facebook
          </Text>
          <Text style={{color: '#b5b5b5'}}>
            Đã học tại Đại học Bách Khoa Hà Nội

          </Text>
          <Text style={{color: '#b5b5b5'}}>
            Sống tại Thanh Hóa
          </Text>


        </View>
      </ScrollView>


    </View>


  );
}


const styles = StyleSheet.create({});

export default Messengering;
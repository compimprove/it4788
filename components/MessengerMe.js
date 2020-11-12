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
import {MaterialIcons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {Fontisto} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function MessengerMe({navigation}) {

  return (

    <View>
      <View style={{
        marginTop: 35,
        flexDirection: "row",
        alignItems: "center",
        padding: 10
      }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MessengerMain')}

        >
          <MaterialIcons style={{marginLeft: 5}} name="keyboard-backspace" size={26} color="black"/>

        </TouchableOpacity>
        <Text style={{marginLeft: 10, fontSize: 17}}> Tôi</Text>

      </View>
      <Text style={{height: 1, backgroundColor: '#e2e2e2',}}></Text>
      <ScrollView>

        <View style={{justifyContent: "center", alignItems: "center", marginTop: 5}}>
          <Image
            style={{width: 150, height: 150, borderRadius: 150,}}
            source={require('./../Images/user.jpg')}
          />
          <Text style={{fontSize: 25, paddingTop: 10, fontWeight: '600'}}>Hàn Trung Kiên</Text>


        </View>
        <View style={{padding: 10}}>
          <View
            style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <View style={{flexDirection: "row", alignItems: "center", marginTop: 5}}>
              <TouchableOpacity style={{backgroundColor: 'black', borderRadius: 15}}>
                <Entypo style={{borderWidth: 1, borderColor: "black", borderRadius: 15, padding: 2}}
                        name="moon" size={24} color="white"/>

              </TouchableOpacity>

              <Text style={{marginLeft: 10, fontSize: 16}}>Chế độ tối</Text>
            </View>
            <View style={{marginTop: 5}}>
              <Fontisto name="checkbox-passive" size={20} color="gray"/>

            </View>
          </View>
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20
          }}>
            <View style={{flexDirection: "row", alignItems: "center", marginTop: 5}}>
              <TouchableOpacity style={{backgroundColor: 'cyan', borderRadius: 17, padding: 5}}>
                <AntDesign name="message1" size={24} color="white"/>
              </TouchableOpacity>

              <Text style={{marginLeft: 10, fontSize: 16}}>Tin nhắn đang chờ</Text>
            </View>

          </View>
          <Text style={{height: 1, backgroundColor: '#e2e2e2', marginTop: 10}}></Text>
          <Text style={{color: "gray", padding: 10}}>Trang cá nhân</Text>
          <View
            style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center",}}>
            <View style={{flexDirection: "row", alignItems: "center", marginTop: 5}}>
              <TouchableOpacity style={{backgroundColor: '#51ff4a', borderRadius: 17, padding: 5}}>
                <AntDesign name="smile-circle" size={24} color="white"/>
              </TouchableOpacity>
              <View>
                <Text style={{marginLeft: 10, fontSize: 16}}>Trạng thái hoạt động</Text>
                <Text style={{marginLeft: 10, fontSize: 13, color: "gray"}}>Bật</Text>

              </View>


            </View>

          </View>
          <View
            style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center",}}>
            <View style={{flexDirection: "row", alignItems: "center", marginTop: 15}}>
              <TouchableOpacity style={{
                backgroundColor: '#ff292c',
                borderRadius: 17,
                paddingTop: 1,
                paddingBottom: 1,
                paddingLeft: 5,
                paddingRight: 5
              }}>
                <Text style={{fontSize: 25, color: "white"}}>@</Text>
              </TouchableOpacity>
              <View>
                <Text style={{marginLeft: 10, fontSize: 16}}>Tên người dùng</Text>
                <Text style={{marginLeft: 10, fontSize: 13, color: "gray"}}>hantrungkien98</Text>

              </View>


            </View>

          </View>
          <Text style={{height: 1, backgroundColor: '#e2e2e2', marginTop: 10}}></Text>
          <Text style={{color: "gray", padding: 10}}>Tùy chọn</Text>
          <View
            style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <View style={{flexDirection: "row", alignItems: "center", marginTop: 5}}>
              <TouchableOpacity style={{
                backgroundColor: 'cyan',
                borderRadius: 18,
                padding: 5,
                paddingBottom: 7,
                paddingLeft: 6,
                paddingRight: 6
              }}>
                <Entypo name="warning" size={22} color="white"/>
              </TouchableOpacity>

              <Text style={{marginLeft: 10, fontSize: 16}}>Quyền riêng tư</Text>
            </View>

          </View>


        </View>
        <Text style={{height: 50}}></Text>


      </ScrollView>


    </View>


  );
}


const styles = StyleSheet.create({});

export default MessengerMe;
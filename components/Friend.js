import React from "react";
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";



import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import AppHeaderBar from "../src/components/MainPage/AppHeaderBar";
const width100 = "100%";

function Friend({ navigation }) {
  return (
    <View>
      <AppHeaderBar navigation={navigation} />
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Bạn bè</Text>
          <TouchableOpacity
            style={{ backgroundColor: "#d6d7db", paddingTop: 5, paddingBottom: 5, paddingLeft: 8, paddingRight: 8, borderRadius: 30 }}
            onPress={() => {alert('Đến trang Đăng nhập')}}>
            <FontAwesome name="search" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", paddingBottom: 10 }}>

          <TouchableOpacity
            style={{ marginLeft: 10, backgroundColor: "#d6d7db", paddingTop: 7, paddingBottom: 7, paddingLeft: 10, paddingRight: 10, borderRadius: 30 }}
            onPress={() => navigation.navigate('Suggestion')}
          >
            <Text style={{ fontWeight: "bold", }}>Gợi ý</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 10, backgroundColor: "#d6d7db", paddingTop: 7, paddingBottom: 7, paddingLeft: 10, paddingRight: 10, borderRadius: 30 }}
            onPress={() => navigation.navigate('AllFriend')}
          >
            <Text style={{ fontWeight: "bold" }}>Tất cả bạn bè</Text>

          </TouchableOpacity>
        </View>
        <Text style={styles.line}></Text>
        <View style={styles.list}>


          <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Lời mời kết bạn <Text style={{ color: "red" }}>42</Text></Text>
            <Text style={{ color: "#1776f5" }}>Xem tất cả</Text>
          </View>
          <View style={styles.user}>
            <Image
              style={styles.imgUser}
              source={require('./../Images/user.jpg')}
            />

            <View style={styles.box}>
              <View style={styles.name}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>Hàn Trung Kiên</Text>
                <Text style={{ color: "gray" }}>2 năm</Text>
              </View>
              <View style={styles.btn}>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnAcept]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ color: "white", textAlign: "center", padding: 7, fontWeight: "bold" }}> Chấp nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnDelete]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ textAlign: "center", padding: 7, fontWeight: "bold" }}> Xóa</Text>
                </TouchableOpacity>

              </View>
            </View>

          </View>
          <View style={styles.user}>
            <Image
              style={styles.imgUser}
              source={require('./../Images/user.jpg')}
            />

            <View style={styles.box}>
              <View style={styles.name}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>Hàn Trung Kiên</Text>
                <Text style={{ color: "gray" }}>2 năm</Text>
              </View>
              <View style={styles.btn}>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnAcept]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ color: "white", textAlign: "center", padding: 7, fontWeight: "bold" }}> Chấp nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnDelete]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ textAlign: "center", padding: 7, fontWeight: "bold" }}> Xóa</Text>
                </TouchableOpacity>

              </View>
            </View>

          </View>
          <View style={styles.user}>
            <Image
              style={styles.imgUser}
              source={require('./../Images/user.jpg')}
            />

            <View style={styles.box}>
              <View style={styles.name}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>Hàn Trung Kiên</Text>
                <Text style={{ color: "gray" }}>2 năm</Text>
              </View>
              <View style={styles.btn}>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnAcept]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ color: "white", textAlign: "center", padding: 7, fontWeight: "bold" }}> Chấp nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnDelete]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ textAlign: "center", padding: 7, fontWeight: "bold" }}> Xóa</Text>
                </TouchableOpacity>

              </View>
            </View>

          </View>
          <View style={styles.user}>
            <Image
              style={styles.imgUser}
              source={require('./../Images/user.jpg')}
            />

            <View style={styles.box}>
              <View style={styles.name}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>Hàn Trung Kiên</Text>
                <Text style={{ color: "gray" }}>2 năm</Text>
              </View>
              <View style={styles.btn}>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnAcept]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ color: "white", textAlign: "center", padding: 7, fontWeight: "bold" }}> Chấp nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnDelete]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ textAlign: "center", padding: 7, fontWeight: "bold" }}> Xóa</Text>
                </TouchableOpacity>

              </View>
            </View>

          </View>
          <View style={styles.user}>
            <Image
              style={styles.imgUser}
              source={require('./../Images/user.jpg')}
            />

            <View style={styles.box}>
              <View style={styles.name}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>Hàn Trung Kiên</Text>
                <Text style={{ color: "gray" }}>2 năm</Text>
              </View>
              <View style={styles.btn}>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnAcept]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ color: "white", textAlign: "center", padding: 7, fontWeight: "bold" }}> Chấp nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnDelete]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ textAlign: "center", padding: 7, fontWeight: "bold" }}> Xóa</Text>
                </TouchableOpacity>

              </View>
            </View>

          </View>
          <View style={styles.user}>
            <Image
              style={styles.imgUser}
              source={require('./../Images/user.jpg')}
            />

            <View style={styles.box}>
              <View style={styles.name}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>Hàn Trung Kiên</Text>
                <Text style={{ color: "gray" }}>2 năm</Text>
              </View>
              <View style={styles.btn}>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnAcept]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ color: "white", textAlign: "center", padding: 7, fontWeight: "bold" }}> Chấp nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnDelete]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ textAlign: "center", padding: 7, fontWeight: "bold" }}> Xóa</Text>
                </TouchableOpacity>

              </View>
            </View>

          </View>
          <View style={styles.user}>
            <Image
              style={styles.imgUser}
              source={require('./../Images/user.jpg')}
            />

            <View style={styles.box}>
              <View style={styles.name}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>Hàn Trung Kiên</Text>
                <Text style={{ color: "gray" }}>2 năm</Text>
              </View>
              <View style={styles.btn}>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnAcept]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập');
                  }}
                >
                  <Text style={{ color: "white", textAlign: "center", padding: 7, fontWeight: "bold" }}> Chấp nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnDelete]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ textAlign: "center", padding: 7, fontWeight: "bold" }}> Xóa</Text>
                </TouchableOpacity>

              </View>
            </View>

          </View>
          <View style={styles.user}>
            <Image
              style={styles.imgUser}
              source={require('./../Images/user.jpg')}
            />

            <View style={styles.box}>
              <View style={styles.name}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>Hàn Trung Kiên</Text>
                <Text style={{ color: "gray" }}>2 năm</Text>
              </View>
              <View style={styles.btn}>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnAcept]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ color: "white", textAlign: "center", padding: 7, fontWeight: "bold" }}> Chấp nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnDelete]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ textAlign: "center", padding: 7, fontWeight: "bold" }}> Xóa</Text>
                </TouchableOpacity>

              </View>
            </View>

          </View>
          <View style={styles.user}>
            <Image
              style={styles.imgUser}
              source={require('./../Images/user.jpg')}
            />

            <View style={styles.box}>
              <View style={styles.name}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>Hàn Trung Kiên</Text>
                <Text style={{ color: "gray" }}>2 năm</Text>
              </View>
              <View style={styles.btn}>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnAcept]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ color: "white", textAlign: "center", padding: 7, fontWeight: "bold" }}> Chấp nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnDelete]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ textAlign: "center", padding: 7, fontWeight: "bold" }}> Xóa</Text>
                </TouchableOpacity>

              </View>
            </View>

          </View>
          <View style={styles.user}>
            <Image
              style={styles.imgUser}
              source={require('./../Images/user.jpg')}
            />

            <View style={styles.box}>
              <View style={styles.name}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>Hàn Trung Kiên</Text>
                <Text style={{ color: "gray" }}>2 năm</Text>
              </View>
              <View style={styles.btn}>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnAcept]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ color: "white", textAlign: "center", padding: 7, fontWeight: "bold" }}> Chấp nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.singleButton, styles.btnDelete]}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}
                >
                  <Text style={{ textAlign: "center", padding: 7, fontWeight: "bold" }}> Xóa</Text>
                </TouchableOpacity>

              </View>
            </View>

          </View>

        </View>
      </ScrollView>


    </View>


  );
}


const styles = StyleSheet.create({
  line: {
    backgroundColor: "gray",
    height: 1,
    width: "96%",
    marginLeft: "2%"
  },
  list: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  user: {
    flexDirection: "row",
    marginBottom: 15


  },
  imgUser: {
    width: 70,
    height: 70,
    borderRadius: 50

  },
  box: {
    width: "72%",
    //backgroundColor: "red",
    marginLeft: 10,

  },
  name: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  singleButton: {
    width: "48%",
    backgroundColor: "green",
    borderRadius: 5,


  },
  btnAcept: {
    backgroundColor: "#1776f5",


  },
  btnDelete: {
    backgroundColor: "#d6d7db"

  },
  containerHeader: {
    width: width100,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 7,
    paddingBottom: 7,
    borderBottomColor: "gray",
    borderBottomWidth: 1


  }

});

export default Friend;

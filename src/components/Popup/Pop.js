import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Modal, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Avatar, Appbar } from 'react-native-paper';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Icon } from 'native-base';
function Pop({ navigation }) {
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
              style={{ padding: 20, paddingRight: 0 }}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Icon type="Entypo" name="dots-three-horizontal"></Icon>

            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
      <View style={{ backgroundColor: 'grey' }}>
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
                    <Avatar.Image size={70} source={require('../Login/image/dog.jpg')} onPress={_onPress5} />
                    <View>
                      <Text onPress={_onPress5} style={{ fontWeight: "bold", marginLeft: 10 }}>Trà Nguyễn </Text>
                      <Text onPress={_onPress5} style={{ marginLeft: 10, fontSize: 12, color: "gray" }}>Là bạn bè kể từ tháng 1 năm 2020</Text>
                    </View>
                  </View>

                  <View style={styles.right}>
                    <TouchableOpacity
                      style={{ padding: 20, paddingRight: 10 }}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Entypo name="chevron-thin-down" size={20} color="black" />

                    </TouchableOpacity>

                  </View>


                </View>
                <Text style={{ width: "100%", height: 1, backgroundColor: "gray" }}></Text>
                <View style={{ flexDirection: "row", padding: 15, alignItems: "center" }}>
                  <Fontisto onPress={_onPress1} name="messenger" size={24} color="black" />
                  <Text onPress={_onPress1} style={{ fontWeight: "bold", marginLeft: 20 }}>Nhắn tin cho Trà</Text>
                </View>
                <View style={{ flexDirection: "row", padding: 15, alignItems: "center" }}>
                  <SimpleLineIcons onPress={_onPress2} name="user-unfollow" size={24} color="black" />
                  <View>
                    <Text onPress={_onPress2} style={{ fontWeight: "bold", marginLeft: 20 }}>Bỏ theo dõi Trà</Text>
                    <Text onPress={_onPress2} style={{ marginLeft: 20, fontSize: 12, color: "gray" }}>Không nhìn thấy bài viết của nhau nữa nhưng vẫn là bạn bè</Text>

                  </View>

                </View>
                <View style={{ flexDirection: "row", padding: 15, alignItems: "center" }}>
                  <MaterialIcons onPress={_onPress3} name="block" size={24} color="black" />
                  <View>
                    <Text onPress={_onPress3} style={{ fontWeight: "bold", marginLeft: 20 }}>Chặn Trà</Text>
                    <Text onPress={_onPress3} style={{ paddingRight: 20, marginLeft: 20, fontSize: 12, color: "gray" }}>Kiên sẽ không nhìn thấy bạn hoặc liên hệ với bạn trên Facebook</Text>

                  </View>

                </View>
                <View style={{ flexDirection: "row", padding: 15, alignItems: "center" }}>
                  <Feather onPress={_onPress4} name="user-x" size={24} color="#ff6e6e" />
                  <View>
                    <Text onPress={_onPress4} style={{ fontWeight: "bold", marginLeft: 20, color: "#ff6e6e" }}>Hủy kết bạn với Trà</Text>
                    <Text onPress={_onPress4} style={{ paddingRight: 20, marginLeft: 20, fontSize: 12, color: "gray" }}>Kiên sẽ không nhìn thấy bạn hoặc liên hệ với bạn trên Facebook</Text>

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
  container1: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    justifyContent: "space-between",



  },
  list: {
    width: "94%",
    marginLeft: "3%"

  },
  user: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20

  },
  userModal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10

  },
  left: {
    flexDirection: "row",
    alignItems: "center"

  },
  right: {
    marginRight: 5

  },
  imgUser: {
    width: 55,
    height: 55,
    borderRadius: 50
  },
  //
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
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

export default Pop;
import React, {Component} from "react";
import {ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from "react-native";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MaterialIcons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppHeaderBar from "../src/components/MainPage/AppHeaderBar";
import {Snackbar} from "react-native-paper";
import axios from "axios";
import Utility from "../Utility";
import {timeToString} from "../src/components/Helper";

const config = require("../config.json");

const width100 = "100%";

class Friend extends Component {
  constructor(props) {
    super(props);
    this.getToken = this.props.route.params.getToken;
    this.state = {
      index: 0,
      requested: []
    }
  }

  navigate(route) {
    setTimeout(() => this.props.navigation.navigate(route), 200);
  }

  componentDidMount() {
    axios.get(config.host + "/it4895/get_requested_friends", {
      params: {
        token: this.getToken(),
        count: 10,
        index: this.state.index
      }
    }).then(function (response) {
      console.log(response.data.data)
      let data = response.data.data;
      if (Utility.isSuccessResponse(response)) {
        this.setState({
          requested: data.requested
        })
      } else {
      }
    }.bind(this))
  }

  setAcceptFriend(id) {
    axios.post(config.host + "/it4895/set_request_friend", null,{
      params: {
        token: this.getToken(),
        user_id: id,
        is_accept: 1
      }
    }).then(function (response) {
      if (Utility.isSuccessResponse(response)) {
        let requested = this.state.requested.filter(e => e.id !== id);
        this.setState({requested});
      } else {
        console.log(response.data)
      }
    }.bind(this))
  }

  render() {
    const deleteFriends = function (id) {

    }

    return (
        <View>
          <AppHeaderBar navigation={this.props.navigation}/>
          <ScrollView>
            <View style={{flexDirection: "row", justifyContent: "space-between", padding: 10}}>
              <Text style={{fontSize: 25, fontWeight: "bold"}}>Bạn bè</Text>
              <TouchableOpacity
                  style={{
                    backgroundColor: "#d6d7db",
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 8,
                    paddingRight: 8,
                    borderRadius: 30
                  }}
                  onPress={() => {
                    alert('Đến trang Đăng nhập')
                  }}>
                <FontAwesome name="search" size={20} color="black"/>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", paddingBottom: 10}}>

              <TouchableOpacity
                  style={{
                    marginLeft: 10,
                    backgroundColor: "#d6d7db",
                    paddingTop: 7,
                    paddingBottom: 7,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 30
                  }}
                  onPress={() => this.navigate('Suggestion')}
              >
                <Text style={{fontWeight: "bold",}}>Gợi ý</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={{
                    marginLeft: 10,
                    backgroundColor: "#d6d7db",
                    paddingTop: 7,
                    paddingBottom: 7,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 30
                  }}
                  onPress={() => this.navigate('AllFriend')}
              >
                <Text style={{fontWeight: "bold"}}>Tất cả bạn bè</Text>

              </TouchableOpacity>
            </View>
            <Text style={styles.line}></Text>
            <View style={styles.list}>


              <View style={{flexDirection: "row", justifyContent: "space-between", padding: 10}}>
                <Text style={{fontWeight: "bold"}}>Lời mời kết bạn <Text
                    style={{color: "red"}}>{this.state.requested.length}</Text></Text>
                {this.state.requested.length === 10 && <Text style={{color: "#1776f5"}}>Xem tất cả</Text>}
              </View>
              {this.state.requested.map((friend, index) =>
                  <View key={index} style={styles.user}>
                    <Image
                        style={styles.imgUser}
                        source={{uri: friend.avatar}}
                    />

                    <View style={styles.box}>
                      <View style={styles.name}>
                        <Text style={{fontWeight: "bold", fontSize: 17}}>{friend.username}</Text>
                        <Text
                            style={{color: "gray"}}>{timeToString(new Date(Number.parseInt(friend.created) * 1000))}</Text>
                      </View>
                      <View style={styles.btn}>
                        <TouchableOpacity
                            style={[styles.singleButton, styles.btnAcept]}
                            onPress={() => {
                              setTimeout(() => {
                                this.setAcceptFriend(friend.id)
                              }, 1900)
                            }}
                        >
                          <Text style={{color: "white", textAlign: "center", padding: 7, fontWeight: "bold"}}> Chấp
                            nhận</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.singleButton, styles.btnDelete]}
                            onPress={() => {
                              setTimeout(() => {
                                deleteFriends(index)
                              }, 200)
                            }}
                        >
                          <Text style={{textAlign: "center", padding: 7, fontWeight: "bold"}}> Xóa</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                  </View>)}

            </View>
          </ScrollView>
          {/*<Snackbar*/}
          {/*    style={styles.snack}*/}
          {/*    onDismiss={() => setVisible(false)}*/}
          {/*    visible={visible}*/}
          {/*    duration={800}>*/}
          {/*  Đồng ý kết bạn*/}
          {/*</Snackbar>*/}

        </View>


    );
  }
}


const styles = StyleSheet.create({
  snack: {
    backgroundColor: "#60d460",
  },
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

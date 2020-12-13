import React, {Component} from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableHighlight
} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import axios from "axios";
import Utility from "../Utility";

const config = require("../config.json");

class SuggestionFriend extends Component {
  constructor(props) {
    super(props);
    this.getToken = this.props.route.params.getToken;
    this.state = {
      index: 0,
      suggested: []
    }
  }

  componentDidMount() {
    axios.get(config.host + "/it4895/user/get_list_suggested_friends", {
      params: {
        token: this.getToken(),
        count: 20,
        index: this.state.index
      }
    }).then(function (response) {
      console.log(response.data.data)
      let data = response.data.data;
      if (Utility.isSuccessResponse(response)) {
        this.setState({
          suggested: data.list_users
        })
      } else {

      }
    }.bind(this))
  }

  deleteFriends(id) {
    delete this.state.suggested[id];
    this.setState({});
  }

  render() {
    return (
        <View>
          <View style={styles.container1}>
            <View style={{flexDirection: "row"}}>
              <TouchableOpacity
                  onPress={() => setTimeout(this.props.navigation.goBack, 200)}
              >
                <MaterialIcons name="keyboard-backspace" size={24} color="black"/>

              </TouchableOpacity>
              <Text style={{marginLeft: 10}}> Gợi ý</Text>

            </View>
            <TouchableHighlight>
              <Text style={{marginRight: 10}}>
                <FontAwesome5 name="search" size={20} color="black"/>
              </Text>
            </TouchableHighlight>


          </View>
          <Text style={{backgroundColor: "gray", height: 1}}></Text>
          <ScrollView>
            <View style={{flexDirection: "row", justifyContent: "space-between", padding: 10}}>
              <Text style={{fontWeight: "bold"}}>Những người bạn có thể biết</Text>
            </View>
            <View style={styles.list}>
              {this.state.suggested.map((user, id) =>
                  <View key={id} style={styles.user}>
                    <Image
                        style={styles.imgUser}
                        source={{uri: user.avatar}}
                    />
                    <View style={styles.box}>
                      <View style={styles.name}>
                        <Text style={{fontWeight: "bold", fontSize: 15}}>{user.username}</Text>
                      </View>
                      <View style={styles.btn}>
                        <TouchableOpacity
                            style={[styles.singleButton, styles.btnAcept]}
                            onPress={() => {
                              alert('Đến trang Đăng nhập')
                            }}
                        >
                          <Text style={{
                            fontSize: 13,
                            color: "white",
                            textAlign: "center",
                            padding: 8,
                            fontWeight: "bold"
                          }}> Thêm bạn bè</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.singleButton, styles.btnDelete]}
                            onPress={() => {
                              this.deleteFriends(id)
                            }}
                        >
                          <Text style={{fontSize: 13, textAlign: "center", padding: 8, fontWeight: "bold"}}> Gỡ</Text>
                        </TouchableOpacity>

                      </View>
                    </View>

                  </View>)}

            </View>
          </ScrollView>
        </View>

    );
  }
}


const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    justifyContent: "space-between",


  },
  user: {
    flexDirection: "row",
    marginBottom: 15,
    marginLeft: 10


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

    backgroundColor: "green",
    borderRadius: 5,


  },
  btnAcept: {
    backgroundColor: "#1776f5",
    width: "55%",


  },
  btnDelete: {
    backgroundColor: "#d6d7db",
    width: "43%",


  }

});

export default SuggestionFriend;
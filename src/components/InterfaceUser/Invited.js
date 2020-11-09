import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Avatar, Appbar } from 'react-native-paper';
import { Container, Item, List, ListItem, Thumbnail, Text, Button, Header, Icon, Content } from 'native-base';
import SearchBar from './SearchBar';
import AppHeaderBar from '../MainPage/AppHeaderBar';

export default class Invited extends Component {
  _onPressButton1() {
    alert("Home")
  }
  _onPressButton2() {
    alert("Bạn bè")
  }
  _onPressButton3() {
    alert("Nhóm")
  }
  _onPressButton4() {
    alert("Video")
  }
  _onPressButton5() {
    alert("Thông báo")
  }
  _onPressButton6() {
    alert("Menu")
  }
  _onPressButton7() {
    alert("Thay đổi ảnh bìa")
  }
  _onPressButton8() {
    alert("Thay đổi ảnh đại diện")
  }
  _onPressButton9() {
    alert("Chuyển thành đã gửi lời mời kết bạn")
  }
  _onPressButton10() {
    alert("Back")
  }
  _onPressButton11() {
    alert("Chuyển sang giao diện Setting Friend")
  }
  render() {

    return (
      <Container>
        <AppHeaderBar navigation={this.props.navigation} />
        <Content style={{ margin: 10 }}>
          <Image style={styles.image1}
            source={require('../image/h6.jpg')} onPress={() => { }} />
          <Avatar.Image style={styles.avatar} size={200} source={require('../image/h5.jpg')} onPress={() => { }} />
          <Text style={styles.text0}>Nhất Cử</Text>
          <Item style={styles.item}>
            <Button style={styles.button1} onPress={this._onPressButton9} >
              <Text><FontAwesome5 name="user-check" size={24} /> Trả lời</Text>
            </Button>
            <Button light style={styles.button2} onPress={() => { }}>
              <FontAwesome5 name="facebook-messenger" size={24} color="black" />
            </Button>
            <Button light style={styles.button3} onPress={() => { this.props.navigation.navigate("SettingFriend") }} >
              <Icon type="Entypo" style={{ color: "black", fontSize: 20 }} name='dots-three-horizontal' />
            </Button>
          </Item>
          <Text style={styles.text}><Icon style={styles.iconInf} type="FontAwesome" name='address-book' />   Hà Nội</Text>
          <Text style={{ paddingBottom: 10 }}><Icon style={styles.iconInf} type="FontAwesome" name='home' />   Sống tại <Text style={styles.text}>Hà Nội</Text></Text>
          <Text style={{ paddingBottom: 10 }}><Icon style={styles.iconInf} type="FontAwesome" name='map-marker' />   Đến từ <Text style={styles.text}>Đà Nẵng</Text></Text>
          <Text style={{ paddingBottom: 10 }}><Icon style={styles.iconInf} type="SimpleLineIcons" name='user-following' />   Có <Text style={styles.text}>91 người</Text> theo dõi</Text>
          <Text><Icon type="Entypo" style={styles.iconInf} name='dots-three-horizontal' />   Xem thông tin giới thiệu của bạn</Text>
          <Button block info style={styles.edit} onPress={() => { }}>
            <Text style={{ color: 'blue' }}>Chỉnh sửa chi tiết công khai</Text>
          </Button>
          <Item style={{ paddingTop: 20, fontWeight: 'bold' }}></Item>

        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  findFri: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 10
  },
  iconInf: {
    color: "grey",
    fontSize: 20
  },
  appbarBelow: {
    elevation: 0,
    backgroundColor: '#ffffff',
    marginTop: '0.7%',
    left: 0,
    right: 0,
    justifyContent: 'space-between',

  },
  icon1: {
    color: 'grey',
    fontSize: 20
  },
  friend: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  button_status: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 30,

  },
  manage: {
    marginTop: 10,
    borderRadius: 5,
    height: 40,
    backgroundColor: 'lightgrey',

  },
  icon2: {
    fontSize: 20,
    color: 'black'
  },
  text3: {
    fontSize: 13
  },
  icon1: {
    color: 'white',
    fontSize: 20
  },
  item: {
    paddingBottom: 20,
    marginBottom: 10
  },
  posts: {
    fontWeight: 'bold',
    color: 'black'
  },
  boloc: {
    color: 'blue',

  },
  moreview: {
    height: 30,
    borderRadius: 5,
    marginTop: 40,
    backgroundColor: 'lightgrey'
  },
  view1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',

  },

  view2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  list1: {
    paddingTop: 10,

  },
  camera1: {
    marginTop: '50%',
    position: 'absolute',
    marginLeft: '80%',
    marginRight: '5%',
    backgroundColor: 'white',
    color: 'black'
  },
  camera2: {
    marginTop: '74%',
    position: 'absolute',
    marginLeft: '62%',
    marginRight: '27%',
    backgroundColor: 'white',
    color: 'black'
  },
  avatar: {
    marginTop: '30%',
    marginLeft: '24%',
    marginRight: '23%',
    position: 'absolute',

  },

  image1: {
    maxHeight: '35%',
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
    position: 'relative',
    borderRadius: 20
  },
  text0: {
    paddingTop: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 10,
    fontSize: 30
  },
  button1: {
    width: '60%',
    borderRadius: 5,
    backgroundColor: '#1876F2',
    paddingLeft: '13%'
  },
  button2: {
    marginLeft: '5%',
    width: '15%',
    borderRadius: 5,
    paddingLeft: 15
  },
  button3: {
    marginLeft: '5%',
    width: '15%',
    borderRadius: 5,

  },
  text: {
    fontWeight: 'bold',
    paddingBottom: 10

  },
  list: {
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  view0: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  edit: {
    marginTop: 10,
    height: 30,
    borderRadius: 5,
    backgroundColor: 'lightblue',

  },
  text1: {
    color: 'lightblue',

  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  }
});
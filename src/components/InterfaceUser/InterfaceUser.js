import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

import { Avatar, Appbar } from 'react-native-paper';
import PopupCamera from './PopupCamera';
import { Container, Item, List, ListItem, Thumbnail, Text, Button, Header, Icon, Content } from 'native-base';
import PopupImage from './PopupImage';




export default class InterfaceUser extends Component {
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
  render() {

    return (
      <Container>
        <Header style={{ backgroundColor: 'white' }}>
          <Appbar style={styles.appbarBelow}>
            <Appbar.Action icon="home" size={33} onPress={this._onPressButton1} />
            <Appbar.Action icon="youtube-tv" size={33} onPress={this._onPressButton2} />
            <Appbar.Action icon="account-multiple" size={33} onPress={this._onPressButton3} />
            <Appbar.Action icon="account-group" size={33} onPress={this._onPressButton4} />
            <Appbar.Action icon="bell-outline" size={33} onPress={this._onPressButton5} />
            <Appbar.Action icon="menu" size={33} onPress={this._onPressButton6} />
          </Appbar>
        </Header>
        <Content style={{ margin: 10 }}>
          <Image style={styles.image1}
            source={require('../image/h4.jpg')} onPress={() => { }} />
          <PopupCamera />
          <Avatar.Image style={styles.avatar} size={200} source={require('../Login/image/dog.jpg')} onPress={() => { }} />
          <PopupImage />

          <Text
            style={styles.text0}
          >Cỏ đắng
                  </Text>
          <Item style={styles.item}>
            <Button style={styles.button1} onPress={() => { }} >
              <Text style={{ marginLeft: '20%' }}><Icon style={{ color: 'white' }} type="Ionicons" name='ios-add-circle-outline' />  Thêm vào tin</Text>
            </Button>
            <Button light style={styles.button2} onPress={() => { }}>
              <Icon style={{ marginLeft: '30%' }} type="Entypo" style={{ color: "grey", fontSize: 20 }} name='dots-three-horizontal' />
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

          <View style=
            {styles.findFri}
          >
            <Text style={styles.friend}>Bạn bè</Text>
            <Text onPress={() => { }} style={styles.boloc}>Tìm bạn bè</Text>
          </View>
          <Text>1000 người bạn</Text>
          <List style={styles.list}>
            <ListItem thumbnail>
              <View style={styles.view0}>
                <View style={{ maxWidth: '33%' }}>
                  <Thumbnail style={styles.image} square source={require('../image/h4.jpg')} onPress={() => { }} />
                  <Text style={{ textAlign: 'center', paddingTop: 5, fontWeight: 'bold' }}>Anna</Text>
                </View>
                <View style={{ maxWidth: '33%' }}>
                  <Thumbnail style={styles.image} square source={require('../image/h2.jpg')} onPress={() => { }} />
                  <Text style={{ textAlign: 'center', paddingTop: 5, fontWeight: 'bold' }}>An Nhiên</Text>
                </View>
                <View style={{ maxWidth: '33%' }}>
                  <Thumbnail style={styles.image} square source={require('../Login/image/dog.jpg')} onPress={() => { }} />
                  <Text style={{ textAlign: 'center', paddingTop: 5, fontWeight: 'bold' }}>Nhất cử</Text>
                </View>
              </View>
            </ListItem>
          </List>
          <List style={styles.list1}>
            <ListItem thumbnail>
              <View style={styles.view1}>
                <View style={{ maxWidth: '33%' }}>
                  <Thumbnail style={styles.image} square source={require('../image/h2.jpg')} onPress={() => { }} />
                  <Text style={{ textAlign: 'center', paddingTop: 5, fontWeight: 'bold' }}>Việt Nam</Text>
                </View>
                <View style={{ maxWidth: '33%' }}>
                  <Thumbnail style={styles.image} square source={require('../image/h5.jpg')} onPress={() => { }} />
                  <Text style={{ textAlign: 'center', paddingTop: 5, fontWeight: 'bold' }}>Hoa dã quỳ</Text>
                </View>
                <View style={{ maxWidth: '33%' }}>
                  <Thumbnail style={styles.image} square source={require('../image/h6.jpg')} onPress={() => { }} />
                  <Text style={{ textAlign: 'center', paddingTop: 5, fontWeight: 'bold' }}>Tuệ Minh</Text>
                </View>
              </View>
            </ListItem>
          </List>
          <Button style={styles.moreview} block light onPress={() => { }}>
            <Text>Xem tất cả bạn bè</Text>
          </Button>
          <Item style={{ paddingTop: 20 }}></Item>
          <View style={styles.write}>
            <View style={styles.findFri}>
              <Text style={styles.posts}>Bài viết</Text>
              <Text style={styles.boloc}>Bộ lọc</Text>
            </View>
            <Item style={styles.item} onPress={() => { }}>
              <Avatar.Image style={styles.avatar1} size={60} source={require('../Login/image/dog.jpg')} />
              <Text style={{ color: 'grey' }}>  Bạn đang suy nghĩ gì ?</Text>
            </Item>
            <Item style={{ paddingBottom: 10 }}>

              <Button vertical style={{ backgroundColor: '#FFFFFF', marginRight: 10 }}>
                <Icon type="FontAwesome" style={{ color: 'purple' }} name="edit" />
                <Text style={{ color: 'black' }}>Tình trạng</Text>
              </Button>
              <Button vertical style={{ backgroundColor: '#FFFFFF', marginRight: 10 }}>
                <Icon style={{ color: 'green' }} type="Entypo" name="images" />
                <Text style={{ color: 'black' }}>Ảnh</Text>
              </Button>
              <Button vertical style={{ backgroundColor: '#FFFFFF' }}>
                <Icon type="MaterialIcons" name="event" style={{ color: 'purple' }} />
                <Text style={{ color: 'black' }}>Sự kiện trong đời</Text>
              </Button>
            </Item>
            <Button style={styles.manage} block onPress={() => { }}>
              <Text style={{ color: 'black' }}><Icon style={styles.icon2} type="MaterialIcons" name='message' /> Quản lý bài viết</Text>
              <Button style={{ border: 5, backgroundColor: 'grey' }} />
            </Button>
          </View>
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

  avatar: {
    marginTop: '30%',
    marginLeft: '24%',
    marginRight: '23%',
    position: 'absolute',

  },

  image1: {
    maxHeight: '35%',
    width: '100%',
    marginTop: 20,
    position: 'relative',
    borderRadius: 20
  },
  text0: {

    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 10,
    fontSize: 30
  },
  button1: {
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#1876F2'
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
  button2: {
    marginLeft: '5%',
    width: '15%',
    borderRadius: 5
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
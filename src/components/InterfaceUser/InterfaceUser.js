import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

import {Avatar,Appbar} from 'react-native-paper';
import { Container,Item,List, ListItem,FooterTab,Title, Thumbnail, Text,Button,Left, Right, Header,Body,Icon,Content} from 'native-base';

export default class InterfaceUser extends Component {
  _onPressButton1(){
    alert("Home")
}
_onPressButton2(){
  alert("Bạn bè")
}
_onPressButton3(){
  alert("Nhóm")
}
_onPressButton4(){
  alert("Video")
}
_onPressButton5(){
  alert("Thông báo")
}
_onPressButton6(){
  alert("Menu")
}
    render() {
      const uria="data:image/png;base64,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";  
    return (
      <Container>
        <Header style={{ backgroundColor:'white'}}>
        <Appbar style={styles.appbarBelow}>
        <Appbar.Action icon="home" size={29} onPress={this._onPressButton1}/>
        <Appbar.Action icon="youtube-tv" size={29} onPress={this._onPressButton2}/>
        <Appbar.Action icon="account-multiple" size={29} onPress={this._onPressButton3}/>
        <Appbar.Action icon="account-group" size={29} onPress={this._onPressButton4}/>
        <Appbar.Action icon="bell-outline" size={29} onPress={this._onPressButton5}/>
        <Appbar.Action icon="menu" size={29} onPress={this._onPressButton6}/>
        </Appbar>
        </Header>
       <Content style={{margin:10}}>
                  <Image style={styles.image1}
                            source={require('../Login/image/face.jpg')} onPress={() => {}} />
                            <Avatar.Icon style={styles.camera1} size={50} icon="camera" onPress={() => {}} />
                  <Avatar.Image style={styles.avatar} size={200} source={require('../Login/image/dog.jpg')} onPress={() => {}} />
                  <Avatar.Icon style={styles.camera2} size={35} icon="camera" onPress={() => {}} />  
                  <Text 
                    style={styles.text0}
                    >Cỏ đắng
                  </Text>
                  <Item style={styles.item}>
                    <Button style={styles.button1} onPress={() => {}} >
                        <Text style={{marginLeft:'20%'}}><Icon style={{color:'white'}} type="Ionicons" name='ios-add-circle-outline' />  Thêm vào tin</Text>
                    </Button>
                    <Button light style={styles.button2} onPress={() => {}}>
                        <Icon style={{marginLeft:'30%'}} type="Entypo" style={{color:"grey",fontSize:20}} name='dots-three-horizontal' />
                    </Button>
                  </Item>
                  <Text style={styles.text}><Icon style={{color:"grey",fontSize:20}} type="FontAwesome" name='address-book' />   Hà Nội</Text>
                  <Text style={{paddingBottom:10}}><Icon style={{color:"grey",fontSize:20}} type="FontAwesome" name='home' />   Sống tại <Text style={styles.text}>Hà Nội</Text></Text>
                  <Text style={{paddingBottom:10}}><Icon style={{color:"grey",fontSize:20}} type="FontAwesome" name='map-marker' />   Đến từ <Text style={styles.text}>Đà Nẵng</Text></Text>
                  <Text style={{paddingBottom:10}}><Icon style={{color:"grey",fontSize:20}} type="SimpleLineIcons" name='user-following' />   Có <Text style={styles.text}>91 người</Text> theo dõi</Text>
                  <Text><Icon type="Entypo" style={{color:"grey",fontSize:20}} name='dots-three-horizontal' />   Xem thông tin giới thiệu của bạn</Text>
                  <Button block info style={styles.edit} onPress={() => {}}>
                        <Text style={{color:'blue'}}>Chỉnh sửa chi tiết công khai</Text>
                  </Button>
                  <Item style={{paddingTop:20,fontWeight:'bold'}}></Item>
                 
                  <View style=
                  {{
                    flexDirection:"row",
                    justifyContent: 'space-between',
                  paddingTop:20,
                  paddingBottom:10
                }}
                  >
                              <Text style={styles.friend}>Bạn bè</Text>
                              <Text onPress={() => {}} style={styles.boloc}>Tìm bạn bè</Text>
                  </View>
                  <Text>1000 người bạn</Text>
                      <List style={styles.list}>
                        <ListItem thumbnail>
                              <View style={styles.view0}>
                                <View style={{maxWidth:'33%'}}>
                                <Thumbnail style={styles.image} square source={{ uri: uria }} onPress={() => {}}/>
                                <Text style={{textAlign:'center',paddingTop:5,fontWeight:'bold'}}>Tôi yêu Việt Nam</Text>
                                </View>   
                                <View style={{maxWidth:'33%'}}>
                                <Thumbnail style={styles.image} square source={{ uri: uria }} onPress={() => {}}/>
                                <Text style={{textAlign:'center',paddingTop:5,fontWeight:'bold'}}>Tôi yêu Việt Nam</Text>
                                </View>  
                                <View style={{maxWidth:'33%'}}>
                                <Thumbnail style={styles.image} square source={{ uri: uria }} onPress={() => {}}/>
                                <Text style={{textAlign:'center',paddingTop:5,fontWeight:'bold'}}>Tôi yêu Việt Nam</Text>
                                </View>  
                              </View>
                        </ListItem>
                      </List>
                      <List style={styles.list1}>
                        <ListItem thumbnail>
                              <View style={styles.view1}>
                              <View style={{maxWidth:'33%'}}>
                                <Thumbnail style={styles.image} square source={{ uri: uria }} onPress={() => {}}/>
                                <Text style={{textAlign:'center',paddingTop:5,fontWeight:'bold'}}>Tôi yêu Việt Nam</Text>
                                </View>   
                                <View style={{maxWidth:'33%'}}>
                                <Thumbnail style={styles.image} square source={{ uri: uria }} onPress={() => {}}/>
                                <Text style={{textAlign:'center',paddingTop:5,fontWeight:'bold'}}>Tôi yêu Việt Nam</Text>
                                </View>  
                                <View style={{maxWidth:'33%'}}>
                                <Thumbnail style={styles.image} square source={{ uri: uria }} onPress={() => {}}/>
                                <Text style={{textAlign:'center',paddingTop:5,fontWeight:'bold'}}>Tôi yêu Việt Nam</Text>
                                </View>
                              </View>
                        </ListItem>
                      </List>
                      <Button style={styles.moreview} block light onPress={() => {}}>
                          <Text>Xem tất cả bạn bè</Text>
                      </Button>
                      <Item style={{paddingTop:20}}></Item>
                      <View style={styles.write}>
                            <View style={{
                              flexDirection:'row',
                              justifyContent: 'space-between',
                              paddingTop:20,
                              paddingBottom:10
                          }}>
                              <Text style={styles.posts}>Bài viết</Text>
                              <Text style={styles.boloc}>Bộ lọc</Text>
                            </View>
                            <Item style={styles.item} onPress={() => {}}>
                                 <Avatar.Image style={styles.avatar1} size={60} source={require('../Login/image/dog.jpg')} />
                                 <Text style={{color:'grey'}}>  Bạn đang suy nghĩ gì ?</Text>
                            </Item>
                            <Item style={{paddingBottom:10}}>
                            <FooterTab>
                                           <Button vertical>
                                                  <Icon type="FontAwesome" style={{color:'purple'}} name="edit" />
                                                  <Text style={{color:'black'}}>Tình trạng</Text>
                                          </Button>
                                          <Button vertical>
                                                  <Icon style={{color:'green'}} type="Entypo" name="images" />
                                                  <Text style={{color:'black'}}>Ảnh</Text>
                                         </Button>
                                        <Button vertical>
                                                  <Icon type="MaterialIcons" name="event" style={{color:'purple'}} />
                                                  <Text style={{color:'black'}}>Sự kiện trong đời</Text>
                                         </Button>
                            </FooterTab>
                            
                            </Item>
                            <Button style={styles.manage} block onPress={() => {}}>
                            <Text style={{color:'black'}}><Icon style={styles.icon2} type="MaterialIcons" name='message'/> Quản lý bài viết</Text>
                            <Button style={{border:5,backgroundColor:'grey'}}/>
                      </Button>
                      </View>
          </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  appbarBelow:{
    elevation: 0,
    backgroundColor: '#ffffff',
    marginTop:'0.7%',
    left: 0,
    right: 0,
    justifyContent: 'space-between',
  
  },
  icon1: {
    color:'grey',
    fontSize:20
  },
  friend: {
    color:'black',
    fontSize:20,
    fontWeight:'bold'
  },
  button_status: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height:30,
   
  },
  manage: {
    marginTop:10,
    borderRadius:5,
    height:35,
    backgroundColor:'lightgrey',
    
  },
  icon2: {
    fontSize:20,
    color: 'black'
  },
  text3:{
    fontSize:13
  },
  icon1: {
    color:'white',
    fontSize:20
  },
  item: {
    paddingBottom:20,
    marginBottom:10
  },
  posts: {
    fontWeight:'bold',
    color:'black'
  },
  boloc: {
    color:'blue',
   
  },
  moreview: {
    height:30,
    borderRadius:5,
    marginTop:40,
    backgroundColor:'lightgrey'
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
    paddingTop:10,
    
 },
 camera1: {
  marginTop:190,
  position: 'absolute',
  marginLeft:'80%',
  marginRight:'5%',
  backgroundColor:'white',
  color:'black'
},
camera2: {
  marginTop:300,
  position: 'absolute',
  marginLeft:'62%',
  marginRight:'29%',
  backgroundColor:'white',
  color:'black'
},
  avatar: {
    marginTop:130,
    marginLeft:'20%',
    marginRight:'24%',
    position: 'absolute',
   
  },
  
  image1: {
    maxHeight:230,
    width:'100%',
    marginBottom:20,
    marginTop:20,
    position: 'relative',
},
text0: {
      paddingTop:60,
      textAlign:'center',
      fontWeight:'bold',
      paddingBottom:10,
      fontSize:30
},
  button1: {
    width:'80%', 
    borderRadius:5
  },
  text: {
    fontWeight:'bold',
    paddingBottom:10
    
  },
  list: {
      paddingTop:10,
      flexDirection: 'column',
      justifyContent: 'space-around',
},
  button2: {
    marginLeft:'5%',
    width:'15%',
    borderRadius:5
  },
  view0: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  edit: {
    marginTop:10,
    height:30,
    borderRadius:5,
    backgroundColor:'lightblue',
   
  },
  text1: {
    color:'lightblue',
    
  },
  image: {
    width:100, 
     height:100,
     borderRadius:10
  }
 });
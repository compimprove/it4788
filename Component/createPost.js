import React from 'react';
import {Body, Button, Container, Header, Left, Right, Title} from 'native-base';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';

const emoijMap = require("../config.json").emoijMap;


export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      contentFontSize: 25
    }
    this.getContent = this.getContent.bind(this);
    this.setContent = this.setContent.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  createPost() {
    this.props.route.params.createPost(this.state.content)
    this.setState({content: ""});
    this.props.navigation.goBack();
  }

  setContent(content) {
    console.log("set content: ", content);
    for (let key in emoijMap) {
      content = content.replace(key, emoijMap[key]);
    }
    this.setState({content});
  }

  navigate(route) {
    setTimeout(() => {
      this.props.navigation.navigate(route)
    }, 300);
  }

  getContent() {
    console.log("getContent: ", this.state.content);
    return this.state.content;
  }

  render() {
    return (
        <>
          <Header>
            <Left>
              <Button onPress={() => {
                setTimeout(() => {
                  this.props.navigation.goBack();
                }, 300)
              }}>
                <Ionicons name="md-arrow-back" size={24} color="white"/>
              </Button>
            </Left>
            <Body>
              <Title>Tạo bài viết</Title>
            </Body>
            <Right>
              <TouchableOpacity style={styles.createBtn} onPress={this.createPost}>
                <MaterialCommunityIcons name="post-outline" size={40} color="white"/>
              </TouchableOpacity>
            </Right>
          </Header>
          <Container style={{marginTop: 10, marginLeft: 15, marginRight: 15}}>
            <View style={styles.postHeader}>
              <Image
                  style={styles.useImage}
                  source={{uri: 'https://picsum.photos/700'}}
              />
              <View style={styles.userInfo}>
                <Text style={{
                  marginLeft: 5,
                  fontWeight: "bold",
                  fontSize: 24
                }}>{this.props.userName}</Text>
                <View style={{flexDirection: 'row'}}>
                  <MaterialIcons name="public" size={20} color="black"/>
                  <Text style={{marginRight: 10, fontSize: 15, justifyContent: 'center'}}> Công
                    khai</Text>
                </View>
              </View>
            </View>
            <View style={styles.postInput}>
              <TextInput
                  textAlignVertical="top"
                  style={{height: 400, fontSize: this.state.contentFontSize}}
                  maxFontSizeMultiplier={10}
                  allowFontScaling={true}
                  multiline={true}
                  value={this.getContent()}
                  numberOfLines={10}
                  autoFocus={true}
                  placeholder="Bạn đang nghĩ gì?"
                  onChangeText={this.setContent}
              />
            </View>
            <View style={styles.postOption}>
              <TouchableOpacity style={styles.postOptionItem} onPress={() => {
                alert('Đăng ảnh')
              }}>
                <FontAwesome name="image" size={25} color="black"/>
                <Text style={{marginLeft: 15, fontSize: 20, justifyContent: 'center'}}>Ảnh</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.postOptionItem} onPress={() => {
                alert('Đăng video')
              }}>
                <FontAwesome name="video-camera" size={25} color="black"/>
                <Text style={{marginLeft: 10, fontSize: 20, justifyContent: 'center'}}>Video</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.postOptionItem} onPress={() => {
                this.navigate("AddEmoji")
              }}>
                <MaterialCommunityIcons name="sticker-emoji" size={30} color="black"/>
                <Text style={{marginLeft: 10, fontSize: 20, justifyContent: 'center'}}>Cảm xúc/ Hoạt
                  động</Text>
              </TouchableOpacity>
            </View>

          </Container>
        </>

    )


  }
}

const styles = StyleSheet.create({
  postHeader: {
    flexDirection: "row",
    minHeight: 60,
  },
  useImage: {
    width: 55,
    height: 55,
    borderRadius: 50
  },
  userInfo: {
    flexDirection: "column",
    flex: 8
  },
  userInfoBtns: {
    flexDirection: "row",
  },
  postInput: {
    height: 400,
    marginTop: 10
  },
  postOption: {},
  postOptionItem: {
    flexDirection: 'row',
    borderTopWidth: 1,
    height: 45,
    alignItems: 'center'
  }

})

import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

import {Avatar, Appbar} from 'react-native-paper';
import PopupCamera from './PopupCamera';
import {Container, Item, List, ListItem, Thumbnail, Text, Button, Header, Icon, Content} from 'native-base';
import PopupImage from './PopupImage';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {ScrollView} from 'react-native';
import Article from '../MainPage/Article';
import AppHeaderBar from '../MainPage/AppHeaderBar';
import axios from "axios";
import Utility from "../../../Utility";

const config = require("../../../config.json");

export default class InterfaceUser extends Component {
  constructor(props) {
    super(props);
    this.getToken = this.props.route.params.getToken;
    this.state = {
      articles: [],
      friends: [],
      userName: "Name",
      userAvatar: "",
      totalFriends: 0,
    }
    this.addComment = this.addComment.bind(this);
  }

  navigate(route, data) {
    setTimeout(() => {
      this.props.navigation.navigate(route, data)
    }, 200);
  }

  componentDidMount() {
    this.updateAllPost();
    this.updateUser();
    this.updateFriends();
  }

  updateUser() {
    axios.get(config.host + "/it4895/get_user_info", {
      params: {
        token: this.getToken()
      }
    }).then(function (response) {
      console.log(response.data.data)
      let data = response.data.data;
      if (Utility.isSuccessResponse(response)) {
        this.setState({
          userName: data.username,
          userAvatar: data.avatar,
        })
      } else {
        console.log(response.data);
      }
    }.bind(this))
  }

  updateAllPost() {
    axios.get(config.host + "/it4895/get_list_posts", {
      params: {
        token: this.getToken(),
        last_id: 1
      }
    }).then(function (response) {
      console.log(response.data)
      if (Utility.isSuccessResponse(response)) {
        let articles = [];
        let posts = response.data.data.posts;
        for (let i = 0; i < posts.length; i++) {
          let e = posts[i];
          articles.push({
            id: e.id,
            content: e.described,
            likes: e.like,
            timePosted: e.updated_at,
            image_url: "https://picsum.photos/700"
          })
        }
        this.setState({
          articles: articles,
        })
        this.updateComment();
      }
    }.bind(this))
  }

  addComment(postId, content) {
    axios.post(config.host + "/it4895/set_comment", null, {
      params: {
        token: this.getToken(),
        id: postId,
        described: content
      }
    }).then(function (response) {
      if (Utility.isSuccessResponse(response)) {
        let data = response.data.data;
        let post = this.state.articles.find(e => e.id === postId);
        if (post) {
          post.comments.push({
            userName: this.state.userName,
            content: data.content,
            id: Math.random() * 10000,
            timePosted: new Date()
          })
        }
        this.setState({load: false});
      }
      console.log("Add comment api", response.data)
    }.bind(this))
  }

  updateComment() {
    this.state.articles.forEach(function (post, id) {
      this.updatePostComment(post.id, id);
    }.bind(this));
  }

  updateFriends() {
    axios.get(config.host + "/it4895/get_user_friends", {
      params: {
        token: this.getToken(),
        count: 6,
        index: 0
      }
    }).then(function (response) {
      console.log(response.data.data)
      let data = response.data.data;
      if (Utility.isSuccessResponse(response)) {
        this.setState({
          friends: data.friends,
          totalFriends: data.total
        })
      } else {
      }
    }.bind(this))
  }

  updatePostComment(id, index) {
    axios.get(config.host + "/it4895/get_comment", {
      params: {
        token: this.getToken(),
        id: id
      }
    }).then(function (response) {
      if (Utility.isSuccessResponse(response)) {
        let comments = response.data.data.comment;
        let postComments = [];
        comments.forEach(e => {
          let postComment = {};
          postComment.userName = e.author.name;
          postComment.content = e.content;
          postComment.id = e.id;
          postComments.push(postComment);
        })
        this.state.articles[index].comments = postComments;
        this.state.articles[index].comment = postComments.length;
        this.setState({load: false});
      }
    }.bind(this))
  }


  render() {
    let _this = this;
    let articles = [];

    let user = this.props.route.params.user;
    for (let i = 0; i < this.state.articles.length; i++) {
      articles.push(
          <View key={this.state.articles[i].id}>
            <Article
                navigation={_this.props.navigation}
                selfLoading={false}
                addComment={this.addComment}
                userName={this.state.userName}
                userAvatar={this.state.userAvatar}
                data={this.state.articles[i]}
                hasCommentBtn={true}/>
            <View style={styles.dividerPost}/>
          </View>
      )
    }
    return (
        <Container>
          <AppHeaderBar navigation={this.props.navigation}/>
          <ScrollView
              style={{margin: 10}}
              showsVerticalScrollIndicator={false}
              onScroll={event => {
                if (event.nativeEvent.contentOffset.y === 0) {
                  this.updateAllPost();
                  this.updateFriends();
                }
              }}>
            <Image style={styles.image1}
                   source={require('../image/h4.jpg')} onPress={() => {
            }}/>
            <PopupCamera/>
            <Avatar.Image style={styles.avatar} size={200} source={{uri: this.state.userAvatar}} onPress={() => {
            }}/>
            <PopupImage/>
            <Text style={styles.text0}>{this.state.userName}</Text>
            <Item style={styles.item}>
              <Button style={styles.button1} onPress={() => {
              }}>
              </Button>
              <Button light style={styles.button2} onPress={() => {
                this.props.navigation.navigate("UserSetting")
              }}>
                <Icon style={{marginLeft: '30%'}} type="Entypo" style={{color: "grey", fontSize: 20}}
                      name='dots-three-horizontal'/>
              </Button>
            </Item>
            <Text style={styles.text}><Icon style={styles.iconInf} type="FontAwesome" name='address-book'/> Hà
              Nội</Text>
            <Text style={{paddingBottom: 10}}><Icon style={styles.iconInf} type="FontAwesome" name='home'/> Sống
              tại <Text style={styles.text}>Hà Nội</Text></Text>
            <Text style={{paddingBottom: 10}}><Icon style={styles.iconInf} type="FontAwesome" name='map-marker'/> Đến
              từ <Text style={styles.text}>Đà Nẵng</Text></Text>
            <Text style={{paddingBottom: 10}}><Icon style={styles.iconInf} type="SimpleLineIcons"
                                                    name='user-following'/> Có <Text style={styles.text}>91
              người</Text> theo dõi</Text>
            <Text><Icon type="Entypo" style={styles.iconInf} name='dots-three-horizontal'/> Xem thông tin giới thiệu của
              bạn</Text>
            <Button block info style={styles.edit} onPress={() => {
            }}>
              <Text style={{color: 'blue'}}>Chỉnh sửa chi tiết công khai</Text>
            </Button>
            <Item style={{paddingTop: 20, fontWeight: 'bold'}}></Item>

            <View style=
                      {styles.findFri}
            >
              <Text style={styles.friend}>Bạn bè</Text>
              <TouchableHighlight onPress={() => {
                this.props.navigation.navigate("UserFriends", {
                  userData: user
                })
              }}>
                <Text style={styles.boloc}>Tìm bạn bè</Text>
              </TouchableHighlight>
            </View>
            <Text>{this.state.totalFriends} người bạn</Text>
            <List style={styles.list}>
              <ListItem thumbnail>
                <View style={styles.view0}>
                  <FriendComponent userData={this.state.friends[0]}/>
                  <FriendComponent userData={this.state.friends[1]}/>
                  <FriendComponent userData={this.state.friends[2]}/>
                </View>
              </ListItem>
            </List>
            <List style={styles.list1}>
              <ListItem thumbnail>
                <FriendComponent userData={this.state.friends[3]}/>
                <FriendComponent userData={this.state.friends[4]}/>
                <FriendComponent userData={this.state.friends[5]}/>
              </ListItem>
            </List>
            <Button style={styles.moreview} block light onPress={() => {
              this.navigate("AllFriend")
            }}>
              <Text>Xem tất cả bạn bè</Text>
            </Button>
            <Item style={{paddingTop: 20}}></Item>
            <View style={styles.write}>
              <View style={styles.findFri}>
                <Text style={styles.posts}>Bài viết</Text>
                <Text style={styles.boloc}>Bộ lọc</Text>
              </View>
              <Item style={styles.item} onPress={() => {
              }}>
                <Avatar.Image style={styles.avatar1} size={60} source={{uri: user.image_url}}/>
                <Text style={{color: 'grey'}}> Bạn đang suy nghĩ gì ?</Text>
              </Item>
              <Item style={{paddingBottom: 10}}>

                <Button vertical style={{backgroundColor: '#FFFFFF', marginRight: 10}}>
                  <Icon type="FontAwesome" style={{color: 'purple'}} name="edit"/>
                  <Text style={{color: 'black'}}>Tình trạng</Text>
                </Button>
                <Button vertical style={{backgroundColor: '#FFFFFF', marginRight: 10}}>
                  <Icon style={{color: 'green'}} type="Entypo" name="images"/>
                  <Text style={{color: 'black'}}>Ảnh</Text>
                </Button>
                <Button vertical style={{backgroundColor: '#FFFFFF'}}>
                  <Icon type="MaterialIcons" name="event" style={{color: 'purple'}}/>
                  <Text style={{color: 'black'}}>Sự kiện trong đời</Text>
                </Button>
              </Item>
              <Button style={styles.manage} block onPress={() => {
              }}>
                <Text style={{color: 'black'}}><Icon style={styles.icon2} type="MaterialIcons" name='message'/> Quản lý
                  bài viết</Text>
                <Button style={{border: 5, backgroundColor: 'grey'}}/>
              </Button>
            </View>
            {articles}
          </ScrollView>
        </Container>
    );
  }
}

function FriendComponent({userData}) {
  if (userData == null) {
    return (
        <View style={{width: '33%'}}>
        </View>
    )
  }
  return (
      <View style={{width: '33%'}}>
        <Thumbnail style={styles.image} square source={{uri: userData.avatar}} onPress={() => {
        }}/>
        <Text style={{textAlign: 'center', paddingTop: 5, fontWeight: 'bold'}}>{userData.username}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  dividerPost: {
    borderBottomColor: '#d7d7d7',
    borderBottomWidth: 5,
    elevation: 0,
  },
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